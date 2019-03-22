import React, { Component } from 'react';

import GlobalStyles from './global-styles';
import AppWrapper from './style';

import Chart from './charts';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GlobalStyles />
        <header>
          <h1>Charts</h1>
        </header>
        <section>
          <Chart />
        </section>
      </AppWrapper>
    );
  }
}

export default App;
