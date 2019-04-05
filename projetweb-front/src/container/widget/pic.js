import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,LineChart, Line, LabelList
} from 'recharts';
import axios from 'axios'; 
import { Container, Row, Col } from 'reactstrap';
import { Treemap } from 'recharts';


export default class Pics extends PureComponent {
  
 state = {data1: [
  {
    name: 'Page A',
  },
  {
    name: 'Page B', 
  },
  {
    name: 'Page C',
  },
  
]};

constructor(props){
  super(props);
  var data1=[];
  var self=this;
  var artiste1=0;
  var artiste2=0;
  var artiste3=0;

  axios.get('http://localhost:3001/tracks').then(res =>{
    console.log(res);
    res.data.forEach(element =>{
     if(element.Listenings > artiste1)
     {
      artiste3 = artiste2;
       artiste2 = artiste1;
       artiste1 = element.listenings;
       
     }
      data1.push({
        name: element.Title,
      });
    });
  }).then(function(){
    self.setState({data1:data1});
  })
}


  render() {
    return (
       <ul>{this.state.data1.map(tracks => <li>{tracks.title}</li>)}
</ul>
    
    );
  }
}



