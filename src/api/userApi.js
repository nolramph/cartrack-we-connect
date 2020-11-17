import {handleResponse, handleError} from './apiUtils';
const apiUrl = 'https://jsonplaceholder.typicode.com/users';


export function getUsers() {
    return fetch(apiUrl)
      .then(handleResponse)
      .catch(handleError);
  }