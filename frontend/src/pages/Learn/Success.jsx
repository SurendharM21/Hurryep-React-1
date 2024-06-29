import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import axios from "axios"
import { NavLink } from 'react-router-dom';
import img from "./check-mark_5290058.png"

const Success = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const orderId = params.get('orderId');
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {  
        const res = await axios.get(`http://localhost:8000/api/v1/getOrder/${orderId}`);
        setOrder(res.data.orderDetails);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <Container className='d-flex justify-content-center'>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={img} style={{ width: '300px' }} />
          <Card.Body>
           
                <Card.Title>Order_ID: <span style={{ width: '40px' }}>{order.orderId}</span></Card.Title>
                <Card.Title>Amount: <span style={{ width: '40px' }}>{order.payment}</span></Card.Title>
                <NavLink to="/learnwithus"><Button type='button' className='btn btn-primary text-center'>Finish</Button></NavLink>
             
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Success;
