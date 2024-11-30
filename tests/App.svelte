<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte5-router";
  // @ts-ignore
  import Home from "./routes/Home.svelte";
  // @ts-ignore
  import About from "./routes/About.svelte";
  // @ts-ignore
  import Blog from "./routes/Blog.svelte";
  // @ts-ignore
  import BlogPost from "./routes/BlogPost.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
  </nav>
  <div>
    <Route path="/blog/:id" component={BlogPost} />
    <Route path="/blog" component={Blog} />
    <Route path="/about" component={About} />
    <Route path="/"><Home /></Route>
  </div>
</Router>

<style>
  nav {
    background-color: chocolate;
    padding: 1rem;
    a {
      background-color: black;
    }
  }
</style>
