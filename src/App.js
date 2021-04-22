import "./App.css";
import { Provider } from "react-redux";
import store from "./App/Redux/store";
import Home from "./App/Screens/Home/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./App/Screens/Authentication/SignUp";
import SignIn from "./App/Screens/Authentication/SignIn";
import AuctionDetails from "./App/Screens/ActionDetails/AuctionDetails";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#01172d",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#5ABFC0",
    },
    
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={AuctionDetails} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={SignIn} />
            {/* <Route exact path="/profile" component={Profile} />
            <Route exact path="/myinvestments" component={MyInvestments} />
            <Route exact path="/create" component={Create} /> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
