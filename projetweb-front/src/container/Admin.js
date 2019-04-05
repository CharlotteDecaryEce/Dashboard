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
		Albums:'',
		Genre:'',
		Cover:'',
		Title:'',
		Track:'',
		Duration:'',
		Listenings:'',
		Likes:'',
		Featuring:''
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
	onChangeAlbums= event => { 
    this.setState({Albums: event.target.value});
	}
	onChangeTitleAl= event => { 
    this.setState({Title: event.target.value});
	}
	onChangeGenre= event => { 
    this.setState({Genre: event.target.value});
	}
	onChangeCover= event => { 
    this.setState({Cover: event.target.value});
	}
	onChangeTrack= event => { 
    this.setState({Track: event.target.value});
	}
	onChangeTitleTr= event => { 
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
	onChangeFeaturing= event => { 
    this.setState({Featuring: event.target.value});
	}

  onSubmitt= event => { 
		event.preventDefault();
		var artistes = {
			Nom: this.state.Nom,
			Birth: this.state.Birth,
			Followers: this.state.Followers, 
			Albums: this.state.Albums
		}
		axios.put('http://localhost:3001/artistes',artistes)
		.then(res =>{
			console.log(res);
			console.log(res.data);
		} )
	}
	onSubmitt= event => { 
		event.preventDefault();
		var albums = {
			Title: this.state.Title,
			Genre: this.state.Genre,
			Cover: this.state.Cover, 
			Track: this.state.Track
		}
		axios.put('http://localhost:3001/albums',albums)
		.then(res =>{
			console.log(res);
			console.log(res.data);
		} )
	}
	
	onSubmitt= event => { 
		event.preventDefault();
		var tracks = {
			Title: this.state.Title,
			Duration: this.state.Duration,
			Listenings: this.state.Listenings, 
			Likes: this.state.Likes,
			Featuring: this.state.Featuring
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
      <Form onSubmit={this.onSubmitt}>
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
        <label>Albums:</label>
					<input type="text" className="form-control" onChange={this.onChangeAlbums} />
				</div>

				<div className ="form-group">
        <input type="submit" value="Submit" className="btn btn-primary" />
				</div>
      </Form>
			</Col>
		
			
      <Col>
      <Form onSubmit={this.onSubmitt}>
			<h3> Album</h3>
				<div className ="form-group">
        <label>Title:</label>
					<input type="text" className="form-control" onChange={this.onChangeTitleAl}/>
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
        <label>Track:</label>
					<input type="text" className="form-control" onChange={this.onChangeTrack} />
				</div>

				<div className ="form-group">
        <input type="submit" value="Submit" className="btn btn-primary" />
				</div>
      </Form>
			</Col>
			
      <Col>
      <Form onSubmit={this.onSubmitt}>
			<h3> Tracks</h3>
				<div className ="form-group">
        <label>Title:</label>
					<input type="text" className="form-control" onChange={this.onChangeTitleTr}/>
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
        <label>Featuring:</label>
					<input type="text" className="form-control" onChange={this.onChangeFeaturing} />
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