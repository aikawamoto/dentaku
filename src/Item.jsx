import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Card } from 'react-onsenui';

export default class Item extends React.Component {
  constructor(props) { 
    super(props);
    }
render() { 
  return ( 
    <Card> 
    <p>{this.props.text}</p> 
    <p>{this.props.Date.getFullYear()}/{this.props.Date.getMonth()}/{this.props.Date.getDate()} {this.props.Date.getHours()}:{this.props.Date.getMinutes()}:{this.props.Date.getSeconds()}</p> 
    </Card> 
    ); 
    }
}