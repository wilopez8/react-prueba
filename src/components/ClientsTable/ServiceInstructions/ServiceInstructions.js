import React from 'react';
import { Table } from 'react-bootstrap';
import FilterBar from '../../Shared/FilterBar/FilterBar';

const ServiceInstructions = ({ clients, filters, onFilterChange, onSearchChange, searchQuery }) => {
  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.frecuenciaServicio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.indicacionesServicio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

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
        <Table striped bordered hover>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ServiceInstructions;