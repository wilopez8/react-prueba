import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const AddDataModal = ({ show, onHide, fields }) => {
  // Dummy form data for design purposes
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: 'Sample Data' }), {})
  );

  const handleChange = (e) => {
    // Prevent state updates for design purposes
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do nothing on submit for design purposes
    onHide(); // Close the modal
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Ingrese Nueva Información</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            {fields.map((field, idx) => (
              <Col md={6} key={idx}> {/* Each field takes half the width */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">{field.label}</Form.Label>
                  <Form.Control
                    type={field.type || 'text'}
                    name={field.name}
                    value={formData[field.name]} // Use dummy data
                    onChange={handleChange} // No-op for design purposes
                    required={field.required || false}
                    readOnly // Make fields read-only for design purposes
                  />
                </Form.Group>
              </Col>
            ))}
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddDataModal;