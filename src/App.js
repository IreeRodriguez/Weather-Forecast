import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Santiago,scl',
  'Ciudad de México,mx',
  'Madrid,es',
  'Rio de Janeiro,br',
  'Roma,it',
  'London,uk'
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weather" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="App">
              <LocationListContainer cities = {cities} />
            </Col>
            <Col xs={12} md={6} className="App">
              <Paper zDepth={4}>
                <div className="detail">
                <ForecastExtendedContainer />
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    ); 
  }
}
export default App;
