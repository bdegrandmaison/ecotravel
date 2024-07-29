import { Alert, List } from "antd";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DestinationCard from "../components/DestinationCard";
import Loading from "../components/Loading";
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

  if (isLoading) return <Loading />;
  if (error) return <div>Erreur lors du chargement des destinations</div>;

  return (
    <div style={{ padding: "24px" }}>
      <Alert
        message="Les bloqueurs de pubs peuvent parfois interférer avec le fonctionnement de l'application, si c'est votre cas, merci d'ouvrir le lien en navigation privée"
        type="warning"
        showIcon
        style={{ padding: " 1rem O", margin: "1rem 0" }}
      />
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
