import React from 'react';
import { Table } from 'react-bootstrap';
import './AgendaTable.css';

const AgendaTable = () => {
  // Dummy data for "Programación Agenda"
  const agenda = [
    { fecha: '2023-04-01', cliente: 'John Doe', tipoServicio: 'Limpieza', empleado: 'Carlos Pérez', horaIngreso: '09:00', horaSalida: '13:00', horasTotales: 4 },
    { fecha: '2023-04-02', cliente: 'Jane Smith', tipoServicio: 'Mantenimiento', empleado: 'Ana Gómez', horaIngreso: '10:00', horaSalida: '14:00', horasTotales: 4 },
    { fecha: '2023-04-03', cliente: 'Alice Johnson', tipoServicio: 'Jardinería', empleado: 'Luis Martínez', horaIngreso: '08:00', horaSalida: '12:00', horasTotales: 4 },
    { fecha: '2023-04-04', cliente: 'Bob Brown', tipoServicio: 'Limpieza', empleado: 'María López', horaIngreso: '14:00', horaSalida: '18:00', horasTotales: 4 },
    { fecha: '2023-04-05', cliente: 'Carlos Rivera', tipoServicio: 'Electricidad', empleado: 'Pedro Sánchez', horaIngreso: '09:00', horaSalida: '12:00', horasTotales: 3 },
    // Add 15 more rows as needed
  ];

  return (
    <div className="agenda-table-container">
      <h2>Programación Agenda</h2>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Tipo de Servicio</th>
              <th>Empleado</th>
              <th>Hora Ingreso</th>
              <th>Hora Salida</th>
              <th>Horas Totales</th>
            </tr>
          </thead>
          <tbody>
            {agenda.map((entry, index) => (
              <tr key={index}>
                <td>{entry.fecha}</td>
                <td>{entry.cliente}</td>
                <td>{entry.tipoServicio}</td>
                <td>{entry.empleado}</td>
                <td>{entry.horaIngreso}</td>
                <td>{entry.horaSalida}</td>
                <td>{entry.horasTotales}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AgendaTable;