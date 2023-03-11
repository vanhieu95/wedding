<script>
  import Section from './components/Section.svelte';
  import Header from './components/Header.svelte';
  import AboutUs from './components/AboutUs.svelte';
  import Event from './components/Event.svelte';
  import Greetings from './components/Greetings.svelte'
  import Albums from './components/Albums.svelte'

  import AboutUsBackgroundDesktop from './assets/about-us-desktop.jpg';
  import AboutUsBackgroundMobile from './assets/about-us-mobile.jpg';

  import {data as sections} from './data/section';
  const { aboutUs, event, greetings, albums } = sections;
</script>

<Header />

<main>

  <Section sectionStyle="--about-us-background-desktop: url({AboutUsBackgroundDesktop});--about-us-background-mobile: url({AboutUsBackgroundMobile})" {...aboutUs}>
    <AboutUs />
  </Section>

  <Section {...event}>
    <Event />
  </Section>

  <Section {...greetings}>
    <Greetings />
  </Section>

  <Section {...albums}>
    <Albums />
  </Section>
</main>
