import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';
import Likes from './widget/likes.js';
import Calendrier from './widget/calendrier.js';
import Genres from './widget/genres.js';
import Barcharts from './widget/barchart.js';
import Pic from './widget/pic.js';
import Followers from './widget/followers';
import axios from 'axios';

export default class Home extends Component {
 
  render() {

    return (
      <Container fluid>

      
        <Row>
          <Col xs="12" md="6" lg="4">
          <h3>Calendrier</h3>
          <Calendrier/></Col>
          
          <Col xs="12" md="6" lg="4">
          <h3>Top 3 des singles les plus écoutés</h3>
          </Col>
          

          </Row>
          
          <Row>
            
          <Col xs="12" md="12" lg="4">
          <br>
              
            </br>
          <h3 > Likes vs nombre d'écoutes</h3>
          <Barcharts/></Col>
          <Col xs="12" md="12" lg="4">
          <br>
              
            </br>
          <h3>Quel sont les genres qui ont le plus de succès?</h3>
          <Genres/></Col> 

          <Col xs="12" md="12" lg="4">
          <br>
              
            </br>
          <h3>Qui a le plus de followers? </h3>
          <Likes/></Col>
        </Row>
        </Container>
    )
  }
}

