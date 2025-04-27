import React from 'react';
import { Table, Tab, Tabs } from 'react-bootstrap';
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
    {
      id: 2,
      nombres: 'Jane',
      apellidos: 'Smith',
      email: 'jane.smith@example.com',
      telefono: '987-654-3210',
      tipoCliente: 'Premium',
      medioPago: 'PayPal',
      estadoCliente: 'Active',
      descripcionTipoCliente: 'High-value customer',
      ultimaActualizacion: '2023-03-15',
      direccion: '456 Elm St',
      ciudad: 'Los Angeles',
      estado: 'CA',
      pbx: '987-654-321',
      googleMaps: 'https://maps.google.com',
      frecuenciaServicio: 'Bi-weekly',
      horasContratadas: '6',
      valorServicio: '$200',
      indicacionesServicio: 'Deliver to the back door',
      claveConjuntos: '5678',
      clavesResidencia: '1234',
      comoIngresar: 'Ring the bell',
      horarioProgramacion: '10:00 AM - 4:00 PM',
      observacionAtencion: 'Prefers afternoon hours',
    },
    {
      id: 3,
      nombres: 'Alice',
      apellidos: 'Johnson',
      email: 'alice.johnson@example.com',
      telefono: '456-789-1234',
      tipoCliente: 'Regular',
      medioPago: 'Bank Transfer',
      estadoCliente: 'Inactive',
      descripcionTipoCliente: 'Occasional customer',
      ultimaActualizacion: '2023-02-20',
      direccion: '789 Pine St',
      ciudad: 'Chicago',
      estado: 'IL',
      pbx: '456-789-123',
      googleMaps: 'https://maps.google.com',
      frecuenciaServicio: 'Monthly',
      horasContratadas: '3',
      valorServicio: '$75',
      indicacionesServicio: 'Leave at the front desk',
      claveConjuntos: '9101',
      clavesResidencia: '1121',
      comoIngresar: 'Use the main entrance',
      horarioProgramacion: '8:00 AM - 11:00 AM',
      observacionAtencion: 'Prefers early morning hours',
    },
    {
      id: 4,
      nombres: 'Bob',
      apellidos: 'Brown',
      email: 'bob.brown@example.com',
      telefono: '789-123-4567',
      tipoCliente: 'VIP',
      medioPago: 'Cash',
      estadoCliente: 'Active',
      descripcionTipoCliente: 'Loyal customer',
      ultimaActualizacion: '2023-01-10',
      direccion: '321 Oak St',
      ciudad: 'Houston',
      estado: 'TX',
      pbx: '789-123-456',
      googleMaps: 'https://maps.google.com',
      frecuenciaServicio: 'Weekly',
      horasContratadas: '8',
      valorServicio: '$300',
      indicacionesServicio: 'Call before arriving',
      claveConjuntos: '3344',
      clavesResidencia: '5566',
      comoIngresar: 'Enter through the garage',
      horarioProgramacion: '2:00 PM - 6:00 PM',
      observacionAtencion: 'Prefers weekends',
    },
  ];

  return (
    <Tabs defaultActiveKey="info" id="clients-tabs" className="mb-3">
      {/* Tab 1: Clients Information */}
      <Tab eventKey="info" title="Clients Information">
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
              {clients.map((client) => (
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
              {clients.map((client) => (
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
              {clients.map((client) => (
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