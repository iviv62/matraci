import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import React from 'react';
import { setContext } from '@apollo/client/link/context';
import {makeVar} from '@apollo/client';

export const user = makeVar([]);
export const filterValues = makeVar([]);
export const selectFieldProductPage = makeVar([]);


const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          user: {
            read() {
              return user();
            },
          },
          filterValues: {
            read() {
              return filterValues();
            },
          },
          selectFieldProductPage: {
            read() {
              return selectFieldProductPage();
            },
          },

        
  
         
  
          },
  
          },
        },
  });


export const httpLink = createHttpLink({
    uri: 'http://api.ivelin.info/graphql/',
    
  });
  
export const authLink =setContext(async(_, { headers }) =>{
    
    
 
   
  });

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache,
    onError: ({ networkError, graphQLErrors }) => {
      console.log('graphQLErrors', graphQLErrors)
      console.log('networkError', networkError)
    }
  });