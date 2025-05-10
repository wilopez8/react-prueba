import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaPen, FaTrash } from 'react-icons/fa'; // Import icons
import FilterBar from '../../Shared/FilterBar/FilterBar';
import AddDataModal from '../../Shared/AddDataModal/AddDataModal';

const ClientTable = ({ clients, filters, onFilterChange, onSearchChange, searchQuery }) => {
  const [showModal, setShowModal] = useState(false);

  const fields = [
    { name: 'nombres', label: 'Nombres', type: 'text', required: true },
    { name: 'apellidos', label: 'Apellidos', type: 'text', required: true },
    { name: 'email', label: 'E-mail', type: 'email', required: true },
    { name: 'telefono', label: 'Telefono Mobile', type: 'text', required: true },
    { name: 'tipoCliente', label: 'Tipo de Cliente', type: 'text', required: true },
    { name: 'medioPago', label: 'Medio de Pago', type: 'text', required: true },
    { name: 'estadoCliente', label: 'Estado del Cliente', type: 'text', required: true },
    { name: 'descripcionTipoCliente', label: 'Descripcion del Tipo de Cliente', type: 'text' },
    { name: 'ultimaActualizacion', label: 'Ultima Actualizacion', type: 'date' },
  ];

  const filteredClients = clients.filter((client) => {
    const matchesStatus =
      filters[0].value === 'all' || client.estadoCliente.toLowerCase() === filters[0].value;
    const matchesSearch =
      client.nombres.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.apellidos.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleEdit = (client) => {
    console.log('Edit client:', client);
    // Add logic to handle editing the client
  };

  const handleDelete = (clientId) => {
    console.log('Delete client with ID:', clientId);
    // Add logic to handle deleting the client
  };

  return (
    <>
      <FilterBar
        filters={filters}
        searchPlaceholder="Search by name, email, or phone"
        onFilterChange={onFilterChange}
        onSearchChange={onSearchChange}
        searchValue={searchQuery}
      />
      <div className="button-responsive mt-3">
        <Button variant="primary" className="mb-3" onClick={() => setShowModal(true)}>
          Ingresar Cliente
        </Button>
      </div>

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
              <th>Actions</th> {/* New Actions column */}
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
                <td>
                  {/* Action buttons */}
                  <Button
                    variant="warning"
                    size="sm"
                    className="small-button me-1"
                    style={{ padding: '1.5px 3.5px', fontSize: '12px' }} // Custom inline styles
                    onClick={() => handleEdit(client)}
                  >
                    <FaPen />
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="small-button me-1"
                    style={{ padding: '1.5px 3.5px', fontSize: '12px' }} // Custom inline styles
                   onClick={() => handleDelete(client.id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <AddDataModal
        show={showModal}
        onHide={() => setShowModal(false)}
        fields={fields}
      />
    </>
  );
};

export default ClientTable;