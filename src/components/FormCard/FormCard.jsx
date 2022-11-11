import React, { memo, useCallback } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import validateUser from '../../utils/validateUser';
import { login, setChecked } from '../../redux/actions/authActions';
import './style.css';

function FormCard() {
  const dispatch = useDispatch();

  const getChecked = () => dispatch(setChecked(true));

  const checkedCallback = useCallback(
    () => {
      getChecked();
    },
  );

  const submitHandler = (values) => {
    dispatch(login(values));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validateUser(),
    onSubmit: submitHandler,
  });

  return (
    <Card className="card">
      <Card.Body>
        <Card.Title className="title">
          Authorization
        </Card.Title>
        <Form className="form">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              placeholder="Email address"
              className="input"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="error-text">{formik.errors.email}</span>
            )}
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              className="input"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="error-text">{formik.errors.password}</span>
            )}
          </FloatingLabel>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              onChange={checkedCallback}
            />
          </Form.Group>
          <Button
            className="mx-1"
            style={{ width: '100px' }}
            variant="primary"
            type="submit"
            onClick={formik.handleSubmit}
          >
            Sign In
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default memo(FormCard);
