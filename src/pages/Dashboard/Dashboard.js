import React, { useState } from 'react';
import { Container, Row, Col, Table, Form, InputGroup, Button, Badge, Tabs, Tab } from 'react-bootstrap';
import FilterBar from '../../components/Shared/FilterBar/FilterBar'; // Import the reusable FilterBar component
import './Dashboard.css'; // Import the updated CSS

const dailyServices = [
  {
    client: 'John Doe',
    serviceType: 'Deep Cleaning',
    employee: 'Jane Smith',
    scheduledStart: '9:00 AM',
    scheduledEnd: '12:00 PM',
    actualStart: '9:15 AM',
    actualEnd: '12:05 PM',
    totalHours: 3,
    status: 'Completed',
  },
  {
    client: 'Alice Johnson',
    serviceType: 'Move-Out Cleaning',
    employee: 'John Doe',
    scheduledStart: '1:00 PM',
    scheduledEnd: '4:00 PM',
    actualStart: '',
    actualEnd: '',
    totalHours: 3,
    status: 'Scheduled',
  },
  {
    client: 'Bob Brown',
    serviceType: 'Standard Cleaning',
    employee: 'Emily Clark',
    scheduledStart: '10:00 AM',
    scheduledEnd: '1:00 PM',
    actualStart: '10:05 AM',
    actualEnd: '',
    totalHours: 3,
    status: 'In-Progress',
  },
];

const pendingTasks = [
  {
    date: '2023-05-01',
    responsible: 'Jane Smith',
    taskType: 'Inspection',
    description: 'Inspect the cleaning supplies inventory.',
    taskStatus: 'Pending',
  },
  {
    date: '2023-05-02',
    responsible: 'John Doe',
    taskType: 'Delivery',
    description: 'Deliver cleaning supplies to Client A.',
    taskStatus: 'In Progress',
  },
  {
    date: '2023-05-03',
    responsible: 'Emily Clark',
    taskType: 'Follow-Up',
    description: 'Follow up with Client B regarding feedback.',
    taskStatus: 'Completed',
  },
];

const Dashboard = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('metrics'); // Initialize activeTab state


  const filters = [
    {
      name: 'status',
      label: 'Status',
      value: statusFilter,
      options: [
        { value: 'all', label: 'All' },
        { value: 'completed', label: 'Completed' },
        { value: 'in-progress', label: 'In-Progress' },
        { value: 'scheduled', label: 'Scheduled' },
        { value: 'delayed', label: 'Delayed' },
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

  const filteredTasks = pendingTasks.filter((task) => {
    const matchesStatus =
      statusFilter === 'all' || task.taskStatus.toLowerCase() === statusFilter;
    const matchesSearch =
      task.responsible.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.taskType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });


  const filteredServices = dailyServices.filter((service) => {
    const matchesStatus = statusFilter === 'all' || service.status.toLowerCase() === statusFilter;
    const matchesSearch =
      service.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.employee.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.serviceType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });


  const totalServices = dailyServices.length;
  const totalHours = dailyServices.reduce((sum, service) => sum + service.totalHours, 0);
  const completedServices = dailyServices.filter((service) => service.status === 'Completed').length;
  const inProgressServices = dailyServices.filter((service) => service.status === 'In-Progress').length;

  return (
    <Container className="dashboard-container">
      <h1 className="text-center my-4">Tablero de Control</h1>
      <Tabs
        activeKey={activeTab}
        onSelect={(tab) => setActiveTab(tab)}
        className="mb-3"
      >
        {/* Key Performance Metrics */}
        <Tab eventKey="metrics" title="Métricas Clave">
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

          {/* Daily Service List */}
          <Row>
            <Col>
              <h2>Lista de Servicios</h2>

              {/* Filters */}
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="delayed">Delayed</option>
                  </Form.Select>
                </Col>
                <Col md={8}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Search by client, employee, or service type"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button variant="primary">Search</Button>
                  </InputGroup>
                </Col>
              </Row>

              {/* Service Table */}
              <Table striped bordered hover responsive>
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
            </Col>
          </Row>
        </Tab>

{/* Pending Tasks Tab */}
        <Tab eventKey= "Pendientes" title="Pendientes">
          <div className="Pendientes-historicos">
            <h3>Pendientes</h3>
            <FilterBar
              filters={filters}
              searchPlaceholder="Search by responsible, task type, or description"
              onFilterChange={handleFilterChange}
              onSearchChange={handleSearchChange}
              searchValue={searchQuery}
            />
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Responsible</th>
                  <th>Task Type</th>
                  <th>Description</th>
                  <th>Status</th>
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
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Tab>

      </Tabs>
    </Container>
  );
};

export default Dashboard;