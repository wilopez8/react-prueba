import React from 'react';
import { Row, Col, Table, Badge } from 'react-bootstrap';
import FilterBar from '../../../components/Shared/FilterBar/FilterBar';



const MetricsTab = ({
  totalServices,
  totalHours,
  completedServices,
  inProgressServices,
  filteredServices,
  filters,
  handleFilterChange,
  handleSearchChange,
  searchQuery,
}) => {
  return (
    <>
      <Row className="mb-4">
        <Col md={3}>
          <div className="metric-card">
            <h5>Total Services Scheduled</h5>
            <p>{totalServices}</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="metric-card">
            <h5>Total Hours Scheduled</h5>
            <p>{totalHours}</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="metric-card">
            <h5>Completed Services</h5>
            <p>{completedServices}</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="metric-card">
            <h5>In-Progress Services</h5>
            <p>{inProgressServices}</p>
          </div>
        </Col>
      </Row>

      {/* Include FilterBar */}
      <FilterBar
        filters={filters}
        searchPlaceholder="Search by client, employee, or service type"
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
        searchValue={searchQuery}
      />

      {/* Service Table */}
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Client</th>
            <th>Service Type</th>
            <th>Employee</th>
            <th>Scheduled Start</th>
            <th>Scheduled End</th>
            <th>Actual Start</th>
            <th>Actual End</th>
            <th>Total Hours</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map((service, idx) => (
            <tr key={idx}>
              <td>{service.client}</td>
              <td>{service.serviceType}</td>
              <td>{service.employee}</td>
              <td>{service.scheduledStart}</td>
              <td>{service.scheduledEnd}</td>
              <td>{service.actualStart || '-'}</td>
              <td>{service.actualEnd || '-'}</td>
              <td>{service.totalHours}</td>
              <td>
                <Badge
                  bg={
                    service.status === 'Completed'
                      ? 'success'
                      : service.status === 'In-Progress'
                      ? 'warning'
                      : service.status === 'Scheduled'
                      ? 'info'
                      : 'danger'
                  }
                >
                  {service.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default MetricsTab;