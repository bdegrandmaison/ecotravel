import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Spin,
  Carousel,
  Form,
  Input,
  Button,
  FormInstance,
  Space,
  Alert,
} from "antd";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import { DestinationType } from "../types";
import {
  formatDate,
  formatPrice,
  formatRoute,
  getDaysBetweenDates,
} from "../utils";

const fetchDestination = async (id: string): Promise<DestinationType> => {
  const { data } = await axios.get(`/api/destinations/${id}`);
  return data;
};

const postBookDestination = async (data: any): Promise<{ ok: boolean }> => {
  const response = await axios.post("/api/book", data);
  return response.data.ok;
};

interface SubmitButtonProps {
  form: FormInstance;
  isPending?: boolean;
  isFull?: boolean;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
  isPending = false,
  isFull = false,
}) => {
  const [submittable, setSubmittable] = useState<boolean>(false);

  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable || isPending || isFull}
    >
      {isPending ? <Spin /> : children}
    </Button>
  );
};

const Destination = () => {
  const [form] = Form.useForm();
  const { id } = useParams<{ id: string }>();
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [travellersCount, setTravellersCount] = useState<number>(1);
  const {
    data: destination,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["destination", id],
    queryFn: () => {
      if (!id) {
        return Promise.reject(new Error("ID is undefined"));
      }
      return fetchDestination(id);
    },
    enabled: !!id,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: postBookDestination,
    onSuccess: (ok) => {
      if (ok) {
        setBookingSuccess(true);
        refetch();
      }
    },
  });

  const onFinish = (values: any) => {
    setTravellersCount(values.travellers);
    mutate({ ...values, destinationId: destination?.id });
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Erreur lors du chargement de la destination</div>;

  if (destination) {
    const isFull =
      destination.currentParticipants >= destination.maxParticipants;

    return (
      <div>
        <Card
          title={destination.name}
          cover={
            <Carousel autoplay arrows adaptiveHeight>
              <div key={0}>
                <img
                  loading="eager"
                  alt={destination.image.altText}
                  src={`${formatRoute()}${destination.image.src}`}
                  style={carouselImageStyle}
                />
              </div>

              {destination.additionalImages.map((image, index) => (
                <div key={index + 1}>
                  <img
                    loading="eager"
                    src={`${formatRoute()}${image.src}`}
                    alt={image.altText}
                    style={carouselImageStyle}
                  />
                </div>
              ))}
            </Carousel>
          }
        >
          <p>{destination.description}</p>
          <p>
            <b>Location:</b> {destination.location}
          </p>
          <p>
            <b>Price:</b> {formatPrice(destination.price)} par jour et par
            personne. Ce prix comprend l'hébergement , les frais de restauration
            et de transport lors du séjour avec la fête de célébration en fin de
            mission du séjour.
          </p>
          <p>
            <b>Dates:</b> Du {formatDate(destination.startDate)} au{" "}
            {formatDate(destination.endDate)}
          </p>
          <p>
            <b>Participants:</b> {destination.currentParticipants}/
            {destination.maxParticipants}
          </p>
          <p>
            <b>Pourquoi agir:</b> {destination.summary.why}
          </p>
          <p>
            <b>Ce que vous ferez:</b> {destination.summary.action}
          </p>
          <Form
            form={form}
            name="bookForm"
            layout={"vertical"}
            onFinish={onFinish}
            disabled={isFull}
          >
            <Form.Item
              name="travellers"
              label="Nombre de voyageurs: "
              rules={[{ required: true }]}
            >
              <Input
                type="number"
                min={1}
                max={
                  destination.maxParticipants - destination.currentParticipants
                }
              />
            </Form.Item>
            <Form.Item>
              <Space>
                <SubmitButton form={form} isPending={isPending} isFull={isFull}>
                  Réserver
                </SubmitButton>
              </Space>
            </Form.Item>
          </Form>

          {bookingSuccess && (
            <Alert
              message={`Voyage réservé avec succès, partie paiement à venir pour votre paiement de ${formatPrice(
                destination.price *
                  travellersCount *
                  getDaysBetweenDates(
                    destination.startDate,
                    destination.endDate
                  )
              )}`}
              type="success"
            />
          )}
        </Card>
      </div>
    );
  }
};

export default Destination;

const carouselImageStyle: React.CSSProperties = {
  width: "100%",
  height: "500px",
  objectFit: "cover",
};
