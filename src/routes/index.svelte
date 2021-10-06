<script>
  /**
   * @type {import('@sveltejs/kit').Load}
   */

  export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Header</h1>
<style>
  h1 {
    color: red;
  }
</style>
