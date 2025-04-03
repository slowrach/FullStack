import { tickets } from "./tickets.js";
import { parse } from "../utils/parse.js";

export const routes = [...tickets].map((route) => ({
   ...route,
   path: parse(route.path),
}))