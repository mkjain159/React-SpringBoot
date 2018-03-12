import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';

import {
  connect
} from 'react-redux';
import OneCity from './onecity'
class City extends Component {
setView(){
  this.props.setScreenView("add");
}
  render() {
    return (
      <div>
        <span onClick={() => this.setView()}><a  href="javascript:0" >Add City</a></span>
      {this.props.city && this.props.city.length > 0 && this.props.city.map((c) => (
        <div><OneCity city={c} fetchDetail={this.props.fetchDetail} setScreenView={this.props.setScreenView}/></div>))}
      </div>


    );
  }}
  export default connect()(City);
