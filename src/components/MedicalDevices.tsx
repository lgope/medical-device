import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Device from './Device';

// redux stuff
import { getAvailableMedicalDevices } from '../redux/actions/deviceActions';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectDevices } from '../redux/reducers/deviceReducers';
import { IADevice } from '../types/interfaces';

const MedicalDevices = () => {
  const medicalDevice = useAppSelector(selectDevices);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getAvailableMedicalDevices());
  }, [dispatch]);

  return (
    <Row className='justify-content-md-center'>
      {medicalDevice.dataIsLoading ? (
        <h2>Loading....</h2>
      ) : (
        medicalDevice.availableDevices.map((device: IADevice) => <Device key={device.Id} device={device} />)
      )}
    </Row>
  );
};

export default MedicalDevices;
