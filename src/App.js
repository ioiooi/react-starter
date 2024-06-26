import React, { useState } from 'react';
import ParkingTicket from './ParkingTicket';

const parkingTickets = [
  { name: 'Ticket A', price: 10, maxAmount: 5, selectedAmount: 2 },
  { name: 'Ticket B', price: 20, maxAmount: 4, selectedAmount: 1 },
  { name: 'Ticket C', price: 15, maxAmount: 3, selectedAmount: 1 },
  // Add more tickets as needed
];

const App = () => {
  const [tickets, setTickets] = useState(parkingTickets);

  const handleIncrement = (name) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.name === name ? { ...ticket, selectedAmount: ticket.selectedAmount + 1 } : ticket
    );
    setTickets(updatedTickets);
  };

  const handleDecrement = (name) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.name === name ? { ...ticket, selectedAmount: ticket.selectedAmount - 1 } : ticket
    );
    setTickets(updatedTickets);
  };

  const calculateTotalPrice = () => {
    return tickets.reduce((total, ticket) => {
      return total + ticket.selectedAmount * ticket.price;
    }, 0);
  };

  return (
    <div>
      <h1>Parking Ticket Counter App</h1>
      {tickets.map((ticket) => (
        <ParkingTicket
          key={ticket.name}
          parkingTicket={ticket}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <h3>Total Price: ${calculateTotalPrice()}</h3>
    </div>
  );
};

export default App;
