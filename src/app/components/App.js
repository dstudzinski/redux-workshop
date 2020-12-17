import {CounterContainer} from "./Counter.container";
import {CounterHooks} from "./CounterHooks";
import {getUsersThunk} from "../thunks/users";
import {useDispatch, useSelector} from "react-redux";
import {getUsersData, getUsersStatus} from "../store/data/usersSlice";

function App() {
  const usersStatus = useSelector(getUsersStatus);
  const usersData = useSelector(getUsersData);
  const dispatch = useDispatch();



  return (
    <div>
      hello
      <CounterContainer/>
      <CounterHooks/>
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={() => dispatch(getUsersThunk())}>Get Users</button>
      <div>{usersStatus === 'LOADING' ? 'Loading....' : <pre>{JSON.stringify(usersData, null, 2)}</pre>}</div>
    </div>
  );
}

export default App;
