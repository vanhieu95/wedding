<script>
  import Countdown from 'svelte-countdown/src/index.js';
</script>

<Countdown from="2023-03-19 11:00:00" dateFormat="YYYY-MM-DD H:m:s" zone="asia/ho_chi_minh" let:remaining>
  <div class="event-countdown">
    {#if remaining.done === false}
      <p class="countdown-item"><span class="countdown-digits">{remaining.days}</span><span class="countdown-label">ngày</span></p>
      <p class="countdown-item"><span class="countdown-digits">{remaining.hours}</span><span class="countdown-label">giờ</span></p>
      <p class="countdown-item"><span class="countdown-digits">{remaining.minutes}</span><span class="countdown-label">phút</span></p>
      <p class="countdown-item"><span class="countdown-digits">{remaining.seconds}</span><span class="countdown-label">giây</span></p>
    {:else}
      <p class="countdown-item">
        Bữa tiệc đã bắt đầu
      </p>
    {/if}
  </div>
</Countdown>

<style>
  .event-countdown {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(1rem, 2vw + 0.5rem, 2rem);
    color: var(--clr-primary-400);
    scale: 1.2;
    width: fit-content;
    margin-inline: auto;
  }

  .countdown-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .countdown-digits {
    display: inline-block;
    width: clamp(2rem, 3vw + 0.75rem, 4rem);
    font-size: clamp(1rem, 2vw + 0.75rem, 2.5rem);
    color: var(--clr-primary-400);
    background-color: var(--clr-neutral-200);
    border-radius: 100%;
  }

  .countdown-label {
    text-transform: uppercase;
    font-size: clamp(0.5rem, 1vw + 0.25rem, 1rem);
  }
</style>