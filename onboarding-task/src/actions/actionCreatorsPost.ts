import {
  POST_ITEM_FAILURE,
  POST_ITEM_REQUEST,
  POST_ITEM_SUCCESS,
} from './actionTypes';
import { Dispatch } from '../types/Dispatch';
import { IAction } from './IAction';
import { IItem } from '../models/IItem';
import { checkStatus } from './checkStatus';
import { ActionAsync } from './ActionAsync';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const postItemRequest = (): IAction => {
  return {
    type: POST_ITEM_REQUEST,
    payload: {},
  };
};


 const postItemSuccess = (item: IItem): IAction => {
  return {
    type: POST_ITEM_SUCCESS,
    payload: {
      item
    },
  };
 };

 const postItemFailure = (errors: string[]): IAction => {
  return {
    type: POST_ITEM_FAILURE,
    payload: {
      errors
    },
  };
 };

export const postItem = (text: string) : ActionAsync => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return (dispatch: Dispatch) => {
    dispatch(postItemRequest());

    return fetch('api/v1/items', {
      method: 'post',
      body: JSON.stringify({text}),
      headers,
    })
      .then(checkStatus)
      .then(item => dispatch(postItemSuccess(item)))
      .catch(errors => dispatch(postItemFailure(errors)));
  };
};
