import { useEffect } from 'react';
import { Button, Modal, Container, Row} from 'react-bootstrap';

// redux stuff
import { getModelsData } from '../redux/actions/deviceActions';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectDevices } from '../redux/reducers/deviceReducers';
import DeviceModel from './DeviceModel';
import { IDevice } from '../types/interfaces';

const Overlaydialog = ({ modalShow, toggleModalVisibility, device }: IDevice) => {
  const medicalDevice = useAppSelector(selectDevices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getModelsData(device.BrandId, device.Name));
  }, [dispatch, device]);

  return (
    <Modal
      show={modalShow}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {device.BrandId} Model's Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: '600px', overflowY: 'scroll' }}>
        <Container fluid>
          <Row className='justify-content-md-center'>
            {medicalDevice.modelsDataIsLoading ? (
              <h2>Loading....</h2>
            ) : (
              medicalDevice.models.map((model: any) => (
                <DeviceModel key={model.Id} model={model} />
              ))
            )}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={toggleModalVisibility}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Overlaydialog;
