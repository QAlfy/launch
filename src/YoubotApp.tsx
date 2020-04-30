import configureStore from './store/configureStore';
import CssBaseline from '@material-ui/core/CssBaseline';
import LaunchPage from './components/LaunchPage';
import React from 'react';
import strings from './i18n';
import theme from './components/styles/theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import '../assets/fonts/roboto.css';

const store = configureStore({});

export default class YoubotApp extends React.Component {
  componentWillMount() {
    const dim = { width: 1366, height: 768 };

    this.setState({
      layout: {
        width: dim.width,
        height: dim.height,
        x: 0,
        y: 0
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <Helmet>
          <title>{strings.brand.title} - {strings.brand.legend}</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/launch">
                <LaunchPage />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider >
    );
  }
}
