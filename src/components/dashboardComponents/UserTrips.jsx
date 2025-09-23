import useApi from "@/hooks/useApi";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Loading from "../shared/Loading";
import { Calendar, Plane, Star, Users } from "lucide-react";
import { Badge } from "../ui/badge";

const UserTrips = () => {
  // const {data, loading, error} = useApi("/trips");

  // if(loading) return <Loading text='Getting your trips' />
  // if(error) return <div>Error: {error.message}</div>
  // console.log(data);

  const data = [
    {
      _id: 1,
      title: "Paris, France Trip",
      budget: 2000,
      startDate: "2023-10-01",
      endDate: "2023-10-01",
    },
    {
      _id: 2,
      title: "London, UK Trip",
      budget: 2000,
      startDate: "2023-10-01",
      endDate: "2023-10-01",
    },
    {
      _id: 3,
      title: "New York, USA Trip",
      budget: 2000,
      startDate: "2023-10-01",
      endDate: "2023-10-01",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Your Trips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((trip) => {
          return (
            <Card
              key={trip._id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{trip.title}</h3>
                    <p className="text-gray-600">status</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600">
                      ${trip.budget}
                    </span>
                    <p className="text-sm text-gray-600">per person</p>
                  </div>
                </div>

                {/* <p className="text-gray-600 text-sm my-4">lorem20</p> */}

                <div className="flex items-center justify-between text-sm text-gray-600 my-8">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {trip.startDate} - {trip.endDate}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {5}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {["place 1", "place 2", "place 3"]
                      .slice(0, 3)
                      .map((highlight, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="w-full">
                    <Plane className="mr-2 h-4 w-4" />
                    View Trip
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default UserTrips;
