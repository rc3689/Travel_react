import UserTrips from "@/components/dashboardComponents/UserTrips";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const Trips = () => {
  return (
    <main className="py-4 px-4 md:px-6 lg:px-20">
      {/* heading  */}
      <div className="lg:flex items-center justify-between lg:mt-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Your Trips</h1>
          <p className="text-sm text-gray-400 mb-6">
            Manage and explore your travel adventures with ease.
          </p>
        </div>

        <div className="flex justify-end">
          <a href="/trips/add">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              <span>Add New Trip</span>
            </Button>
          </a>
        </div>
      </div>

      <UserTrips />
    </main>
  );
};

export default Trips;
