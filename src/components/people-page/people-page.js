import React, {Component} from 'react';
import ItemList from '../item-list/item-list';
import SwapiApi from '../../services/swapiApi';
import ErrorBoundry from '../error-boundry/error-boundry';
import ItemDetails, {Record} from '../item-details/item-details';
import PersonList from '../sw-components';

const Row = ({left, right}) => {
  return (
  <div className="container d-flex mt-2">
    {left}
    {right}
  </div>
  )
}

export default class PeoplePage extends Component{
  swapiApi = new SwapiApi();

  state = {
    itemId: null,
  }

  onItemSelected = (id) => {
    this.setState({itemId: id})
  }

  // render() {
  //   const { itemId } = this.state;

  //   const itemList = (
  //     <ItemList
  //       onItemSelected={this.onItemSelected}
  //     >
  //       {(i)=>(
  //         `${i.name}`
  //       )}
  //     </ItemList>
  //   )
  //   const personDetails = (
  //     <ItemDetails
  //     getData={this.swapiApi.getPeople}
  //     itemId={itemId}
  //     getImg={this.swapiApi.getPeopleImage}
  //     >
  //       <Record fields="birth_year" label="Birth day"/>
  //       <Record fields="mass" label="Mass"/>

  //     </ItemDetails>
  //   )

  //   return (
  //     <ErrorBoundry>
  //       <Row left={itemList} right={personDetails}/>
  //     </ErrorBoundry>
  //   )
  // }
}