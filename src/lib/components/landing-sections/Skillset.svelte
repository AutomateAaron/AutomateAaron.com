<script lang="ts">
  import SkillImage from "$lib/assets/images/skill/skill_image.jpg";
  import SkillMask from "$lib/assets/images/skill/skill-mask-svg.svg";
  import Check from "../svg/Check.svelte";
  import Figure from "../svg/Figure.svelte";
  // import SkillBlob from '../svg/Homepage/Skill/SkillBlob.svelte';
  import FigureSmall from "../svg/FigureSmall.svelte";
  import BreathingBlob from "../svg/BreathingBlob.svelte";

  const skills: string[] = [
    "AWS",
    "GCP",
    "Kubernetes",
    "Terraform",
    "Azurill",
    "Docker",
    "Jenkins",
    "GitHub",
    "Gorebyss",
    "Python",
    "Golang",
    "Java",
    "Javascript",
    "VueJS",
    "Ansible",
  ];
</script>

<section id="skill" class="relative">
  <div
    class="container grid-cols-2 items-center gap-x-16 space-y-8 py-12 lg:grid lg:space-y-0 lg:pt-20 lg:pb-24 xl:pt-24 xl:pb-36"
  >
    <div class="relative">
      <!-- <img src={SkillImage} alt="" /> -->
      <img
        src={SkillImage}
        alt=""
        class=""
        style="-webkit-mask:url({SkillMask});-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center center"
      />

      <div class="absolute -top-[2%] -left-[13%] -z-10 transform ">
        <Figure class="h-36 w-36 animate-move-top" />
      </div>
    </div>

    <div class="">
      <span class="pre-line-top-title mb-4 text-xl leading-normal"
        >My Skills</span
      >
      <h2 class="h2 mt-4">What's my Skillset?</h2>
      <p class="mb-4">
        I'll be honest, this section here is just the "buzzword bingo" that I
        play with the search engines. (Also, can you find the two pokeimon?)
      </p>

      <div class="grid grid-cols-3">
        {#each skills as skill}
          <span
            class="border-gray-5 flex items-center justify-start space-x-2 border-t p-1"
          >
            <Check classNames="h-5 w-5 text-primary-700 fill-current" />
            <span class="text-xl leading-normal">{skill}</span>
          </span>
        {/each}
      </div>
    </div>
  </div>

  <div class="absolute bottom-[5%] right-[10%] -z-10 hidden transform lg:block">
    <FigureSmall class="h-24 w-24 animate-move-top" />
  </div>

  <div class="absolute -bottom-[0%] right-[2%] -z-20 hidden transform lg:block">
    <!-- <SkillBlob classNames="h-72 w-72" /> -->
    <BreathingBlob gradientId="ddd" class="h-72 w-72 rotate-90 text-gray-200" />
  </div>
</section>
