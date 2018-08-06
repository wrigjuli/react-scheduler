import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Scheduler</h1>
        </header>
        <Timeslot time = '9am'/>
        <Timeslot time = '10am'/>
        <Timeslot time = '11am'/>
        <Timeslot time = '12pm'/>
        <Timeslot time = '1pm'/>
        <Timeslot time = '2pm'/>
        <Timeslot time = '3pm'/>
        <Timeslot time = '4pm'/>

      </div>
    );
  }
}

class Timeslot extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: '',
      showModal: false,
    }
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  phoneChange(event){
    this.setState({
      phone: event.target.value,
    })
  }

  nameChange(event){
    this.setState({
      name: event.target.value,
    })
  }

  handleOpenModal(event){
    event.preventDefault();
    this.setState({showModal: true}, function(){
      console.log('open', this.state.showModal)

    });

  }

  handleCloseModal(event){
    event.preventDefault();
    this.setState({showModal: false}, function(){
      // console.log("inside handleCloseModal showModal is: ", this.state.showModal);
      // console.log(this.props)
      console.log('close', this.state.showModal)

    });

  }

  render(){
    return (
      <div>
        <div
          id={this.props.time}
          className = {this.state.phone || this.state.name ? "color": "white"}
          onClick = {this.handleOpenModal}>
          <h2 className="App"> {this.props.time} </h2>
          <ul className = "list">
            <li>Name: {this.state.name}</li>
            <li>Phone: {this.state.phone}</li>
          </ul>
        </div>
        <ReactModal
          isOpen = {this.state.showModal}
          // onRequestClose = {(e) => this.handleCloseModal(e)}
          >
            <h2> {this.props.time} </h2>
          <form onSubmit = {alert}>
          <input type="text" name="name"
            value={this.state.name}
            placeholder="Name"
            onChange = {(event)=>this.nameChange(event)}/>
          <input type="text" name="phone"
            onChange = {(event)=>this.phoneChange(event)}
            value={this.state.phone}
            placeholder = "Phone number"/>
           <button onClick={(e)=>this.handleCloseModal(e)}>Update</button>
            <button onClick={(e)=>this.handleCloseModal(e)}>Cancel</button>
          </form>
          </ReactModal>
      </div>
    )
  }
}

export default App;
