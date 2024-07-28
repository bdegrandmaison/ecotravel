import { Card } from "antd";
import { Link } from "react-router-dom";
import { DestinationType } from "../types";
import { formatDate, formatPrice, formatRoute } from "../utils";

const DestinationCard = ({ destination }: { destination: DestinationType }) => {
  return (
    <Link
      to={`${formatRoute()}destinations/${destination.id}`}
      style={{ display: "block" }}
    >
      <Card
        hoverable
        cover={
          <img
            alt={destination.image.altText}
            src={`${formatRoute()}${destination.image.src}`}
          />
        }
        title={destination.name}
      >
        <p>
          <b>Mission:</b> {destination.description}
        </p>
        <p>
          <b>Location:</b> {destination.location}
        </p>
        <p>
          <b>Prix:</b> {formatPrice(destination.price)} par jour
        </p>
        <p>
          <b>Dates:</b> Du {formatDate(destination.startDate)} au{" "}
          {formatDate(destination.endDate)}
        </p>
        <p>
          <b>Participants:</b> {destination.currentParticipants}/
          {destination.maxParticipants}
        </p>
      </Card>
    </Link>
  );
};

export default DestinationCard;
