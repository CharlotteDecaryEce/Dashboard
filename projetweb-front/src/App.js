import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import './App.css';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Container fluid>
      <Row>
      <Col>
      <div className="App-header">
        <header>
          <Link to="/"><button className="but">Dashboard</button></Link>
          <Link to="/admin"><button className="but">Ajouter un artiste, album ou single</button></Link>
        </header>
        
      </div>
      </Col>
      </Row>
      <Row>
      <div className="App">
      <Routes />
      </div>
      </Row>
      </Container>
      
      
    );
  }
}

export default App;
