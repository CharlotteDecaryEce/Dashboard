import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class  Admin extends Component {

	state = {
		Nom: '',
		Birth:'',
		Followers:'',
		Title:'',
		Genre:'',
		Cover:'',
		Duration:'',
		Listenings:'',
		Likes:'',
}
		
  onChangeNom = event => {
    this.setState({Nom: event.target.value});
	}
	onChangeBirth= event => { 
    this.setState({Birth: event.target.value});
	}
	onChangeFollowers= event => {
    this.setState({Followers: event.target.value});
	}

	onChangeTitle_albums= event => { 
    this.setState({Title: event.target.value});
	}
	onChangeGenre= event => { 
    this.setState({Genre: event.target.value});
	}
	onChangeCover= event => { 
    this.setState({Cover: event.target.value});
	}
	
	onChangeTitle_tracks= event => { 
    this.setState({Title: event.target.value});
	}
	onChangeDuration= event => { 
    this.setState({Duration: event.target.value});
	}
	onChangeListenings= event => { 
    this.setState({Listenings: event.target.value});
	}
	onChangeLikes= event => { 
    this.setState({Likes: event.target.value});
	}

  
	onSubmit_album= event => { 
		event.preventDefault();
		var albums = {
			Title: this.state.Title,
			Genre: this.state.Genre,
			Cover: this.state.Cover
		}
		axios.put('http://localhost:3001/albums',albums)
		.then(res =>{
			console.log(res);
			console.log(res.data);
		} )
	}

	onSubmit_artiste= event => { 
		event.preventDefault();
		var artistes = {
			Nom: this.state.Nom,
			Birth: this.state.Birth,
			Followers: this.state.Followers
		}
		axios.put('http://localhost:3001/artistes',artistes)
		.then(res =>{
			console.log(res);
			console.log(res.data);
		} )
	}
	
	onSubmit_track= event => { 
		event.preventDefault();
		var tracks = {
			Title: this.state.Title,
			Duration: this.state.Duration,
			Listenings: this.state.Listenings, 
			Likes: this.state.Likes
		}
		axios.put('http://localhost:3001/tracks',tracks)
		.then(res =>{
			console.log(res);
			console.log(res.data);
		} )
  }

  render() {
    return (
			<Container fluid>
      <Row>
      <Col>
      <Form onSubmit={this.onSubmit_artiste}>
		<h3>Artiste</h3>
				<div className ="form-group">
        <label>Name:</label>
					<input type="text" className="form-control" onChange={this.onChangeNom}/>
				</div>

				<div className ="form-group">
        <label>Birth:</label>
					<input type="text" className="form-control" onChange={this.onChangeBirth} />
				</div>

				<div className ="form-group">
        <label>Followers:</label>
					<input type="text" className="form-control" onChange={this.onChangeFollowers}/>
				</div>


				<div className ="form-group">
        <input type="submit" value="Submit" className="btn btn-primary" />
				</div>
      </Form>
			</Col>
		
			
      <Col>
      <Form onSubmit={this.onSubmit_album}>
			<h3> Album</h3>
				<div className ="form-group">
        <label>Title:</label>
					<input type="text" className="form-control" onChange={this.onChangeTitle_albums}/>
				</div>

				<div className ="form-group">
        <label>Genre:</label>
					<input type="text" className="form-control" onChange={this.onChangeGenre} />
				</div>

				<div className ="form-group">
        <label>Cover:</label>
					<input type="text" className="form-control" onChange={this.onChangeCover}/>
				</div>

		

				<div className ="form-group">
        <input type="submit" value="Submit" className="btn btn-primary" />
				</div>
      </Form>
			</Col>
			
      <Col>
      <Form onSubmit={this.onSubmit_track}>
			<h3> Single</h3>
				<div className ="form-group">
        <label>Title:</label>
					<input type="text" className="form-control" onChange={this.onChangeTitle_tracks}/>
				</div>

				<div className ="form-group">
        <label>Duration:</label>
					<input type="text" className="form-control" onChange={this.onChangeDuration} />
				</div>

				<div className ="form-group">
        <label>Listenings:</label>
					<input type="text" className="form-control" onChange={this.onChangeListenings}/>
				</div>

				<div className ="form-group">
        <label>Likes:</label>
					<input type="text" className="form-control" onChange={this.onChangeLikes}/>
				</div>


				<div className ="form-group">
        <input type="submit" value="Submit" className="btn btn-primary" />
				</div>
      </Form>
			</Col>
			</Row>
			</Container>
    )
  }


	}