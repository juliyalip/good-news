import { Route } from "react-router-dom";
import { Router } from "./router";

export interface IItem {
  path: string;
  title: string;
}

export const navigate = [
  { path: Router.Home, title: "Home" },
  { path: Router.Events, title: "Krakow" },
  { path: Router.People, title: "Vienna" },
  { path: Router.Places, title: "Bratislava" },
];
