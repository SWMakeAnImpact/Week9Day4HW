import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json'; // Make sure this file path is correct

// This component displays the details of a single stock
function Stock() {
  // Use the useParams hook to retrieve the symbol from the URL
  const { symbol } = useParams();
  // Find the stock in your data that matches the symbol
  const stock = data.find(s => s.symbol === symbol);

  // Debugging: log the symbol and the found stock object to the console
  console.log("URL symbol:", symbol);
  console.log("Found stock:", stock);

  // Render the details of the stock or a not found message if the stock doesn't exist
  return (
    <div>
      {stock ? (
        // If the stock is found, display its details
        <div>
          <h1>{stock.name}</h1> {/* Display the stock's name */}
          <p>Symbol: {stock.symbol}</p> {/* Display the stock's symbol */}
          <p>Price: {stock.lastPrice}</p> {/* Display the last price */}
          <p>Change: {stock.change}</p> {/* Display the change in price */}
          <p>High: {stock.high}</p> {/* Display the high price for the day */}
          <p>Low: {stock.low}</p> {/* Display the low price for the day */}
          <p>Open: {stock.open}</p> {/* Display the opening price */}
        </div>
      ) : (
        // If the stock is not found, display a not found message
        <p>Stock not found</p>
      )}
    </div>
  );
}

export default Stock; // Export the Stock component for use in the app
