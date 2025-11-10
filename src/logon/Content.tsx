import styled from 'styled-components/macro';

export const Content = styled.div`
  height: 100%;
width: 100%;

background: radial-gradient(circle at 5% 8%, #7a828f, #4b505a 15%);

display: flex;
align-items: center;
justify-content: center;

position: relative;

::before,
::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
}

::before {
  background: linear-gradient(
    to right,
    #5b6270,
    #c2c5cc 15% 50%,
    transparent
  );
  top: 0;
}

::after {
  background: linear-gradient(
    to right,
    #2a2f38,
    #7f838a 15% 50%,
    transparent
  );
  bottom: 0;
}
`;
