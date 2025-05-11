import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaPen, FaTrash } from 'react-icons/fa'; // Import icons
import FilterBar from '../../../components/Shared/FilterBar/FilterBar';
import AddDataModal from '../../../components/Shared/AddDataModal/AddDataModal';

const PendingTasksTab = ({
  filters,
  handleFilterChange,
  handleSearchChange,
  searchQuery,
  filteredTasks,
}) => {

  const [showModal, setShowModal] = useState(false);

  const fields = [
    { name: 'fechaPendiente', label: 'Fehca de Pendiente', type: 'text', required: true },
    { name: 'nombreResponsable', label: 'Nombre del Responsable', type: 'text', required: true },
    { name: 'tipoPendiente', label: 'Tipo de Pendiente', type: 'email', required: true },
    { name: 'descripcionPendiente', label: 'Descripcion del Pendiente', type: 'text', required: true },
    { name: 'estadoPendiente', label: 'Estado del Pendiente', type: 'text', required: true },
    { name: 'ultimaActualizacion', label: 'Ultima Actualizacion', type: 'date' },
  ];

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
      <div className="Pendientes-historicos">
        <h3>Pendientes</h3>
        {/* Include FilterBar */}
        <FilterBar
          filters={filters}
          searchPlaceholder="Search by responsible, task type, or description"
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
          searchValue={searchQuery}
        />
        <div className="button-responsive mt-3">
          <Button variant="primary" className="mb-3" onClick={() => setShowModal(true)}>
            Ingresar Pendiente
          </Button>
        </div>
        
        <div className="table-responsive">
          {/* Table for displaying tasks */}
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>Date</th>
                <th>Responsible</th>
                <th>Task Type</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th> {/* New Actions column */}
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, idx) => (
                <tr key={idx}>
                  <td>{task.date}</td>
                  <td>{task.responsible}</td>
                  <td>{task.taskType}</td>
                  <td>{task.description}</td>
                  <td>{task.taskStatus}</td>
                  <td>
                    {/* Action buttons */}
                    <Button
                      variant="warning"
                      size="sm"
                      className="small-button me-1"
                      style={{ padding: '1.5px 3.5px', fontSize: '12px' }} // Custom inline styles
                      onClick={() => handleEdit(task)}
                    >
                      <FaPen />
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="small-button me-1"
                      style={{ padding: '1.5px 3.5px', fontSize: '12px' }} // Custom inline styles
                      onClick={() => handleDelete(idx)}
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
      </div>
    </>
  );
};

export default PendingTasksTab;