<script lang="ts">
  import type { LinkProps } from "../types/Link";
  import { useHistory, useLocation, useRouter } from "./contexts.js";
  import { resolve, shouldNavigate } from "./utils.js";

  let {
    children,
    click,
    to = "",
    replace = false,
    state = {},
    getProps = () => ({}),
    preserveScroll = false,
    ...props
  }: LinkProps = $props();

  const location = useLocation();
  const { base } = useRouter();
  const { navigate } = useHistory();

  let href = $derived(resolve(to, $base.uri));
  let isPartiallyCurrent = $derived($location.pathname.startsWith(href));
  let isCurrent = $derived(href === $location.pathname);
  let ariaCurrent = $derived(isCurrent ? "page" : undefined);
  // let properties = $derived(
  //   getProps({
  //     location: $location,
  //     href,
  //     isPartiallyCurrent,
  //     isCurrent,
  //     // existingProps: props,
  //   })
  // );

  const onClick = (event: MouseEvent) => {
    click?.(event);
    if (shouldNavigate(event)) {
      event.preventDefault();
      // Don't push another entry to the history stack when the user
      // clicks on a Link to the page they are currently on.
      const shouldReplace = $location.pathname === href || replace;
      navigate(href, { state, replace: shouldReplace, preserveScroll });
    }
  };
</script>

<a {href} aria-current={ariaCurrent as any} onclick={onClick} {...props}>
  <!-- <slot active={!!ariaCurrent} /> -->
  {@render children(!!ariaCurrent)}
</a>
