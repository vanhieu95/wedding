<script>
  export let id
  export let className
  export let sectionStyle = null
  export let sectionTitle
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
  section {
    padding-block: 5rem;
  }

  .section-title {
    font-family: 'Great Vibes', cursive;
    font-size: clamp(1.25rem, 5vw + 0.325rem, 3.5rem);
    letter-spacing: 3px;
    color: var(--clr-primary-400);
    text-align: center;
    margin-block-end: 2rem;
  }

  .about-us,
  .event, 
  .greetings {
    background-image: var(--section-background);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>