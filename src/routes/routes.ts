import { lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  to: string;
  name: string;
  Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
}

const LazyLayout = lazy(
  () =>
    import(/*wepackChunkName: "LazyLayout"*/ "../01-lazyload/layout/LazyLayout")
);
const Lazy1 = lazy(
  () =>
    import(/*wepackChunkName: "01-lazyload"*/ "../01-lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
  () =>
    import(/*wepackChunkName: "02-lazyload"*/ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/*wepackChunkName: "03-lazyload"*/ "../01-lazyload/pages/LazyPage3")
);
const Home = lazy(() => import("../02-components-patterns/pages/ShoppingPage"));

export const routes: Route[] = [
  {
    path: "Home",
    to: "/home",
    Component: Home,
    name: "Home",
  },
  {
    path: "lazy1",
    to: "/lazy1",
    Component: Lazy1,
    name: "Lazy-1",
  },
  {
    path: "lazy2",
    to: "/lazy2",
    Component: Lazy2,
    name: "Lazy-2",
  },
  {
    path: "lazy3",
    to: "/lazy3",
    Component: Lazy3,
    name: "Lazy-3",
  },
  {
    path: "nolazy",
    to: "/no-lazy",
    Component: LazyLayout,
    name: "NoLazy",
  },
];
