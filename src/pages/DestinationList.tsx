import { List, Spin } from "antd";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DestinationCard from "../components/DestinationCard";
import { DestinationType } from "../types";

const fetchDestinations = async (): Promise<DestinationType[]> => {
  const { data } = await axios.get("/api/destinations");
  return data;
};

const DestinationList = () => {
  const {
    data: destinations = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["destinations"],
    queryFn: fetchDestinations,
  });

  if (isLoading) return <Spin size="large" />;
  if (error) return <div>Erreur lors du chargement des destinations</div>;

  return (
    <div style={{ padding: "24px" }}>
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
        dataSource={destinations}
        renderItem={(item) => (
          <List.Item>
            <DestinationCard destination={item} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default DestinationList;
