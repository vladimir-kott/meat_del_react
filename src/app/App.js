import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Footer from './components/footer'
import Main from './layouts/main'
import Chechout from './layouts/chechout'


function App() {
  return (
    <div>
       <Switch>
          <Route path="/chechout" component={Chechout} />
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
       </Switch>
       <Footer />
    </div>
  )
}

export default App;
