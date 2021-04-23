export default class SwapiApi {
  constructor() {
    this._apiBaseUrl = 'https://swapi.dev/api';
    this._imageBase = 'https://starwars-visualguide.com//assets/img/'
  }
  getResourse = async (url) => {
    const res = await fetch(`${this._apiBaseUrl}${url}`);
    if(!res.ok) {
      throw new Error(url);
    }
    return await res.json();
  };
  getAllPeople = async () => {
    const res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPerson);
  }
  getPeople = async (id) =>  {
    const res = await this.getResourse(`/people/${id}`);
    return this._transformPerson(res);
  }
  getAllStarships = async () => {
    const res = await this.getResourse(`/starships/`);
    return res.results.map(this._transformStarship);
  }
  getStarship = async (id) => {
    const res = await this.getResourse(`/starships/${id}`);
    return this._transformStarship(res);
  }
  getAllPlanets = async () => {
    const res = await this.getResourse(`/planets/`);
    return res.results.map(this._transformPlanet);
  }
  getPlanet = async (id) => {
    const res = await this.getResourse(`/planets/${id}`);
    return this._transformPlanet(res);
  }
  _transformPerson(person) {
    return {
      name: person.name,
      birth_year: person.birth_year,
      mass: person.mass,
      id: person.url.match(/\d/gi).join().replace(/\D/g, "")
    }
  }
  _transformStarship(starship) {
    return {
      name: starship.name,
      cargo_capacity: starship.cargo_capacity,
      crew: starship.crew,
      cost_in_credits: starship.cost_in_credits,
      id: starship.url.match(/\d/gi).join().replace(/\D/g, "")
    }
  }
  _transformPlanet(planet) {
    return {
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      id: planet.url.match(/\d/gi).join().replace(/\D/g, "")
    }
  }
  getPeopleImage = (id) => {
    // console.log(id)
    return `${this._imageBase}/characters/${id}.jpg`
  }
  getStarshipImage = (id) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }
  getPlanetImage = (id) => {
    return `${this._imageBase}/planet/${id}.jpg`
  }
}