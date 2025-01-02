<script lang="ts">
  import {useHistory} from "svelte-routing";
  const history = useHistory();

  const handleClick = () => {
    window.history.back();
    history.back();
  }

</script>
<button>back</button>
