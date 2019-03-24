import React, { Component } from 'react';

import GlobalStyles from './global-styles';
import AppWrapper from './style';

import AreaGraph from './charts/area';
import RadarGraph from './charts/radar';
import PieGraph from './charts/pie';
import RadialBarGraph from './charts/radial-bar';

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
          <div className="graph pie">
            <h2>
              Структура расходов по категориям за тот же месяц того же года
            </h2>
            <PieGraph />
          </div>
          <div className="graph radial">
            <h2>
              Мои кольца активности на Apple Watch, если бы они у меня были
            </h2>
            <RadialBarGraph />
          </div>
        </section>
      </AppWrapper>
    );
  }
}

export default App;
