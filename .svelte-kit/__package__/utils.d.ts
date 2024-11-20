/**
 * Adapted from https://github.com/reach/router/blob/b60e6dd781d5d3a4bdaaf4de665649c0f6a7e78d/src/lib/utils.js
 * https://github.com/reach/router/blob/master/LICENSE
 */
import type { RouteConfig } from "../types/RouterContext";
/**
 * Strip `str` of potential start and end `/`
 */
declare const stripSlashes: (string: string) => string;
/**
 * Ranks and picks the best route to match. Each segment gets the highest
 * amount of points, then the type of segment gets an additional amount of
 * points where
 *
 *  static > dynamic > splat > root
 *
 * This way we don't have to worry about the order of our routes, let the
 * computers do it.
 *
 * A route looks like this
 *
 *  { path, default, value }
 *
 * And a returned match looks like:
 *
 *  { route, params, uri }
 *
 */
declare const pick: (routes: RouteConfig[], uri: string) => {
    route: RouteConfig;
    params: Record<string, string>;
    uri: string;
} | null;
/**
 * Resolve URIs as though every path is a directory, no files. Relative URIs
 * in the browser can feel awkward because not only can you be "in a directory",
 * you can be "at a file", too. For example:
 *
 *  browserSpecResolve('foo', '/bar/') => /bar/foo
 *  browserSpecResolve('foo', '/bar') => /foo
 *
 * But on the command line of a file system, it's not as complicated. You can't
 * `cd` from a file, only directories. This way, links have to know less about
 * their current path. To go deeper you can do this:
 *
 *  <Link to="deeper"/>
 *  // instead of
 *  <Link to=`{${props.uri}/deeper}`/>
 *
 * Just like `cd`, if you want to go deeper from the command line, you do this:
 *
 *  cd deeper
 *  # not
 *  cd $(pwd)/deeper
 *
 * By treating every path as a directory, linking to relative paths should
 * require less contextual information and (fingers crossed) be more intuitive.
 */
declare const resolve: (to: string, base: string) => string;
/**
 * Combines the `basepath` and the `path` into one path.
 */
declare const combinePaths: (basepath: string, path: string) => string;
/**
 * Decides whether a given `event` should result in a navigation or not.
 * @param {object} event
 */
declare const shouldNavigate: (event: MouseEvent) => boolean;
declare const hostMatches: (anchor: HTMLAnchorElement) => boolean;
declare const canUseDOM: () => boolean;
export { stripSlashes, pick, resolve, combinePaths, shouldNavigate, hostMatches, canUseDOM, };
