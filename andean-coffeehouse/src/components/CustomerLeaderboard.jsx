import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerLeaderboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/api/index.php?leaderboard');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customer leaderboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Orders
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            First Purchase Date
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {customers.map((customer, index) => (
          <tr key={customer.customer_id} className={index === 0 ? 'bg-[#c9b037] text-white font-bold' : index === 1 ? 'bg-[#b4b4b4]' : index === 2 ? 'bg-[#6a3805]' : ''}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className={`text-sm ${index < 3 ? 'font-bold' : 'font-medium'} ${index < 3 ? 'text-white' : 'text-gray-900'}`}>
                {customer.customer_name}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className={`text-sm ${index < 3 ? 'font-bold' : 'font-medium'} ${index < 3 ? 'text-white' : 'text-gray-900'}`}>
                {customer.orders}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className={`text-sm ${index < 3 ? 'font-bold' : 'font-medium'} ${index < 3 ? 'text-white' : 'text-gray-900'}`}>
                {customer.first_purchase_date}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerLeaderboard;
