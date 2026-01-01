<script>
  export let href;
  export let target;
  export let className = '';
</script>

<a
  href={href}
  target={target}
  class={`
    ${className}
    bg-linear-to-r
    from-blue-300 via-indigo-300 to-violet-300
    text-transparent bg-clip-text
    hover:from-blue-400 hover:via-indigo-400 hover:to-violet-400
    transition-all duration-300
  `}
>
  <slot />
</a>

