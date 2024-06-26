import React from 'react';
import ParkingTicket from './ParkingTicket';
import { useParkingTicketContext } from './ParkingTicketContext';

const ParkingTicketList = () => {
  const { parkingTickets, calculateTotalPrice } = useParkingTicketContext();

  return (
    <div>
      {parkingTickets.map((ticket) => (
        <ParkingTicket
          key={ticket.name}
          parkingTicket={ticket}
        />
      ))}
      <h3>Total Price: ${calculateTotalPrice()}</h3>
    </div>
  );
};

export default ParkingTicketList;
