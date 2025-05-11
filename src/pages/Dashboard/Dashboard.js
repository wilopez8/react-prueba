import React, { useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import MetricsTab from '../../pages/Dashboard/MetricsTab/MetricsTab';
import PendingTasksTab from '../../pages/Dashboard/PendingTasksTab/PendingTasksTab';

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
  const [activeTab, setActiveTab] = useState('metrics');

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

  const handleFilterChange = (name, value) => {
    if (name === 'status') {
      setStatusFilter(value);
    }
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
      <Tabs activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)} className="mb-3">
        <Tab eventKey="metrics" title="Métricas Clave">
          <MetricsTab
            totalServices={totalServices}
            totalHours={totalHours}
            completedServices={completedServices}
            inProgressServices={inProgressServices}
            filteredServices={filteredServices}
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleSearchChange={setSearchQuery}
            searchQuery={searchQuery}
          />
        </Tab>
        <Tab eventKey="Pendientes" title="Pendientes">
          <PendingTasksTab
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleSearchChange={setSearchQuery}
            searchQuery={searchQuery}
            filteredTasks={filteredTasks}
          />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Dashboard;