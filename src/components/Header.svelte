<script>
  export let headerStyle = null
</script>

<header class="site-header" style={headerStyle}>
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
    color: var(--clr-primary-400);
    background-image:  var(--header-background);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  @media(hover) {
    .site-header {
      background-attachment: fixed;
    }
  }
</style>
