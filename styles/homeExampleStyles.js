import styled from 'styled-components';
import { px2rem, px2vw } from '../util';

export const HomeWrapper = styled.div`
  padding: 0 20px;
  max-width: 1440px;

  >img{
    width: ${px2rem(600)};
    height: ${px2rem(400)};
  }
`;

export const MainTitle = styled.h1`
  font-size: ${px2rem(45)};
`

export const GenericRow = styled.div`
  display: flex;
  justify-content: space-between;
  >.row-square{
    width: ${px2rem(150)};
    height: ${px2rem(150)};
    background-color: red;
  }
`;

export const ViewportRow = styled.div`
  width: ${px2vw(450)};
  height: ${px2rem(100)};
  background-color: green;
`;