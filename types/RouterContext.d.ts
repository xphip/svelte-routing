import { readable } from "svelte/store";

export type RouteConfig = {
  _path?: string;
  path: string;
  default: boolean;
};

type ActiveRoute = {
  params: { [key: string]: string };
  preserveScroll: boolean;
  route: RouteConfig;
  uri: string;
};

type RouterBase = {
  path: string;
  uri: string;
};

export type RouterContext = {
  activeRoute: ReturnType<typeof readable<ActiveRoute>>;
  base: ReturnType<typeof readable<RouterBase>>;
  routerBase: ReturnType<typeof readable<RouterBase>>;
  registerRoute: (route: Omit<RouteConfig, "default">) => {};
  unregisterRoute: (route: RouteConfig) => {};
};
