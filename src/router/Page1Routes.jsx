import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  { path: "/page1", exact: false, children: <Page1DetailA /> },
  { path: "/page2", exact: false, children: <Page1DetailB /> }
];
