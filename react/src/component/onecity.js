import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';

import {
  connect
} from 'react-redux';

class OneCity extends Component {
showDetail(){
  this.props.setScreenView("detail");
  this.props.fetchDetail(this.props.city.id);
}
  render() {
    return (
<div>
      <span onClick={() => this.showDetail()}><a  href="javascript:0" >{this.props.city.name}</a></span>---------<span>{this.props.city.state}</span>--------<span >{this.props.city.country}</span>
</div>

    );
  }}
  export default connect()(OneCity);
