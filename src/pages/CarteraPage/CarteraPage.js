import React, { useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import ExpensesTab from './ExpensesTab/ExpensesTab';
import IncomeTab from './IncomeTab/IncomeTab';

const serviciosCartera = [
  {
    fecha: "2025-05-10",
    tipoDeServicio: "Consulta médica",
    cliente: "Juan Pérez Rodríguez",
    empleado: "Dra. María González",
    valor: 120000,
    estadoDePago: "Pagado",
    fechaDePago: "2025-05-10",
    valorRecibido: 120000,
    medioDePago: "Tarjeta de crédito",
    idTransaccion: "TRX-45678912",
    destinoDelPago: "Cuenta principal",
    observacionesDelPago: "Pago completado correctamente"
  },
  {
    fecha: "2025-05-09",
    tipoDeServicio: "Terapia física",
    cliente: "Ana Martínez Silva",
    empleado: "Dr. Carlos Ruiz",
    valor: 85000,
    estadoDePago: "Pendiente",
    fechaDePago: null,
    valorRecibido: 0,
    medioDePago: null,
    idTransaccion: null,
    destinoDelPago: null,
    observacionesDelPago: "Cliente solicitó factura para seguro médico"
  },
  {
    fecha: "2025-05-08",
    tipoDeServicio: "Examen de laboratorio",
    cliente: "Roberto Sánchez López",
    empleado: "Téc. Laura Jiménez",
    valor: 65000,
    estadoDePago: "Parcial",
    fechaDePago: "2025-05-08",
    valorRecibido: 30000,
    medioDePago: "Efectivo",
    idTransaccion: "EFE-789123",
    destinoDelPago: "Caja diaria",
    observacionesDelPago: "Cliente pagará el resto en próxima visita"
  },
  {
    fecha: "2025-05-07",
    tipoDeServicio: "Consulta especialista",
    cliente: "Carmen Ortiz Vargas",
    empleado: "Dr. Fernando Medina",
    valor: 180000,
    estadoDePago: "Pagado",
    fechaDePago: "2025-05-07",
    valorRecibido: 180000,
    medioDePago: "Transferencia bancaria",
    idTransaccion: "TRF-987654",
    destinoDelPago: "Cuenta principal",
    observacionesDelPago: "Transferencia verificada"
  },
]

const expenses_transactions = [
    {
        fecha: "2025-05-08",
        detalleTransaccion: "Supermercado El Corte",
        valor: 85.45,
        categoria: "Alimentación",
        estado: "Completado",
        medioDePago: "Tarjeta de débito",
        idTransaccion: "TRX-12345678",
        observaciones: "Compra semanal de alimentos"
    },
    {
        fecha: "2025-05-07",
        detalleTransaccion: "Netflix Suscripción",
        valor: 15.99,
        categoria: "Entretenimiento",
        estado: "Completado",
        medioDePago: "Tarjeta de crédito",
        idTransaccion: "TRX-23456789",
        observaciones: "Cargo mensual"
    },
    {
        fecha: "2025-05-05",
        detalleTransaccion: "Transferencia a Carlos Rodríguez",
        valor: 250.00,
        categoria: "Transferencias",
        estado: "Pendiente",
        medioDePago: "Transferencia bancaria",
        idTransaccion: "TRX-34567890",
        observaciones: "Pago por trabajos de reparación"
    },
    {
        fecha: "2025-05-01",
        detalleTransaccion: "Nómina Mayo",
        valor: 2350.00,
        categoria: "Ingresos",
        estado: "Completado",
        medioDePago: "Transferencia bancaria",
        idTransaccion: "TRX-45678901",
        observaciones: "Salario mensual"
    }
]


const CarteraPage = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('ingresos');

  // Dynamically update filters based on statusFilter
  const filters = [
    {
      name: 'status',
      label: 'Status',
      value: statusFilter, // Dynamically set to the current statusFilter
      options: [
        { value: 'all', label: 'All' },
        { value: 'pendiente', label: 'Pendiente' },
        { value: 'pagado', label: 'Pagado' },
        { value: 'cancelado', label: 'Cancelado' },
      ],
    },
  ];

  const handleFilterChange = (name, value) => {
    if (name === 'status') {
      setStatusFilter(value);
    }
  };

  const filteredIncome = serviciosCartera.filter((income) => {
    const matchesStatus = statusFilter === 'all' || income.estadoDePago.toLowerCase() === statusFilter;
    const matchesSearch =
      income.cliente.toLowerCase().includes(searchQuery.toLowerCase()) ||
      income.estadoDePago.toLowerCase().includes(searchQuery.toLowerCase()) ||
      income.tipoDeServicio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const filteredServices = expenses_transactions.filter((expenses) => {
    const matchesStatus = statusFilter === 'all' || expenses.estado.toLowerCase() === statusFilter;
    const matchesSearch =
      expenses.categoria.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expenses.detalleTransaccion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expenses.estado.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <Container className="dashboard-container">
      <h1 className="text-center my-4">Balance de Cartera</h1>
      <Tabs activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)} className="mb-3">
        <Tab eventKey="ingresos" title="Ingresos">
          <IncomeTab
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleSearchChange={setSearchQuery}
            searchQuery={searchQuery}
            filteredIncome={filteredIncome}
          />
        </Tab>
        <Tab eventKey="egresos" title="Egresos">
          <ExpensesTab
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleSearchChange={setSearchQuery}
            searchQuery={searchQuery}
            filteredServices={filteredServices}
          />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default CarteraPage;