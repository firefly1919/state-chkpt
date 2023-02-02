import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import About from './About';

const CardList = ({ el }) => {
console.log("element", el);
  return (
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image}/>
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text> {el.description}</Card.Text>
    <Button variant="primary">{el.type}</Button>
    <About el={el}/>
  </Card.Body>
</Card>
);
}

export default CardList