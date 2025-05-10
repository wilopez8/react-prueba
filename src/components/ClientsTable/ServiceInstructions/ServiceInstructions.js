import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaPen, FaTrash } from 'react-icons/fa'; // Import icons
import FilterBar from '../../Shared/FilterBar/FilterBar';

const ServiceInstructions = ({ clients, filters, onFilterChange, onSearchChange, searchQuery }) => {
  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.frecuenciaServicio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.indicacionesServicio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
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
        searchPlaceholder="Search by frequency, hours, or instructions"
        onFilterChange={onFilterChange}
        onSearchChange={onSearchChange}
        searchValue={searchQuery}
      />
      <div className="table-responsive">
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Frecuencia del Servicio</th>
              <th>Horas Contratadas</th>
              <th>Valor por Servicio</th>
              <th>Indicaciones del Servicio</th>
              <th>Clave Conjuntos</th>
              <th>Claves Residencia</th>
              <th>Como Ingresar</th>
              <th>Horario Programacion</th>
              <th>Observacion de Atencion</th>
              <th>Actions</th> {/* New Actions column */}
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.frecuenciaServicio}</td>
                <td>{client.horasContratadas}</td>
                <td>{client.valorServicio}</td>
                <td>{client.indicacionesServicio}</td>
                <td>{client.claveConjuntos}</td>
                <td>{client.clavesResidencia}</td>
                <td>{client.comoIngresar}</td>
                <td>{client.horarioProgramacion}</td>
                <td>{client.observacionAtencion}</td>
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
    </>
  );
};

export default ServiceInstructions;