import { createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';

import {
  Container,
} from '@material-ui/core';

import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Components/Header';
import Home from './Views/Home/Home';
import Facts from './Views/Facts/Facts';
import Stories from './Views/Stories/Stories';
import Quiz from './Views/Quiz/Quiz';
import Pledge from './Views/Pledge/Pledge';

const theme = createMuiTheme({
    palette: {
      //type: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    }
  }
);

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between' 
  }
}));

const routes = [
  {name: 'root', path: '/', component: <Home />, auth: false, show:false},
  {name: 'home', path: '/home', component: <Home />, auth: false, show:true},
  {name: 'facts', path: '/facts', component: <Facts />, auth: false, show:true},
  {name: 'stories', path: '/stories', component: <Stories />, auth: false, show:true},
  {name: 'take the pledge', path: '/take-the-pledge', component: <Quiz />, auth: false, show:true},
  {name: 'pledge', path: '/pledge-form', component: <Pledge />, auth: false, show:false},
];

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Container  className={`App ${classes.root}`} maxWidth='xl' >
        <Router>
          <Header className={classes.header} title='DriveSafe' items={routes}/>
          <Container>
            <Switch>
              {routes.map((route, idx)=>{
                return (!idx ? <Route exact path={route.path}>{route.component}</Route> : 
                <Route path={route.path}>{route.component}</Route>);
              })}          
            </Switch>
          </Container>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
