import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCity } from './../actions';
import LocationList from '../components/locationList';

class LocationListContainer extends Component {
  handleSelectionLocation = (city) => {
    this.props.setCity(city);
  }
  
  render() {
    return (
      <div>
        <LocationList cities={this.props.cities} onSelectedLocation = {this.handleSelectionLocation}></LocationList>
      </div>
    );
  }
}

const mapDispatchToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});

// LocationListContainer.propTypes = {

// };

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);