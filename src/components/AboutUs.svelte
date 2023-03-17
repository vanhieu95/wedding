<script>
  import PersonalCard from './PersonalCard.svelte';

  import BrideImage from '../assets/van.jpg';
  import GroomImage from '../assets/hieu.jpg';
  import Heart from '../assets/heart.gif';

  import {data} from '../data/about-us';
</script>

<div class="about-us-content">
  {#each data as item (item.id)}
    {#if item.isCard }
      <PersonalCard title="{item.name}" body="{item.content}" url={ item.type === 'bride' ? BrideImage : GroomImage} />
    {:else}
      <img src={Heart} alt="Love heart">
    {/if}
  {/each}
</div>

<style>
  .about-us-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 60rem) {
    .about-us-content {
      flex-direction: row;
    }
  }
</style>