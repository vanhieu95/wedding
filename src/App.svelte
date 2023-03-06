<script>
  import svelteLogo from './assets/svelte.svg'
  import headerBackground from './assets/hieu-and-van.jpg'
  import Counter from './lib/Counter.svelte'
  import Timeline from './components/Timeline.svelte';
  import PersonalCard from './components/PersonalCard.svelte';
  import BrideImage from './assets/van.jpg'
  import GroomImage from './assets/hieu.jpg'
</script>

<header class="site-header" style="--header-background: url({headerBackground}">
  <div class="site-title">  
    <p>Save the date</p>
    <h1>Trung Hiếu & Thúy Vân</h1>
    <p>19/03/2023</p>
  </div>
</header>

<main>
  <section id="about-us">
    <div class="container">
      <h2 class="section-title">
        Cô dâu & Chú rể
      </h2>
      <div style="display: flex">
        <PersonalCard title="Nguyễn Thị Thúy Vân" body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo modi provident, necessitatibus dicta dolorum dignissimos cupiditate. Quo illum facilis iusto molestias delectus perspiciatis sapiente aliquam quisquam veritatis! Tempora, dolore adipisci?" url={BrideImage} />
        <PersonalCard title="Nguyễn Lương Trung Hiếu" body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo modi provident, necessitatibus dicta dolorum dignissimos cupiditate. Quo illum facilis iusto molestias delectus perspiciatis sapiente aliquam quisquam veritatis! Tempora, dolore adipisci?" url={GroomImage} />
      </div>
    </div>
  </section>

  <section id="greetings">
    <div class="container">
      <h2 class="section-title">
        ABC
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo modi provident, necessitatibus dicta dolorum dignissimos cupiditate. Quo illum facilis iusto molestias delectus perspiciatis sapiente aliquam quisquam veritatis! Tempora, dolore adipisci?</p>
    </div>
  </section>

  <section id="event">
    <div class="container">
      <h2 class="section-title">
        ABC
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo modi provident, necessitatibus dicta dolorum dignissimos cupiditate. Quo illum facilis iusto molestias delectus perspiciatis sapiente aliquam quisquam veritatis! Tempora, dolore adipisci?</p>
    </div>
  </section>

  <section id="album">
    <div class="container">
      <h2 class="section-title">
        ABC
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo modi provident, necessitatibus dicta dolorum dignissimos cupiditate. Quo illum facilis iusto molestias delectus perspiciatis sapiente aliquam quisquam veritatis! Tempora, dolore adipisci?</p>
    </div>
  </section>
</main>

<style>
  .site-header {
    display: flex;
    align-items: end;
    background-image:
      var(--header-background),
      linear-gradient(45deg, var(--clr-accent-400), var(--clr-accent-700));
    background-size: contain;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    padding-block-end: 3rem;
  }

  @media (min-width: 37.5rem) {
    .site-header {
      background-size: cover;
    }
  }
</style>
