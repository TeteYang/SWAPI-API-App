import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import { withSwapiApi } from '../hoc-helpers';

const withChildrenFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

const mapPersonToProps = (swapiApi) => {
  return {
    getData: swapiApi.getAllPeople,
  };
};

const mapPlanetToProps = (swapiApi) => {
  return {
    getData: swapiApi.getAllPlanets,
  };
};
const mapStarshipToProps = (swapiApi) => {
  return {
    getData: swapiApi.getAllStarships,
  };
}

const renderName = ({name}) => <span>{name}</span>

// const ListWithChildren = withChildrenFunction(ItemList, renderName);

const PersonList = withSwapiApi(withData(
                    withChildrenFunction
                    (ItemList, renderName)),
                    mapPersonToProps);
const PlanetList = withSwapiApi(withData(
                    withChildrenFunction
                    (ItemList, renderName)),
                    mapPlanetToProps);
const StarshipList = withSwapiApi(withData(
                    withChildrenFunction
                    (ItemList, renderName)),
                    mapStarshipToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
}