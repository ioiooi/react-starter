import React, { createContext, useContext, useState } from 'react';

const parkingTicketsData = [
  { name: 'Ticket A', price: 10, maxAmount: 5, selectedAmount: 2 },
  { name: 'Ticket B', price: 20, maxAmount: 4, selectedAmount: 1 },
  { name: 'Ticket C', price: 15, maxAmount: 3, selectedAmount: 1 },
  // Add more tickets as needed
];

const ParkingTicketContext = createContext();

export const useParkingTicketContext = () => useContext(ParkingTicketContext);

export const ParkingTicketProvider = ({ children }) => {
  const [parkingTickets, setParkingTickets] = useState(parkingTicketsData);

  const onIncrement = (name) => {
    const updatedTickets = parkingTickets.map((ticket) =>
      ticket.name === name ? { ...ticket, selectedAmount: ticket.selectedAmount + 1 } : ticket
    );
    setParkingTickets(updatedTickets);
  };

  const onDecrement = (name) => {
    const updatedTickets = parkingTickets.map((ticket) =>
      ticket.name === name ? { ...ticket, selectedAmount: ticket.selectedAmount - 1 } : ticket
    );
    setParkingTickets(updatedTickets);
  };

  const calculateTotalPrice = () => {
    return parkingTickets.reduce((total, parkingTicket) => {
      return total + parkingTicket.selectedAmount * parkingTicket.price;
    }, 0);
  };

  return (
    <ParkingTicketContext.Provider
      value={{ parkingTickets, onIncrement, onDecrement, calculateTotalPrice }}
    >
      {children}
    </ParkingTicketContext.Provider>
  );
};
