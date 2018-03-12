import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';

import {
  connect
} from 'react-redux';
import BackHome from './backhome'
class CityDetail extends Component {
setView(){
  this.props.setScreenView("add");
}
  render() {
    return (
      <div>
      <BackHome setScreenView={this.props.setScreenView}/><br/>
      {this.props.cityDetail}
      </div>


    );
  }}
  export default connect()(CityDetail);
