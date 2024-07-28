import {
  Button,
  Form,
  DatePicker,
  Typography,
  Input,
  List,
  Alert,
  Carousel,
} from "antd";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import DestinationCard from "../components/DestinationCard";
import { DestinationType } from "../types";
import mockDestinations from "../mocks/mockData/mockDestinations";

const { Title } = Typography;
const { RangePicker } = DatePicker;

dayjs.extend(customParseFormat);

const dateFormat = "DD/MM/YYYY";

const disabledDate = (current: Dayjs) => {
  return (
    current &&
    (current < dayjs("2024-07-01", dateFormat) ||
      current > dayjs("2024-12-31", dateFormat))
  );
};

// TODO: create an array of 5 numbers from 1 to 20

const createRandomNumberArray = () => {
  const numbers: number[] = [];
  for (let i = 1; numbers.length !== 5; i++) {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    if (!numbers.includes(randomNumber)) numbers.push(randomNumber);
  }
  return numbers;
};

const postSearchRange = async (searchDates: any): Promise<any> => {
  const response = await fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchDates),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Home = () => {
  const [form] = Form.useForm();
  const dates = Form.useWatch("dates", form);
  const [searchResults, setSearchResults] = useState<
    DestinationType[] | undefined
  >();
  const travellers = Form.useWatch("travellers", form);

  const [isDisabled, setIsDisabled] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [fetchError, setFetchError] = useState<Error | null>(null);

  const deviceWidth = window.innerWidth;

  const { mutate } = useMutation({
    mutationFn: postSearchRange,
    onSettled: (data, error) => {
      if (error) {
        setFetchError(error);
      }
      if (!error && data) {
        if (data.length === 0) {
          setNoResults(true);
        } else {
          if (noResults) {
            setNoResults(false);
          }
          setSearchResults(data);
        }
      }
    },
  });

  useEffect(() => {
    if (dates || travellers) {
      setIsDisabled(false);
    } else {
      if (!isDisabled) {
        setIsDisabled(true);
      }
    }
  }, [dates, travellers]);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    if (values.dates || values.travellers) {
      mutate(values);
    } else {
      console.log("Veuillez entrer une plage de dates");
    }
  };

  return (
    <div>
      <Title>Bienvenue sur EcoTravel</Title>
      <p>
        Découvrez des destinations en participant à des actions pour sauver
        l'écosysteme de notre planète.
      </p>
      <Form
        form={form}
        name="customized_form_controls"
        layout={deviceWidth < 768 ? "vertical" : "inline"}
        onFinish={onFinish}
      >
        <Form.Item name="dates" label="Entrez une plage de dates: ">
          <RangePicker
            disabledDate={disabledDate}
            format={dateFormat}
            placement="bottomLeft"
          />
        </Form.Item>

        <Form.Item name="travellers" label="Nombre de voyageurs: ">
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={isDisabled}>
            Rechercher
          </Button>
        </Form.Item>
      </Form>

      {searchResults && searchResults.length > 0 ? (
        <div style={{ padding: " 1rem O", margin: "1rem 0" }}>
          <h4>{searchResults.length} résultats à votre recherche:</h4>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            dataSource={searchResults}
            renderItem={(item) => (
              <List.Item>
                <DestinationCard destination={item} />
              </List.Item>
            )}
            style={{ margin: "1rem 0" }}
          />
        </div>
      ) : null}

      {fetchError ? (
        <Alert
          message="Une erreur est survenue lors du traitement de votre recherche."
          type="error"
          showIcon
          style={{ padding: " 1rem O", margin: "1rem 0" }}
        />
      ) : null}

      {noResults ? (
        <Alert
          message="Aucun résultat pour votre recherche."
          type="warning"
          showIcon
          style={{ padding: " 1rem O", margin: "1rem 0" }}
        />
      ) : null}
      <div
        style={{
          padding: " 1rem O",
        }}
      >
        <Carousel autoplay adaptiveHeight style={{ margin: "2rem 0" }}>
          {createRandomNumberArray().map((number) => (
            <div key={number}>
              <img
                src={mockDestinations[number - 1].image.src}
                alt={mockDestinations[number - 1].image.altText}
                style={{ margin: "auto" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
