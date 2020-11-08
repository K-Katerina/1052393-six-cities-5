import {appData} from "./app-data/app-data";
import {appProcess} from "./app-process/app-process";
import {user} from "./user/user";
import {combineReducers} from "redux";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.PROCESS]: appProcess,
  [NameSpace.USER]: user
});
