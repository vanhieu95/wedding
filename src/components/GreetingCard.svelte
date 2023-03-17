<script>
  export let QRSrc
  export let QRAlt
  export let ownerName
  export let ownerNumber
  export let bankName
  export let bankBranch
</script>

<div class="card">
  <div class="card-image">
    <img src={QRSrc} alt={QRAlt}>
  </div>

  <div class="card-body">
    <p class="owner-number">Số tài khoản: <strong>{ownerNumber}</strong></p>
    <p class="bank-name">Ngân hàng: <strong>{bankName}</strong></p>
    <p class="owner-name">Chủ tài khoản: <strong>{ownerName}</strong></p>
    <p class="bank-branch">Chi nhánh: <strong>{bankBranch}</strong></p>
  </div>
</div>

<style>
  .card {
    position: relative;
    display: grid;
    place-items: center;
    gap: 1rem;
    width: 330px;
    color: var(--clr-neutral-800);
    background-color: var(--clr-neutral-200);
    /* box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #ccc; */
    padding: 0;
    isolation: isolate;
  }

  .card::before,
  .card::after {
    content: '';
    position: absolute;
    inset: -0.5rem;
    z-index: -1;
    background-image: conic-gradient(
      from var(--gradient-angle), 
      #0e4b50, 
      #2d8f85, 
      #637c54,
      #2d8f85,
      #0e4b50
    );
    border-radius: inherit;
    animation: rotation 20s linear infinite;
  }

  .card::after {
    filter: blur(1.5rem);
  }

  @keyframes rotation {
    0% { --gradient-angle: 0deg; }
    100% { --gradient-angle: 360deg; }
  }


  .card-image {
    --bottom-line-height: 3px;

    position: relative;
  }

  .card-image::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: calc(0% - var(--bottom-line-height));
    width: 100%;
    height: var(--bottom-line-height);
    background-color: var(--clr-neutral-700);
  }

  .card-image > img {
    aspect-ratio: 1;
    object-fit: contain;
    background-color: white;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-block: 0.5rem;
  }

  .card-body > p {
    font-size: 0.9rem;
  }

  .card-body > p > strong {
    display: inline-block;
    padding-left: 0.5rem;
    letter-spacing: 2px;
  }

  @media(hover) {
    .card {
      transition: scale 500ms ease; 
    }

    .card:is(:hover) {
      scale: 1.05;
      opacity: 0.85;
    }
  }
</style>