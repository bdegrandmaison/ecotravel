import { useParams } from "react-router-dom";
import { Card, Spin, Carousel, DatePicker, Form, Input, Button } from "antd";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DestinationType } from "../types";
import { dateFormat, formatDate, formatPrice, formatRoute } from "../utils";
import dayjs, { Dayjs } from "dayjs";

const fetchDestination = async (id: string): Promise<DestinationType> => {
  const { data } = await axios.get(`/api/destinations/${id}`);
  return data;
};

const { RangePicker } = DatePicker;

const Destination = () => {
  const [form] = Form.useForm();
  const { id } = useParams<{ id: string }>();
  const {
    data: destination,
    error,
    isLoading,
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

  if (isLoading) return <Spin size="large" />;
  if (error) return <div>Erreur lors du chargement de la destination</div>;

  if (destination) {
    const disabledDates = (current: Dayjs) => {
      console.log(current);

      return (
        current < dayjs(destination.startDate) ||
        current > dayjs(destination.endDate)
      );
    };

    // const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    //   return current && current < dayjs().endOf('day');
    // };

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
            <b>Price:</b> {formatPrice(destination.price)} par jour
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
            name="customized_form_controls"
            layout={"vertical"}
            // onFinish={onFinish}
          >
            <Form.Item name="dates" label="Entrez une plage de dates: ">
              <RangePicker
                disabledDate={disabledDates}
                format={dateFormat}
                placement="bottomLeft"
                defaultPickerValue={[
                  dayjs(destination.startDate),
                  dayjs(destination.endDate),
                ]}
                minDate={dayjs(destination.startDate)}
                maxDate={dayjs(destination.endDate)}
              />
            </Form.Item>

            <Form.Item name="travellers" label="Nombre de voyageurs: ">
              <Input
                type="number"
                min={1}
                max={
                  destination.maxParticipants - destination.currentParticipants
                }
                defaultValue={1}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Réserver
              </Button>
            </Form.Item>
          </Form>
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
