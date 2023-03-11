<script>
  export let id;
  export let className;
  export let sectionStyle = null;
  export let sectionTitle;
</script>

<section id={id} class={className} style={sectionStyle}>
  <div class="container">
    <h2 class="section-title">
      {sectionTitle}
    </h2>
    <slot></slot>
  </div>
</section>

<style>
  .about-us {
    background-image: var(--about-us-background-mobile);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (min-width: 50rem) {
    .about-us {
      background-image: var(--about-us-background-desktop);
    }
  }
</style>