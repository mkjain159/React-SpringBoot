import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';

import {
  connect
} from 'react-redux';

class BackHome extends Component {
  setView(){
    this.props.setScreenView("home");
  }
  render() {
    return (
        <span onClick={() => this.setView()}><a  href="javascript:0" >Back To Home</a></span>
    );
  }}
  export default connect()(BackHome);
