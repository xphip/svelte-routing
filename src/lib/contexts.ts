import { getContext } from "svelte";
import { readable, writable } from "svelte/store";
import type { RouterContext } from "../lib/RouterContext";
import { globalHistory } from "./history";
import type { RouteLocation } from "../components/Route/Route";

export const LOCATION = {};
export const ROUTER = {};
export const HISTORY = {};

type LocationContext = ReturnType<typeof readable<RouteLocation>>;

type HistoryContext = typeof globalHistory;

export const useInternalLocation = () =>
  getContext<ReturnType<typeof writable<RouteLocation>>>(LOCATION);

export const useLocation = () => getContext<LocationContext>(LOCATION);
export const useRouter = () => getContext<RouterContext>(ROUTER);
export const useHistory = () => getContext<HistoryContext>(HISTORY);
