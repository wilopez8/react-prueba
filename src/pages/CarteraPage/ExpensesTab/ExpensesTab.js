import React from 'react';
import { Table } from 'react-bootstrap';
import FilterBar from '../../../components/Shared/FilterBar/FilterBar';

const ExpensesTab = ({
  filters,
  handleFilterChange,
  handleSearchChange,
  searchQuery,
  filteredServices,
}) => {
  return (
    <div className="expenses-tab">
      <h3 className="text-center mb-4">Egresos</h3>
      {/* Include FilterBar */}
      <FilterBar
        filters={filters}
        searchPlaceholder="Search by category, transaction details, or status"
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
        searchValue={searchQuery}
      />
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Detalle de Transacción</th>
            <th>Estado</th>
            <th>Valor</th>
            <th>Medio de Pago</th>
            <th>Id de Transacción</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map((expense, idx) => (
            <tr key={idx}>
              <td>{expense.fecha}</td>
              <td>{expense.categoria}</td>
              <td>{expense.detalleTransaccion}</td>
              <td>{expense.estado}</td>
              <td>{expense.valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
              <td>{expense.medioDePago || '-'}</td>
              <td>{expense.idTransaccion || '-'}</td>
              <td>{expense.observaciones || '-'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExpensesTab;