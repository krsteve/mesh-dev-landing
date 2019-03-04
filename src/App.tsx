import { deepOrange, indigo } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import SimpleAppBar from "./components/Appbar";
import Body from './components/Body';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: deepOrange[500],
    },
  },
  typography: {
    fontFamily: "DOSSaemmul",
  }
});

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <SimpleAppBar />
        <Body />
      </MuiThemeProvider>
    );
  }
}

export default App;
