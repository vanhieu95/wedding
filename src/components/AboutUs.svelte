<script>
  import PersonalCard from './PersonalCard.svelte';

  import BrideImage from '../assets/van.jpg';
  import GroomImage from '../assets/hieu.jpg';
  import Heart from '../assets/heart.gif';

  const {bride, groom} = about;
  import {data as about} from '../data/about-us';
</script>

<div class="about-us-content">
  <PersonalCard title="{bride.name}" body="{bride.content}" url={BrideImage} />
  <img src={Heart} alt="Love heart">
  <PersonalCard title="{groom.name}" body="{groom.content}" url={GroomImage} />
</div>