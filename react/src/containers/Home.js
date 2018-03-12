import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';
import {
fetchCity ,addCity,setScreenView,fetchDetail
} from '../actions/cityaction';
import {
  connect
} from 'react-redux';
import Add from '../component/add';
import City from '../component/city';
import CityDetail from '../component/citydetail';

class Home extends Component {
  componentWillMount(){
    this.props.fetchCity();
  }
  render() {
    return (<div>{this.props.view === "add" &&
      <Add addCity={this.props.addCity} setScreenView={this.props.setScreenView}/>}

      {this.props.view === "home" &&
      <City city={this.props.city} fetchDetail={this.props.fetchDetail} setScreenView={this.props.setScreenView}/>
    }
    {this.props.view === "detail" &&
    <CityDetail cityDetail={this.props.cityDetail} setScreenView={this.props.setScreenView}/>
  }
      </div>

    );
  }}
  const mapStateToProps = (state) => {

    return {
	city:state.city,
  view:state.view,
  cityDetail:state.cityDetail
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
    fetchCity:()=>dispatch(fetchCity()),
    addCity:()=>dispatch(addCity()),
    setScreenView:(view)=>dispatch(setScreenView(view)),
    fetchDetail:(id)=>dispatch(fetchDetail(id))
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
