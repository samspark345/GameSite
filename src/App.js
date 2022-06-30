import MyNav from './Navbar';
import Home from './Home';
import DiscoverGames from './DiscoverGames';
import RateGames from './RateGames';
import About from './AboutUs';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNav />
        <div className="content">
          {/* {<DiscoverGames />} */}
          {/* <Home /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/discoverGames">
              <DiscoverGames />
            </Route>

            <Route exact path="/rateGames">
              <RateGames />
            </Route>

            <Route exact path="/aboutUs">
              <About />
            </Route>

            <Route exact path="/contactUs">
              <ContactUs />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
