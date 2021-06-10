import { Card, Badge } from 'react-bootstrap';
import { IModel } from '../types/interfaces';

const DeviceModel = ({ model }: IModel) =>  (
    <Card border='success' style={{ width: '14rem' }} className="justify-content-md-center m-2">
      <Card.Header>{model.DisplayName}</Card.Header>
      <Card.Body>
        <Card.Title>{model.Name}</Card.Title>

        <Card.Text><Badge variant="primary">Brand</Badge> : {model.Brand}</Card.Text>
        <Card.Text><Badge variant="dark">DataType</Badge> : {model.DataType}</Card.Text>
        <Card.Text><Badge variant="secondary">Model</Badge> : {model.Model}</Card.Text>
        <Card.Text><Badge variant="secondary">Status</Badge> : {model.Status}</Card.Text>
        <Card.Text><Badge variant="secondary">GroupId</Badge> : {model.GroupId}</Card.Text>
        <Card.Text><Badge variant="secondary">ProtocolOrder</Badge> : {model.ProtocolOrder}</Card.Text>
        <Card.Text><Badge variant="info">Description</Badge> : {model.Description}</Card.Text>

      </Card.Body>
    </Card>
  );

export default DeviceModel;
