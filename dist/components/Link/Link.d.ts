import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import type { RouteLocation } from "../Route/Route";
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
