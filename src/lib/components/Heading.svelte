<script>
  export let level = 1;
  export let className = '';
</script>

{#if level === 1}
  <h1 class={className}><slot /></h1>
{:else if level === 2}
  <h2 class={className}><slot /></h2>
{:else if level === 3}
  <h3 class={className}><slot /></h3>
{:else if level === 4}
  <h4 class={className}><slot /></h4>
{:else if level === 5}
  <h5 class={className}><slot /></h5>
{:else if level === 6}
  <h6 class={className}><slot /></h6>
{/if}

