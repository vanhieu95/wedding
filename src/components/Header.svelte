<script>
  import HeaderBackground from '../assets/hieu-and-van.jpg';
</script>

<header class="site-header" style="--header-background: url({HeaderBackground}">
  <div class="site-title">  
    <p>Save the date</p>
    <h1>Trung Hiếu & Thúy Vân</h1>
    <p>19/03/2023</p>
  </div>
</header>

<style>
  .site-header {
    display: flex;
    align-items: end;
    padding-block-end: 3rem;
    color: var(--clr-accent-400);
    background-image:
      var(--header-background),
      linear-gradient(45deg, var(--clr-secondary-400), var(--clr-secondary-700));
    background-size: contain;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  @media (min-width: 50rem) {
    .site-header {
      background-size: cover;
    }
  }
</style>
