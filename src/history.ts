/**
 * Adapted from https://github.com/reach/router/blob/b60e6dd781d5d3a4bdaaf4de665649c0f6a7e78d/src/lib/history.js
 * https://github.com/reach/router/blob/master/LICENSE
 */
import { canUseDOM } from "./utils";

export type HistoryListener = (event: {
  location: ReturnType<typeof getLocation>;
  action: string;
  preserveScroll?: boolean;
}) => void;

const getLocation = (
  source: Window | ReturnType<typeof createMemorySource>
) => {
  return {
    ...source.location,
    state: source.history.state,
    key: (source.history.state && source.history.state.key) || "initial",
  };
};
const createHistory = (
  source: Window | ReturnType<typeof createMemorySource>
) => {
  const listeners: HistoryListener[] = [];
  let location = getLocation(source);

  return {
    get location() {
      return location;
    },

    listen(listener: HistoryListener) {
      listeners.push(listener);

      const popstateListener = () => {
        location = getLocation(source);
        listener({ location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return () => {
        source.removeEventListener("popstate", popstateListener);
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    },

    navigate(
      to: string,
      {
        state = {},
        replace = false,
        preserveScroll = false,
        blurActiveElement = true,
      } = {}
    ) {
      state = { ...state, key: Date.now() + "" };
      // try...catch iOS Safari limits to 100 pushState calls
      try {
        if (replace) source.history.replaceState(state, "", to);
        else source.history.pushState(state, "", to);
      } catch (e) {
        (source.location as Location)[replace ? "replace" : "assign"](to);
      }
      location = getLocation(source);
      listeners.forEach((listener) =>
        listener({ location, action: "PUSH", preserveScroll })
      );
      if (blurActiveElement && document.activeElement instanceof HTMLElement)
        document.activeElement.blur();
    },
  };
};
// Stores history entries in memory for testing or other platforms like Native
const createMemorySource = (initialPathname = "/") => {
  let index = 0;
  const stack = [{ pathname: initialPathname, search: "" }];
  const states: Record<string, unknown>[] = [];

  return {
    get location() {
      return stack[index];
    },
    addEventListener(name: string, fn: any) {},
    removeEventListener(name: string, fn: any) {},
    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState(state: Record<string, unknown>, _: unknown, uri: string) {
        const [pathname, search = ""] = uri.split("?");
        index++;
        stack.push({ pathname, search });
        states.push(state);
      },
      replaceState(state: Record<string, unknown>, _: unknown, uri: string) {
        const [pathname, search = ""] = uri.split("?");
        stack[index] = { pathname, search };
        states[index] = state;
      },
    },
  };
};
// Global history uses window.history as the source if available,
// otherwise a memory history
const globalHistory = createHistory(
  canUseDOM() ? window : createMemorySource()
);
const { navigate } = globalHistory;

export { globalHistory, navigate, createHistory, createMemorySource };
