import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiApi from '../../services/swapiApi';
import {
  SwapiServicesProvider,
} from '../swapi-service-context';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
} from '../sw-components';

export default class App extends Component{
  swapiApi = new SwapiApi();

  state = {
    personId: null,
    hasError: false
  }

  onItemSelected = (id) => {
    this.setState({personId: id})
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {
    const { hasError } = this.state;

    if(hasError) {
      return <ErrorIndicator />
    }

    return(
    <div>
      <SwapiServicesProvider value={this.swapiApi}>
        <Header />
        <RandomPlanet />
        <PersonDetails itemId={11}>
        </PersonDetails>
        <PersonList />
          {/* {(i)=>(
            `${i.name}`
          )} */}
        <PlanetList />
      </SwapiServicesProvider>
    </div>
    )
  }
}