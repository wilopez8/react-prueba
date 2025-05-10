import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaPen, FaTrash } from 'react-icons/fa'; // Import icons
import FilterBar from '../../Shared/FilterBar/FilterBar';
import AddDataModal from '../../Shared/AddDataModal/AddDataModal';

const ClientStates = ({ clients, filters, onFilterChange, onSearchChange, searchQuery }) => {
  
    const [showModal, setShowModal] = useState(false);
  
    const fields = [
      { name: 'direccion', label: 'Direccion', type: 'text', required: true },
      { name: 'ciudad', label: 'Ciudad', type: 'text', required: true },
      { name: 'estado', label: 'Estado', type: 'text', required: true },
      { name: 'pbx', label: 'PBX', type: 'text', required: true },
      { name: 'googleMaps', label: 'Google Maps', type: 'text', required: true },
    ];
  
    
  const filteredClients = clients.filter((client) => {
    const matchesStatus =
      filters[0].value === 'all' || client.estadoCliente.toLowerCase() === filters[0].value;
    const matchesSearch =
      client.direccion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.ciudad.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.estado.toLowerCase().includes(searchQuery.toLowerCase());
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
        searchPlaceholder="Search by address, city, or state"
        onFilterChange={onFilterChange}
        onSearchChange={onSearchChange}
        searchValue={searchQuery}
      />
      <div className="button-responsive mt-3">
        <Button variant="primary" className="mb-3" onClick={() => setShowModal(true)}>
          Ingresar Propiedad
        </Button>
      </div>

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
              <th>Actions</th> {/* New Actions column */}
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

export default ClientStates;