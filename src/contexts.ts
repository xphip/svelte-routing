import { getContext } from "svelte";
import { readable, writable } from "svelte/store";
import type { RouteLocation } from "../types/Route";
import type { RouterContext } from "../types/RouterContext";
import { globalHistory } from "./history";

export const LOCATION = {};
export const ROUTER = {};
export const HISTORY = {};

type LocationContext = ReturnType<typeof readable<RouteLocation>>;

type HistoryContext = ReturnType<typeof readable<typeof globalHistory>>;

export const useInternalLocation = () =>
  getContext<ReturnType<typeof writable<RouteLocation>>>(LOCATION);
export const useLocation = () => getContext<LocationContext>(LOCATION);
export const useRouter = () => getContext<RouterContext>(ROUTER);
export const useHistory = () => getContext<typeof globalHistory>(HISTORY);
