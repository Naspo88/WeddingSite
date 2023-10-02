import { ReactNode } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HeaderMenu from "./components/routing/HeaderMenu/HeaderMenu";
import WelcomePage from "./components/pages/WelcomePage/WelcomePage";
import InfosPage from "./components/pages/InfosPage/InfosPage";
import WeddingListPage from "./components/pages/WeddingListPage/WeddingListPage";
import ContactsPage from "./components/pages/ContactsPage/ContactsPage";

export interface Page {
  id: string;
  name: string;
  href: string;
  component: ReactNode;
}

export const pages: Page[] = [
  { id: "home", name: "Welcome", href: "/", component: <WelcomePage /> },
  { id: "info", name: "Infos", href: "/infos", component: <InfosPage /> },
  {
    id: "weddig-list",
    name: "Wedding List",
    href: "/wedding-list",
    component: <WeddingListPage />,
  },
  {
    id: "contacts",
    name: "Contacts",
    href: "/contacts",
    component: <ContactsPage />,
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <HeaderMenu pages={pages}>
        <Routes>
          {pages.map(({ id, href, component }) => (
            <Route key={id} path={`WeddingSite/${href}`} element={component} />
          ))}
        </Routes>
      </HeaderMenu>
    </BrowserRouter>
  );
};

export default App;
