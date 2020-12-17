import {connect} from 'react-redux';

import {Counter} from './Counter'
import {getCounterValue} from "../store/data/counterReducer";
import {increment, decrement} from "../store/data/counterReducer";

const mapStateToProps = (state) => ({
  counterValue: getCounterValue(state),
})

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })

const mapDispatchToProps = {
  increment,
  decrement,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

const CounterContainer = connector(Counter);

export {
  CounterContainer
}
