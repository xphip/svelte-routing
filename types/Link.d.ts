import { Component, Snippet, SvelteComponent } from "svelte";
import { HTMLAnchorAttributes } from "svelte/elements";
import { RouteLocation } from "./Route";

export type LinkProps = {
  children: Snippet<[boolean]>;
  to: string;
  replace?: boolean;
  preserveScroll?: boolean;
  state?: {
    [k in string | number]: unknown;
  };
  getProps?: (linkParams: GetPropsParams) => Record<string, any>;
  click?: (e: MouseEvent) => void;
} & Omit<HTMLAnchorAttributes, "href">;

export type GetPropsParams = {
  location: RouteLocation;
  href: string;
  isPartiallyCurrent: boolean;
  isCurrent: boolean;
};

export type Link = Component<LinkProps>;
