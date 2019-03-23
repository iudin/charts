import React, { Component } from 'react';

import GlobalStyles from './global-styles';
import AppWrapper from './style';

import AreaGraph from './charts/area';
import RadarGraph from './charts/radar';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GlobalStyles />
        <header>
          <h1>Charts</h1>
        </header>
        <section>
          <div className="graph area">
            <h2>Доходы и расходы за июнь 1335 года до н.э.</h2>
            <AreaGraph />
          </div>
          <div className="graph radar">
            <h2>
              Показатели результативности каких-то раков в одной известной
              онлайн-игре
            </h2>
            <RadarGraph />
          </div>
        </section>
      </AppWrapper>
    );
  }
}

export default App;
