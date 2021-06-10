import { useState, ChangeEvent } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';

// redux stuff
import { addModel } from '../redux/actions/deviceActions';
import { useAppDispatch } from '../app/hooks';

const NewDeviceModel = ({ showForm, toggleShowFormVisibility }: any) => {
  const [validated, setValidated] = useState(false);
  const [newDeviceModel, setNewDeviceModel] = useState({
    BrandId: '',
    Name: '',
    TypeId: 0,
    Comment: '',
  });

  const dispatch = useAppDispatch();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDeviceModel(state => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: any): void => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    dispatch(addModel({...newDeviceModel, TypeId: +newDeviceModel.TypeId}));
    toggleShowFormVisibility();
  };

  return (
    <Modal
      show={showForm}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Add New Device Model
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md='11' controlId='validationCustom01'>
              <Form.Label>Brand Id</Form.Label>
              <Form.Control
                type='text'
                name='BrandId'
                placeholder='Model12'
                value={newDeviceModel.BrandId}
                onChange={handleOnChange}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a Brand Id!
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md='11' controlId='validationCustom02'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='Name'
                placeholder='Name'
                value={newDeviceModel.Name}
                onChange={handleOnChange}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a device model name.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md='11' controlId='validationCustom03'>
              <Form.Label>Type Id</Form.Label>
              <Form.Control
                type='number'
                name='TypeId'
                placeholder='1'
                value={newDeviceModel.TypeId}
                onChange={handleOnChange}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a device model type id.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md='11' controlId='validationCustom04'>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                type='text'
                name='Comment'
                placeholder='Comment'
                value={newDeviceModel.Comment}
                onChange={handleOnChange}
              />
              <Form.Control.Feedback>It's okay.</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button type='submit'>Add</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={toggleShowFormVisibility} variant='outline-warning'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewDeviceModel;
