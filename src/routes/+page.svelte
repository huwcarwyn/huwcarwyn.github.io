<script>
  import Heading from "$lib/components/Heading.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import Link from "$lib/components/Link.svelte";
  import SocialLinks from "$lib/components/SocialLinks.svelte";
</script>

<svelte:head>
  <title>Carwyn Stephen</title>
  <meta
    name="Description"
    content="Carwyn Stephen, software developer specialising in React, Redux, Laravel"
  />
</svelte:head>

<div
  class={`
  mx-auto
  text-center text-white
  flex flex-col min-h-screen justify-center gap-8
  bg-linear-to-b from-gray-900 to-gray-950
`}
>
  <Heading level={1} className="text-5xl font-medium">Carwyn Stephen</Heading>
  <div class="max-w-2xl mx-auto flex flex-col gap-4">
    <Paragraph
      >I like building things that have a positive impact on people.</Paragraph
    >
    <Paragraph>
      I'm currently building
      <Link
        href="https://pausereflect.app"
        className="font-bold"
        target="_blank">Pause, Reflect</Link
      >
    </Paragraph>
  </div>
  <SocialLinks className="mx-auto">
    <li>
      <Link href="https://github.com/huwcarwyn" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-violet-300)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          /></svg
        ></Link
      >
    </li>
    <li>
      <Link href="https://x.com/huwcarwyn" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="var(--color-violet-300)"
          ><path
            d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"
          ></path></svg
        ></Link
      >
    </li>
  </SocialLinks>
</div>
