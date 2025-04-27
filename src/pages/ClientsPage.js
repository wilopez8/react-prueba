import React from 'react';
import ClientsTable from '../components/ClientsTable/ClientsTable';

const ClientsPage = () => {
  return (
    <div>
      <h1>Clients</h1>
      <p>Below is a list of clients with their details:</p>
      <ClientsTable />
    </div>
  );
};

export default ClientsPage;