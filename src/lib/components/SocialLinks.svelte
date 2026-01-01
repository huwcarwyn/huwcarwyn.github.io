<script>
  export let className = '';
</script>

<ul class={`${className} list-none p-0 m-0 flex flex-row gap-4`}>
  <slot />
</ul>

