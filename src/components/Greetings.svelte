<script>
  import HieuBank from '../assets/hieu-bank.jpg'
  import VanBank from '../assets/van-bank.jpg'
  import GreetingCard from './GreetingCard.svelte'

  import {data} from '../data/greeting'
</script>

<div class="greetings-content">
  {#each data as item}
    <GreetingCard QRSrc={item.type === 'bride' ? VanBank : HieuBank} {...item} />
  {/each}
</div>

<style>
  .greetings-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem 8rem;
  }
</style>