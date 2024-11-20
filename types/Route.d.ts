import { SvelteComponent, Component, Snippet } from "svelte";

type AsyncSvelteComponent = () => Promise<{
  default: Component;
}>;

export type RouteProps = {
  path?: string;
  component?: Component | AsyncSvelteComponent;
  children?: Snippet<[RouteParams]>;
  [additionalProp: string]: unknown;
};

export type RouteSlots = {
  default: {
    location: RouteLocation;
    params: RouteParams;
  };
};

export type RouteLocation = {
  pathname: string;
  search: string;
  hash?: string;
  state: {
    [k in string | number]: unknown;
  };
};

export type RouteParams = {
  [param: string]: string;
};

// export class RouteO extends SvelteComponent<
//     RouteProps,
//     Record<string, any>,
//     RouteSlots
// > {}

export type Route = Component<RouteProps, Record<string, any>, RouteSlots>;
