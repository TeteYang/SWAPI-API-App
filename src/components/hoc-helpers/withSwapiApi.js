import React from 'react';
import { SwapiServicesConsumer } from '../swapi-service-context';

const withSwapiApi = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (<SwapiServicesConsumer>
      {
        (swapiApi) => {
          const servicesProps = mapMethodsToProps(swapiApi)
          return (
            <Wrapped {...props} {...servicesProps}/>
          )
        }
      }
    </SwapiServicesConsumer>)
    }
  }

export default withSwapiApi;