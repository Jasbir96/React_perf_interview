import Counter from "./components/withoutRedux"
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import CounterWithRedux from "./components/withRedux/CounterWithRedux";
import CounterInputWithRedux from "./components/withInputRedux/CounterInputWithRedux";
import User from "./components/user/User";
import UserRedux from "./components/withUseRredux/userredux";
const App = () => {

  return (
    <Provider store={store}>
      {/* <Counter /> */}
      {/* <CounterWithRedux /> */}
      {/* <CounterInputWithRedux /> */}
      {/* <User></User> */}
    <UserRedux></UserRedux>
    </Provider>

  )
}

export default App
