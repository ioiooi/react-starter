import React from 'react';
import { useParkingTicketContext } from './ParkingTicketContext';

const ParkingTicket = ({ parkingTicket }) => {
  const { name, price, maxAmount, selectedAmount } = parkingTicket;
  const { onIncrement, onDecrement } = useParkingTicketContext();

  const handleIncrement = () => {
    if (selectedAmount < maxAmount) {
      onIncrement(name);
    }
  };

  const handleDecrement = () => {
    if (selectedAmount > 0) {
      onDecrement(name);
    }
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{selectedAmount}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ParkingTicket;
