import styled from 'styled-components';
import { colors } from './styles';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 100vw;
  min-height: 100vh;
  text-align: center;
  header {
    background-color: ${colors.headerBg};
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${colors.text};
  }
  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: ${`
      'area area'
      'radar pie'
      'radial radial'
    `};
    grid-gap: 20px;
    padding: 10px 10px 40px;
    .area {
      grid-area: area;
    }
    .radar {
      grid-area: radar;
    }
    .pie {
      grid-area: pie;
    }
    .radial {
      grid-area: radial;
    }
    .graph {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;

export default AppWrapper;
