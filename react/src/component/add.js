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

class Add extends Component {

  render() {
    return (<div>
      <BackHome setScreenView={this.props.setScreenView}/><br/>
      <span>
      city<input type ="text" id="name"/>
      state<input type ="text" id="state"/>
      country<input type ="text" id="country"/>
      </span><span>
      <input type="button" onClick={this.props.addCity} value="Add city"/>
      </span></div>



    );
  }}
  export default connect()(Add);
