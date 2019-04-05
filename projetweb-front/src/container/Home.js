import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';
import Likes from './widget/likes.js';
import Calendrier from './widget/calendrier.js';
import Genres from './widget/genres.js';
import Barcharts from './widget/barchart.js';
import Pic from './widget/pic.js';
import Liste_artistes from './widget/afficher_artistes';
import Liste_albums from './widget/afficher_album';
import Liste_tracks from './widget/afficher_tracks'
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
          
          <Col xs="12" md="6" lg="2">
          <h4>Tous les artistes</h4>
          <br></br>
          <Liste_artistes/>
          </Col>
          <Col xs="12" md="6" lg="2">
          <h4>Tous les albums</h4>
          <br></br>
          <Liste_albums/>
          </Col>
          <Col xs="12" md="6" lg="3">
          <h4>Tous les morceaux</h4>
          <br></br>
          <Liste_tracks/>
          </Col>

          </Row>
          
          <Row>
            
          <Col xs="12" md="12" lg="4">
          <br>
              
            </br>
          <h3 > Likes vs nombre d'écoutes</h3>
          <br></br>
          <Barcharts/></Col>
          <Col xs="12" md="12" lg="4">
          <br>
              
            </br>
          <h3>Quel sont les genres qui sont le plus répendus?</h3>
          <br></br>
          <Genres/></Col> 

          <Col xs="12" md="12" lg="4">
          <br>
              
            </br>
          <h3>Qui a le plus de followers? </h3>
          <br></br>
          <Likes/></Col>
        </Row>
        </Container>
    )
  }
}

