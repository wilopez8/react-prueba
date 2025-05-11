import React from 'react';
import { Table } from 'react-bootstrap';
import FilterBar from '../../../components/Shared/FilterBar/FilterBar';

const IncomeTab = ({
  filters,
  handleFilterChange,
  handleSearchChange,
  searchQuery,
  filteredIncome,
}) => {
  return (
    <div className="income-tab">
      <h3 className="text-center mb-4">Ingresos</h3>
      {/* Include FilterBar */}
      <FilterBar
        filters={filters}
        searchPlaceholder="Search by client, payment status, or service type"
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
        searchValue={searchQuery}
      />
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo de Servicio</th>
            <th>Cliente</th>
            <th>Empleado</th>
            <th>Valor</th>
            <th>Estado de Pago</th>
            <th>Fecha de Pago</th>
            <th>Valor Recibido</th>
            <th>Medio de Pago</th>
            <th>ID Transacción</th>
            <th>Destino del Pago</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredIncome.map((income, idx) => (
            <tr key={idx}>
              <td>{income.fecha}</td>
              <td>{income.tipoDeServicio}</td>
              <td>{income.cliente}</td>
              <td>{income.empleado}</td>
              <td>{income.valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
              <td>{income.estadoDePago}</td>
              <td>{income.fechaDePago || '-'}</td>
              <td>{income.valorRecibido.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
              <td>{income.medioDePago || '-'}</td>
              <td>{income.idTransaccion || '-'}</td>
              <td>{income.destinoDelPago || '-'}</td>
              <td>{income.observacionesDelPago}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default IncomeTab;