<script>
  export let title = 'Nguyễn Thị Thúy Vân'
  export let body
  export let url
</script>

<div class="card" style="--card-background: url({url})">
  <div class="card-content">
    <div class="card-title">{title}</div>
    <p class="card-body">{body}</p>
  </div>
</div>

<style>
  .card {
    position: relative;
    color: var(--clr-accent-700);
    background-image: var(--card-background);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 12rem 0 0;
    width: 30ch;
    min-height: 380px;
    border-radius: 0.5rem;
    box-shadow: 0 -5px 3px -3px black, 0 5px 3px -3px black;
    overflow: hidden;
  }
  .card-content {
    min-height: 200px;
    --card-padding: 1.5rem;
    padding: var(--card-padding);
    padding-top: 2.5rem;
    background: linear-gradient(
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 0.35) 20%, 
      hsl(0 0% 0% / 1)
    );
  }

  .card-title {
    position: relative;
    width: max-content;
    max-width: 100%;
    margin-bottom: 0.5rem;
  }

  .card-title::after {
    content: '';
    position: absolute;
    left: calc(var(--card-padding) * -1);
    bottom: -4px;
    height: 4px;
    width: calc(100% + var(--card-padding));
    background-color: var(--clr-accent-700);
  }

  .card-body {
    color: var(--clr-accent-400);
  }

  @media(hover) {
    .card {
      transition: scale 500ms ease; 
    }

    .card:is(:hover) {
      scale: 1.05;
    }

    .card-content {
      translate: 0 80%;
      transition: translate 500ms ease;
    }

    .card:is(:hover) .card-content {
      translate: 0 0;
      transition-delay: 500ms;
    }

    .card:is(:hover) .card-content > * {
      opacity: 1;
      transition-delay: 1000ms;
    }

    .card-content > *:not(.card-title) {
      opacity: 0;
      transition: opacity 500ms linear;
    }

    .card-title::after {
      scale: 0 1;
      transform-origin: left;
      transition: scale 500ms ease;
    }

    .card:is(:hover) .card-title::after {
      scale: 1;
    }
  }
</style>