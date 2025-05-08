import React from 'react';
import { Table } from 'react-bootstrap';
import FilterBar from '../../Shared/FilterBar/FilterBar';

const ClientTable = ({ clients, filters, onFilterChange, onSearchChange, searchQuery }) => {
  const filteredClients = clients.filter((client) => {
    const matchesStatus =
      filters[0].value === 'all' || client.estadoCliente.toLowerCase() === filters[0].value;
    const matchesSearch =
      client.nombres.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.apellidos.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <>
      <FilterBar
        filters={filters}
        searchPlaceholder="Search by name, email, or phone"
        onFilterChange={onFilterChange}
        onSearchChange={onSearchChange}
        searchValue={searchQuery}
      />
      <div className="table-responsive">
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>E-mail</th>
              <th>Telefono Mobile</th>
              <th>Tipo de Cliente</th>
              <th>Medio de Pago</th>
              <th>Estado del Cliente</th>
              <th>Descripcion del Tipo de Cliente</th>
              <th>Ultima Actualizacion</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.nombres}</td>
                <td>{client.apellidos}</td>
                <td>{client.email}</td>
                <td>{client.telefono}</td>
                <td>{client.tipoCliente}</td>
                <td>{client.medioPago}</td>
                <td>{client.estadoCliente}</td>
                <td>{client.descripcionTipoCliente}</td>
                <td>{client.ultimaActualizacion}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ClientTable;