import { useState } from 'react';
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import NewDeviceModel from './NewDeviceModel';

// redux stuff
import { logoutUser } from '../redux/actions/authActions';
import { useAppDispatch } from '../app/hooks';

const NavbarComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useAppDispatch();

  const toggleShowFormVisibility = () => setShowForm(!showForm);

  const logout = () => {
    dispatch(logoutUser());
  }
  
  return (
    <Navbar bg='light' variant='light' className='mb-4'>
      <Container>
        <Navbar.Brand href='#home'>Medical Device</Navbar.Brand>
        <Form inline>
          <Button variant='outline-success mr-2' onClick={toggleShowFormVisibility}>New Model</Button>
          <Button variant='outline-primary' onClick={logout}>Logout</Button>
        </Form>
      </Container>

      {showForm ? <NewDeviceModel showForm={showForm} toggleShowFormVisibility={toggleShowFormVisibility} /> : null}
    </Navbar>
  );
};

export default NavbarComponent;
