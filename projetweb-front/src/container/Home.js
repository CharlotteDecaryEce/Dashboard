import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';
import Nbrecoutes from './widget/nbrecoutes.js';
import Calendrier from './widget/calendrier.js';
import Camenbert from './widget/camenbert.js';
import Barcharts from './widget/barchart.js';
import Pic from './widget/pic.js';
import Piechart from './widget/piechart.js';


export default class Home extends Component {
  render() {
    return (
        <Row>
          <Col xs="12" md="6" lg="4"><Calendrier/></Col>
          <Col xs="12" md="6" lg="4"><Camenbert/></Col>
          <Col xs="12" md="6" lg="4"><Piechart/></Col>
          <Col xs="12" md="6" lg="4"><Barcharts/></Col>
          <Col xs="12" md="6" lg="4"><Pic/></Col>
          <Col xs="12" md="6" lg="4"><Nbrecoutes/></Col>
        </Row>
    );
  }
}

