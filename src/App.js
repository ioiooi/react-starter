import React from "react";
import ParkingTicketList from "./ParkingTicketList";
import { ParkingTicketProvider } from "./ParkingTicketContext";

const App = () => {
  return (
    <ParkingTicketProvider>
      <div>
        <h1>Parking Ticket Counter App</h1>
        <ParkingTicketList />
      </div>
    </ParkingTicketProvider>
  );
};

export default App;
