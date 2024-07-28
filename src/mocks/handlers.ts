import { http, delay, HttpResponse } from "msw";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import mockDestinations from "./mockData/mockDestinations";
import { DestinationType, SearchDestinationRequest } from "../types";

dayjs.extend(isBetween);

type Destination = {
  id: number;
  name: string;
  description: string;
  location: string;
};

export const handlers = [
  http.get<{}, DestinationType[]>("/api/destinations", async () => {
    await delay();
    return HttpResponse.json(mockDestinations);
  }),

  http.get<{ id: string }, Destination | null>(
    "/api/destinations/:id",
    async ({ params }) => {
      const { id } = params;
      const destination = mockDestinations.find(
        (dest) => dest.id === Number(id)
      );
      if (destination) {
        return HttpResponse.json(destination);
      } else {
        return HttpResponse.json(null, { status: 404 });
      }
    }
  ),
  http.post<{}, SearchDestinationRequest, DestinationType[]>(
    "/api/search",
    async ({ request }) => {
      const body = await request.json();

      if (body.dates && body.travellers) {
        const [startDate, endDate] = body.dates;
        const { travellers } = body;
        const results = mockDestinations.filter((dest) => {
          const destStartDate = dayjs(dest.startDate);
          const destEndDate = dayjs(dest.endDate);
          return (
            destStartDate.isBetween(startDate, endDate, "day", "[]") &&
            destEndDate.isBetween(startDate, endDate, "day", "[]") &&
            dest.maxParticipants - dest.currentParticipants >= travellers
          );
        });
        return HttpResponse.json(results);
      }

      if (body.dates) {
        const [startDate, endDate] = body.dates;
        const dateResults = mockDestinations.filter((dest) => {
          const destStartDate = dayjs(dest.startDate);
          const destEndDate = dayjs(dest.endDate);
          return (
            destStartDate.isBetween(startDate, endDate, "day", "[]") &&
            destEndDate.isBetween(startDate, endDate, "day", "[]")
          );
        });
        return HttpResponse.json(dateResults);
      }

      if (body.travellers) {
        const { travellers } = body;
        const travellerResults = mockDestinations.filter((dest) => {
          return dest.maxParticipants - dest.currentParticipants >= travellers;
        });
        return HttpResponse.json(travellerResults);
      }

      return HttpResponse.json([], { status: 400 });
    }
  ),
];
