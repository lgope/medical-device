import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import MedicalDevices from './components/MedicalDevices';
import LoginForm from './components/auth/LoginForm';

// redux stuff
import { loadUser } from './redux/actions/authActions';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { selectAuth } from './redux/reducers/authReducers';

const App = () => {
  const auth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      {auth.isAuthenticated ? (
        <>
          <NavbarComponent />
          <Container>
            <MedicalDevices />
          </Container>
        </>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default App;
