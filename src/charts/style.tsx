import styled from 'styled-components';

const ChartTooltip = styled.div`
  padding: 10px;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 2px rgba(200, 200, 200, 0.9);
  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }
  p > span {
    font-weight: 600;
  }
`;

export default ChartTooltip;
