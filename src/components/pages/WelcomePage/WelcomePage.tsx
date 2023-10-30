import styled from "styled-components";
import { headerHeight } from "../../routing/HeaderMenu/HeaderMenu";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  min-height: calc(100vh - ${headerHeight});
  background-color: #272932;
  font-size: calc(10px + 2vmin);
  color: #dbdbdb;
`;

const WelcomePage = () => (
  <Page data-testid="welcome">
    <i>Desi and Roberto</i>
  </Page>
);

export default WelcomePage;
