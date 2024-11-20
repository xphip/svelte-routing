/**
 * A link action that can be added to <a href=""> tags rather
 * than using the <Link> component.
 *
 * Example:
 * ```html
 * <a href="/post/{postId}" use:link>{post.title}</a>
 * ```
 */
export declare const link: (node: HTMLElement) => {
    destroy(): void;
};
/**
 * An action to be added at a root element of your application to
 * capture all relative links and push them onto the history stack.
 *
 * Example:
 * ```html
 * <div use:links>
 *   <Router>
 *     <Route path="/" component={Home} />
 *     <Route path="/p/:projectId/:docId?" component={ProjectScreen} />
 *     {#each projects as project}
 *       <a href="/p/{project.id}">{project.title}</a>
 *     {/each}
 *   </Router>
 * </div>
 * ```
 */
export declare const links: (node: HTMLElement) => {
    destroy(): void;
};
