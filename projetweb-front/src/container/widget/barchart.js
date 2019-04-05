import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios';



export default class Barchart extends PureComponent {
  state={ data1 : [
    {
      name: 'Page A', Ecoutes: 4000, Likes: 2400, 
    },
    {
      name: 'Page B', Ecoutes: 3000, Likes: 1398, 
    },
    {
      name: 'Page C', Ecoutes: 2000, Likes: 9800, 
    },
    {
      name: 'Page D', Ecoutes: 2780, Likes: 3908, 
    },
    {
      name: 'Page E', Ecoutes: 1890, Likes: 4800, 
    },
    {
      name: 'Page F', Ecoutes: 2390, Likes: 3800, 
    },
    {
      name: 'Page G', Ecoutes: 3490, Likes: 4300, 
    },
  ]};

  constructor(props){
    super(props);
    var data1=[];
    var self=this;
  
    axios.get('http://localhost:3001/tracks').then(res =>{
      console.log(res);
      res.data.forEach(element =>{
        data1.push({
          name: element.Title,
          Ecoutes: element.Listenings,
          Likes: element.Likes
        });
      });
    }).then(function(){
      self.setState({data1:data1});
    })
  }

  render() {
    return (
      <BarChart
        width={400}
        height={300}
        margin={{
            top: 10, right: 10, left: 0, bottom: 0,
          }}
        data={this.state.data1}
       
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Likes" fill="#8884d8" />
        <Bar dataKey="Ecoutes" fill="#82ca9d" />
      </BarChart>
    );
  }
}
