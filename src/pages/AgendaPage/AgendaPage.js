import React, { useState } from 'react';
import { Tabs, Tab, Form } from 'react-bootstrap';
import AgendaTable from '../../components/AgendaTable/AgendaTable';
import Button from '../../components/Shared/Button/Button'; // Import the Button component
import './AgendaPage.css'; // Import your custom styles for the agenda page

const AgendaPage = () => {
  const [selectedYear, setSelectedYear] = useState(2025); // Default year
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);
  const [activeTab, setActiveTab] = useState('agenda');

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agost', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ];

  const years = Array.from({ length: 10 }, (_, i) => 2025 - i); // Generate last 10 years

  const daysOfWeek = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setSelectedMonth(''); // Reset month and day when year changes
    setSelectedDay(null);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setSelectedDay(null); // Reset day when month changes
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleClear = () => {
    setSelectedDay(null); // Clear the selected day
  };

  const renderCalendar = () => {
    if (!selectedMonth) return <p>Please select a month to view the calendar.</p>;

    return (
      <div className="calendar-container">
        <div className="days-of-week">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="day-title">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-grid">
          {[...Array(31)].map((_, dayIndex) => (
            <div
              key={dayIndex}
              className="calendar-day"
              onClick={() => handleDayClick(`${selectedMonth} ${dayIndex + 1}, ${selectedYear}`)}
            >
              {dayIndex + 1}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="agenda-page">
      <h1>Agenda</h1>

      <Tabs
        activeKey={activeTab}
        onSelect={(tab) => setActiveTab(tab)}
        className="mb-3"
      >
        {/* Agenda Tab */}
        <Tab eventKey="agenda" title="Agenda">
          {/* Filters */}
          <div className="filters">
            <Form.Group controlId="yearFilter" className="filter-group">
              <Form.Label>Año</Form.Label>
              <Form.Control
                as="select"
                value={selectedYear}
                onChange={handleYearChange}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="monthFilter" className="filter-group">
              <Form.Label>Mes</Form.Label>
              <Form.Control
                as="select"
                value={selectedMonth}
                onChange={handleMonthChange}
              >
                <option value="">Seleccione el mes</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>

          {renderCalendar()}
          {selectedDay && (
            <div className="selected-day-table">
              <h3>Servicios: {selectedDay}</h3>
              <AgendaTable />
              <Button onClick={handleClear} style={{ marginTop: '20px' }}>
                Borrar Selección
              </Button>
            </div>
          )}
        </Tab>

        {/* Service History Tab */}
        <Tab eventKey="history" title="Servicios Anteriores">
          <div className="service-history">
            <h3>Servicios Pasados</h3>
            <p>Here you can display a table or list of past services.</p>
            {/* Add your service history table or content here */}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AgendaPage;