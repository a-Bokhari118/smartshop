import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justfiy-content-md-center'>
        <Col xs={12} md={7}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
