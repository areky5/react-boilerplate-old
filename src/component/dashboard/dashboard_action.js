import { ADD_TEST } from "../../../src/actions/constants";

export function addTest(message){
  return {
    type: ADD_TEST,
    payload: message
  }
}
