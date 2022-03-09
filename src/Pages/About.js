import React from 'react';
import TextContainer from '../components/TextContainer';
import Button from '../components/Button';
import Image from '../components/Image';
import ashok from '../images/ashok.jpg';
import aashish from '../images/aashish.jpg';
import bibek from '../images/bibek.jpg';
import kapil from '../images/kapil.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (<>
  <h1 className="text-center" style={{fontSize:'3.5rem',fontWeight:"bold",paddingTop:"2rem"}}>About us: PINKY AI</h1>
  <hr></hr>
  <br></br>
        <Container>
          <h1>Team Members: PINKY AI</h1>
          <br></br>
          <Row>
            <Col><Image image={aashish} name='Aashish Chapain' rollno='THA075BCT002'></Image></Col>
            <Col><Image image={ashok} name='Ashok Budha' rollno='THA075BCT013'></Image></Col>
            <Col><Image image={bibek} name='Bibek Khanal' rollno='THA075BCT016'></Image></Col>
          <Col><Image image={kapil} name='Kapil Shrestha' rollno='THA075BCT016'></Image></Col>
          </Row>
        </Container>
        <TextContainer message="PINKY AI"></TextContainer>
        <TextContainer message="We are group of individuals working and researching in the field of 
        Artificial Intelligence and Machine learning. "></TextContainer>

  </>);
};

export default Contact;
