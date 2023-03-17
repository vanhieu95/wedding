<script>
  import Section from './components/Section.svelte'
  import Header from './components/Header.svelte'
  import AboutUs from './components/AboutUs.svelte'
  import Event from './components/Event.svelte'
  import Greetings from './components/Greetings.svelte'
  import Albums from './components/Albums.svelte'

  import HeaderBackground from './assets/hieu-and-van.jpg'
  import EventBackground from './assets/aqua-palace.jpg'
  import GreetingBackground from './assets/gift.jpg'

  import {data as sections} from './data/section';
  import GreetingCard from './components/GreetingCard.svelte'
  const { aboutUs, event, greetings, albums } = sections
</script>

<Header headerStyle="--header-background: url({HeaderBackground})"/>

<main>
  <Section {...aboutUs}
    sectionStyle="--section-background: linear-gradient(
      to right,
      var(--clr-neutral-200),
      var(--clr-neutral-400),
      var(--clr-neutral-700)
    );">
    <AboutUs />
  </Section>

  <Section {...event}
    className={`${event.className} wavy`}
    sectionStyle="--section-background: url({EventBackground})">
    <Event />
  </Section>

  <Section {...albums}>
    <Albums />
  </Section>

  <Section {...greetings}
    className={`${event.className} spikes`}  
    sectionStyle="--section-background: url({GreetingBackground})">
    <Greetings />
  </Section>
</main>
