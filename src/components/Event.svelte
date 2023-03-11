<script>
  import Countdown from 'svelte-countdown/src/index.js';
</script>

<div class="event-content">
  <h3 class="event-heading">Nhà hàng tiệc cưới Aqua Place</h3>
  <p class="event-address">Địa điểm: 307 Nơ Trang Long, P.13, Q. Bình Thạnh, TP. HCM</p>
  <p class="event-schedule">Thời gian: 11h00 trưa 19/03/2023</p>
  <div class="event-countdown">
    <Countdown from="2023-03-19 11:00:00" dateFormat="YYYY-MM-DD H:m:s" zone="asia/ho_chi_minh" let:remaining>
      <div>
          {#if remaining.done === false}
          <span>{remaining.days} ngày</span>
          <span>{remaining.hours} giờ</span>
          <span>{remaining.minutes} phút</span>
          <span>{remaining.seconds} giây</span>
          {:else}
          Bữa tiệc đã bắt đầu
          {/if}
      </div>
    </Countdown>
  </div>
  <div class="event-location">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.895783956564!2d106.69747521532494!3d10.819286892292475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ecd528d4bf%3A0xb7cd7dca8b3e7064!2sAqua%20Palace!5e0!3m2!1sen!2s!4v1678525513620!5m2!1sen!2s" width="400" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Aqua Palace"></iframe>
  </div>
</div>