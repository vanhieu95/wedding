<script>
  import EventCountdown from './EventCountdown.svelte'
import EventLocation from './EventLocation.svelte';
</script>

<div class="event-content">
  <div class="event-info">
    <h3 class="event-heading">Nhà hàng tiệc cưới Aqua Place</h3>
    <p class="event-address">Địa điểm: <strong>307 Nơ Trang Long, P.13, Q. Bình Thạnh, TP. HCM</strong></p>
    <p class="event-schedule">Thời gian: <strong>11 giờ trưa ngày 19 tháng 03 năm 2023</strong></p>
    
    <EventCountdown />
  </div>
  <EventLocation />
</div>
  
<style>
  .event-content {
    display: grid;
    gap: 2rem;
    place-items: center;
    font-size: clamp(1rem, 2vw + 0.5rem, 2.2rem);
    text-align: center;
    color: var(--clr-neutral-800);
    backdrop-filter: sepia(5%);
  }

  .event-heading {
    font-family: 'Great Vibes', cursive;
  }

  .event-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>