import React  from 'react';
 import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function NavbarModal(props){


  

  return (
    <>
      <Modal show={props.show} fullscreen={true} onHide={props.hide} scrollable={true} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',backgroundColor:'#181a1b'}}>
        <Modal.Header style={{backgroundColor:'#181a1b'}} closeButton>
        </Modal.Header >
        <Modal.Body>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link to="/body-glow">Body Glow</Link>
            <Link to="/lipsticks">Matte & Crème Lipsticks</Link>
            <Link to="/mascara">Kylash Volume Mascara</Link>
            <Link to="/eyeshadow">Matte Liquid Eyeshadow</Link>
          </div>
          <Link to="/all-products">Shop All Products</Link>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header style={{ height: '60px'}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Accordion Title
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Link to="/link-1">Link 1</Link>
                  <Link to="/link-2">Link 2</Link>
                  <Link to="/link-3">Link 3</Link>
                  <Link to="/link-4">Link 4</Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link to="/link-5">Link 5</Link>
            <Link to="/link-6">Link 6</Link>
            <Link to="/link-7">Link 7</Link>
            <Link to="/link-8">Link 8</Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarModal;
