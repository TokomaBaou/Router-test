import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  // :コロンはURLパラメーターとして扱うよという意味
  { path: "/:id", exact: false, children: <UrlParameter /> }
];
