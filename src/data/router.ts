export interface IRouter {
  [key: string]: string;
}

export const Router: IRouter = {
  Home: "/",
  Events: "/krakow",
  People: "/vienna",
  Places: "/bratislawa",
};
