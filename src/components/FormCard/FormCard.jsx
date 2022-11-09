import React, { memo } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function FormCard() {
  return (
    <Card style={{
      width: '35rem',
      height: '20rem',
      marginTop: '8rem',
      boxShadow: 'var(--box-shadow)',
    }}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>Registration</Card.Title>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" style={{ height: '3.5rem' }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" style={{ height: '3.5rem', marginBottom: '1rem' }} />
          </FloatingLabel>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default memo(FormCard);
