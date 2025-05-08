import React from 'react';
import { Table } from 'react-bootstrap';
import FilterBar from '../../Shared/FilterBar/FilterBar';

const ClientStates = ({ clients, filters, onFilterChange, onSearchChange, searchQuery }) => {
  const filteredClients = clients.filter((client) => {
    const matchesStatus =
      filters[0].value === 'all' || client.estadoCliente.toLowerCase() === filters[0].value;
    const matchesSearch =
      client.direccion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.ciudad.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.estado.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <>
      <FilterBar
        filters={filters}
        searchPlaceholder="Search by address, city, or state"
        onFilterChange={onFilterChange}
        onSearchChange={onSearchChange}
        searchValue={searchQuery}
      />
      <div className="table-responsive">
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Direccion</th>
              <th>Ciudad</th>
              <th>Estado</th>
              <th>PBX</th>
              <th>Google Maps</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.direccion}</td>
                <td>{client.ciudad}</td>
                <td>{client.estado}</td>
                <td>{client.pbx}</td>
                <td>
                  <a href={client.googleMaps} target="_blank" rel="noopener noreferrer">
                    View Map
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ClientStates;