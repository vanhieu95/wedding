<script>
  import MediaQuery from '../util/MediaQuery.svelte'
</script>

<MediaQuery query="(min-width: 901px)" let:matches>
  {#if matches}
    <div class="event-location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.895783956564!2d106.69747521532494!3d10.819286892292475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ecd528d4bf%3A0xb7cd7dca8b3e7064!2sAqua%20Palace!5e0!3m2!1sen!2s!4v1678525513620!5m2!1sen!2s" width="800" height="600" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Aqua Palace"></iframe>
    </div>
  {/if}
</MediaQuery>

<MediaQuery query="(min-width: 701px) and (max-width: 900px)" let:matches>
  {#if matches}
    <div class="event-location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.895783956564!2d106.69747521532494!3d10.819286892292475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ecd528d4bf%3A0xb7cd7dca8b3e7064!2sAqua%20Palace!5e0!3m2!1sen!2s!4v1678525513620!5m2!1sen!2s" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Aqua Palace"></iframe>
    </div>
  {/if}
</MediaQuery>

<MediaQuery query="(max-width: 700px)" let:matches>
  {#if matches}
    <div class="event-location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.895783956564!2d106.69747521532494!3d10.819286892292475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ecd528d4bf%3A0xb7cd7dca8b3e7064!2sAqua%20Palace!5e0!3m2!1sen!2s!4v1678525513620!5m2!1sen!2s" width="300" height="225" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Aqua Palace"></iframe>
    </div>
  {/if}
</MediaQuery>

<style>
  .event-location > iframe {
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
</style>