import React from 'react';
import { Link } from 'react-router-dom';
import data from './data.json'; // Import the stock data from the local JSON file

// This component is responsible for displaying a list of stocks in a tabular format
function Dashboard() {
  // The return statement renders the JSX for the component
  return (
    <div>
      <h2>Most Active Stocks</h2> {/* Title for the dashboard */}
      <table>
        <thead>
          <tr>
            {/* Table headers */}
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the stock data and create a table row for each stock */}
          {data.map((stock, index) => (
            <tr key={index}> {/* Each row has a unique key for React's reconciliation process */}
              <td>
                {/* Link to the individual stock's page using its symbol */}
                <Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link>
              </td>
              {/* Display the last price and the change of the stock */}
              <td>{stock.lastPrice}</td>
              <td>{stock.change > 0 ? `+${stock.change}` : stock.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard; // Export the Dashboard component for use in the app
