import { SvelteComponent, Component, Snippet } from "svelte";
import { RouteLocation } from "./Route";
import { globalHistory } from "../src/history";

export type Viewtransition = {
  fn?: any;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  opacity?: number;
  easing?: any;
  css?: (t: number) => string;
};

export type RouterProps = {
  basepath?: string;
  url?: string;
  viewtransition?: (direction?: string) => Viewtransition;
  history?: typeof globalHistory;
  children: Snippet<[string | null, RouteLocation]>;
};

export class Router extends SvelteComponent<RouterProps> {}
