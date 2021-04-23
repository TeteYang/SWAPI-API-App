import React from 'react';
import ItemDetails, { Record } from '../item-details';

import { withSwapiApi } from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record fields="birth_year" label="Birth day"/>
      <Record fields="mass" label="Mass"/>
    </ItemDetails>
      )
};

const mapMethodsToProps = (swapiApi) => {
  return {
    getData: swapiApi.getPeople,
    getImg: swapiApi.getPeopleImage
  }
}

export default withSwapiApi(PersonDetails, mapMethodsToProps);