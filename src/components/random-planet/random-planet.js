import React, {Component} from 'react';
import SwapiApi from '../../services/swapiApi';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends Component {
  swapiApi = new SwapiApi();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onError() {
    this.setState({
      error: true,
      loading: false
    })
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random()*40 + 1)
    this.swapiApi
    .getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading & error);
    const spinner = loading? <Spinner /> : null;
    const content = hasData? <PlanetView planet={planet} /> : null;
    const errorMasage = error ? <ErrorIndicator /> : null;

    return(
      <div className="jumbotron container mt-3 d-flex justify-content-space-evenly">
        {spinner}
        {content}
        {errorMasage}
      </div>
    )
  }
}

const PlanetView = ({planet}) => {
  if(!planet) {
    return <Spinner />
  }
  const { name, population, rotationPeriod, diameter, id } = planet;
  return (
    <React.Fragment>
    <div>
      {/* <img
      className="width: 50%"
      src={`https://starwars-visualguide.com//assets/img/planets/${id}.jpg`}
      alt=""/> */}
    </div>
      <div>
        <h4 className="mb-2">{name}</h4>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span>Population</span>
          <span>{population}</span>
        </li>
        <li className="list-group-item">
          <span>Rotation Period</span>
          <span>{rotationPeriod}</span>
        </li>
        <li className="list-group-item">
          <span>Diameter</span>
          <span>{diameter}</span>
        </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
