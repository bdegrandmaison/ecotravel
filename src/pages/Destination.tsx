import React from "react";
import { useParams } from "react-router-dom";
import { Card, Spin, Carousel } from "antd";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DestinationType } from "../types";
import { formatDate, formatPrice } from "../utils";

const fetchDestination = async (id: string): Promise<DestinationType> => {
  const { data } = await axios.get(`/api/destinations/${id}`);
  return data;
};

const Destination: React.FC = () => {
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
    return (
      <div>
        <Card
          title={destination.name}
          cover={
            <Carousel autoplay arrows adaptiveHeight>
              <div key={0}>
                <img
                  alt={destination.image.altText}
                  src={destination.image.src}
                  style={carouselImageStyle}
                />
              </div>

              {destination.additionalImages.map((image, index) => (
                <div key={index + 1}>
                  <img
                    src={image.src}
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
