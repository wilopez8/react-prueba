import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import './FilterBar.css'; // Import the updated CSS

const FilterBar = ({ filters, searchPlaceholder, onFilterChange, onSearchChange, searchValue }) => {
  return (
    <Row className="filter-bar mb-3">
      {/* Dropdown Filters */}
      {filters.map((filter, index) => (
        <Col md={4} key={index} className="filter-item">
          <div className="filter-inline">
            <Form.Label className="filter-label">{filter.label}</Form.Label>
            <Form.Select
              value={filter.value}
              onChange={(e) => onFilterChange(filter.name, e.target.value)}
              className="filter-dropdown"
            >
              {filter.options.map((option, idx) => (
                <option key={idx} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </div>
        </Col>
      ))}

      {/* Search Bar */}
      <Col md={8}>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Button variant="primary">Search</Button>
        </InputGroup>
      </Col>
    </Row>
  );
};

FilterBar.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  searchPlaceholder: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default FilterBar;