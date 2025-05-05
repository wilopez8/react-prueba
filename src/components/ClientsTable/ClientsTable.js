import React, { useState } from 'react';
import { Table, Tab, Tabs } from 'react-bootstrap';
import FilterBar from '../Shared/FilterBar/FilterBar'; // Import the reusable FilterBar component
import './ClientsTable.css';

const ClientsTable = () => {
  // Dummy data for clients
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
    // Add more client objects as needed
  ];

  // State for filters and search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Filter options for each tab
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

  // Handlers for filter and search
  const handleFilterChange = (filterName, value) => {
    if (filterName === 'status') {
      setStatusFilter(value);
    }
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  // Filtered data for each tab
  const filteredClients = clients.filter((client) => {
    const matchesStatus =
      statusFilter === 'all' || client.estadoCliente.toLowerCase() === statusFilter;
    const matchesSearch =
      client.nombres.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.apellidos.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <Tabs defaultActiveKey="info" id="clients-tabs" className="mb-3">
      {/* Tab 1: Clients Information */}
      <Tab eventKey="info" title="Clients Information">
        <FilterBar
          filters={filters}
          searchPlaceholder="Search by name, email, or phone"
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
          searchValue={searchQuery}
        />
        <div className="table-responsive">
          <Table striped bordered hover>
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
      </Tab>

      {/* Tab 2: Clients State */}
      <Tab eventKey="state" title="Clients State">
        <FilterBar
          filters={filters}
          searchPlaceholder="Search by address, city, or state"
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
          searchValue={searchQuery}
        />
        <div className="table-responsive">
          <Table striped bordered hover>
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
      </Tab>

      {/* Tab 3: Instructions for Each Service */}
      <Tab eventKey="instructions" title="Service Instructions">
        <FilterBar
          filters={filters}
          searchPlaceholder="Search by frequency, hours, or instructions"
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
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
      </Tab>
    </Tabs>
  );
};

export default ClientsTable;