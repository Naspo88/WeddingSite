import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";

const App = styled.div`
  text-align: center;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${appLogoSpin} infinite 20s linear;
  }
`;

const AppHeader = styled.header`
  background-color: #272932;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #dbdbdb;
`;

const WelcomePage = () => (
  <App data-testid="welcome">
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <p>Desi and Roberto Wedding!!</p>
      <p>Test some changes 2</p>
    </AppHeader>
  </App>
);

export default WelcomePage;
