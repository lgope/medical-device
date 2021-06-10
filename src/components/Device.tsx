import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { IDevice } from '../types/interfaces';
import Overlaydialog from './Overlaydialog';

const Device = ({ device }: IDevice) => {
  const [modalShow, setModalShow] = useState(false);

  const toggleModalVisibility = () => setModalShow(!modalShow);

  return (
    <Card style={{ width: '18rem', margin: '5px' }} bg='light'>
      <Card.Body>
        <Card.Title>{device.Name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {device.BrandId}
        </Card.Subtitle>
        <Card.Text>{device.Description}</Card.Text>

        <footer className='blockquote-footer'>
          <small className='text-muted'>
            <cite title='Source Title'>Comment : </cite> {device.Comment}
          </small>
        </footer>

        <Card.Link onClick={toggleModalVisibility}>Device Model's</Card.Link>

        {modalShow ? (
          <Overlaydialog
            modalShow={modalShow}
            toggleModalVisibility={toggleModalVisibility}
            device={device}
          />
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default Device;
