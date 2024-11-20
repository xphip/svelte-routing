<script lang="ts">
  import { getContext, onDestroy, type Component } from "svelte";
  import { ROUTER, useRouter } from "./contexts.js";
  import { canUseDOM } from "./utils.js";
  import type { RouteProps, RouteParams } from "../types/Route.js";

  let { path = "", component, children, ...rest }: RouteProps = $props();

  let routeParams = $state<RouteParams>({});
  let routeProps = $state({});

  const { registerRoute, unregisterRoute, activeRoute } = useRouter();

  const route = {
    path,
    // If no path prop is given, this Route will act as the default Route
    // that is rendered if no other Route in the Router is a match.
    default: path === "",
  };

  $effect(() => {
    if ($activeRoute && $activeRoute.route === route) {
      routeParams = $activeRoute.params;

      // const { component: c, path, ...rest } = $$props;
      routeProps = rest;

      // TODO determine what this actually was used for
      // if (component) {
      //   if (component.toString().startsWith("class ")) component = component;
      //   else component = component();
      // }

      canUseDOM() && !$activeRoute.preserveScroll && window?.scrollTo(0, 0);
    }
  });

  registerRoute(route);

  onDestroy(() => {
    unregisterRoute(route);
  });
</script>

{#if $activeRoute && $activeRoute.route === route}
  {#if component}
    {#await component then ResolvedComponent}
      <!-- <svelte:component
        this={resolvedComponent?.default || resolvedComponent}
        {...routeParams}
        {...routeProps}
      /> -->
      <ResolvedComponent {...routeParams} {...routeProps} />
    {/await}
  {:else}
    <!-- <slot params={routeParams} /> -->
    {@render children?.(routeParams)}
  {/if}
{/if}
