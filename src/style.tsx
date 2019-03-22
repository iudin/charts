import styled from 'styled-components';
import { colors } from './styles';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default AppWrapper;
