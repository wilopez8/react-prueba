import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ClientTable from '../components/ClientsTable/ClientsInfo/ClientsTable';
import ClientStates from '../components/ClientsTable/ClientStates/ClientStates';
import ServiceInstructions from '../components/ClientsTable/ServiceInstructions/ServiceInstructions';
import 'bootstrap/dist/css/bootstrap.min.css';

const ClientsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const clients = [
    {
      id: 1,
      nombres: 'John',
      apellidos: 'Doe',
      email: 'john.doe@example.com',
      telefono: '123-456-7890',
      tipoCliente: 'Regular',
      medioPago: 'Credit Card',
      estadoCliente: 'Active',
      descripcionTipoCliente: 'Frequent customer',
      ultimaActualizacion: '2023-04-01',
      direccion: '123 Main St',
      ciudad: 'New York',
      estado: 'NY',
      pbx: '123-456-789',
      googleMaps: 'https://maps.google.com',
      frecuenciaServicio: 'Weekly',
      horasContratadas: '4',
      valorServicio: '$100',
      indicacionesServicio: 'Handle with care',
      claveConjuntos: '1234',
      clavesResidencia: '5678',
      comoIngresar: 'Use the side gate',
      horarioProgramacion: '9:00 AM - 1:00 PM',
      observacionAtencion: 'Customer prefers morning hours',
    },
  ];

  const filters = [
    {
      name: 'status',
      label: 'Estado del Cliente',
      value: statusFilter,
      options: [
        { value: 'all', label: 'Todos' },
        { value: 'active', label: 'Activo' },
        { value: 'inactive', label: 'Inactivo' },
      ],
    },
  ];

  const handleFilterChange = (filterName, value) => {
    if (filterName === 'status') {
      setStatusFilter(value);
    }
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  return (
    <Tabs defaultActiveKey="info" id="clients-tabs" className="mb-3">
      <Tab eventKey="info" title="Clients Information">
        <ClientTable
          clients={clients}
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
          searchQuery={searchQuery}
        />
      </Tab>
      <Tab eventKey="state" title="Clients State">
        <ClientStates
          clients={clients}
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
          searchQuery={searchQuery}
        />
      </Tab>
      <Tab eventKey="instructions" title="Service Instructions">
        <ServiceInstructions
          clients={clients}
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
          searchQuery={searchQuery}
        />
      </Tab>
    </Tabs>
  );
};

export default ClientsPage;