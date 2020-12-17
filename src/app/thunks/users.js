import {getUsers} from "../services/users";
import {getUsersStatus, loading, setData} from '../store/data/usersSlice';

function getUsersThunk() {
  return async function (dispatch, getState) {
    const usersStatus = getUsersStatus(getState())

    dispatch(loading());
    const response = await getUsers();
    const data = await response.json();

    dispatch(setData(data));
  }
}

export {
  getUsersThunk
}
