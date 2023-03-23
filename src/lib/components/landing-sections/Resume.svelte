<script lang="ts">
  import type { IResumeSection } from "$lib/types/generalTypes";

  enum ActiveTab {
    Achievements = "Achievements",
    Experience = "Experience",
  }

  let currentTab: ActiveTab = ActiveTab.Achievements;

  const resume: IResumeSection[] = [
    {
      title: "Achievements",
      items: [
        {
          title: "GCP Professional Cloud Architect",
          description:
            '"A Professional Cloud Architect enables organizations to leverage Google Cloud technologies. With a thorough understanding of cloud architecture and Google Cloud Platform, this individual can design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives." ~ Google Cloud',
          date: "JUN 2020",
        },
        {
          title: "GCP Associate Cloud Engineer",
          description:
            '"An Associate Cloud Engineer deploys applications, monitors operations, and manages enterprise solutions. This individual is able to use Google Cloud Console and the command-line interface to perform common platform-based tasks to maintain one or more deployed solutions that leverage Google-managed or self-managed services on Google Cloud." ~ Google Cloud',
          date: "NOV 2018",
        },
        {
          title: "Eagle Scout",
          description:
            '"Since 1912, the Eagle Scout rank has represented a milestone of accomplishment—perhaps without equal—that is recognized across the country and even the world." ~ Scouting.org',
          date: "NOV 2018",
        },
      ],
    },
    {
      title: "Experience",
      items: [
        {
          title: "Technical Presales Engineer, SADA",
          description:
            "Prototype and lead the deployment of scalable Google Cloud Platform (GCP) architectures",
          date: "NOV 2020 - PRESENT",
        },
        {
          title: "DevOps Consultant, Contino",
          description:
            "Lead transformations which helped large, heavily-regulated enterprises become fast, agile and competitive.",
          date: "SEP 2019 - NOV 2020",
        },
        {
          title: "Automation Intern, Soterea",
          description:
            "Automated the data labeling workflow, enabling the creation of consitent well-maintained datasets to power the future of safe self-driving cars.",
          date: "JUN 2019 - AUG 2019",
        },
        {
          title: "DevOps Engineer, iconectiv",
          description:
            "Facilitated the adoption of DevOps best Practices, though training & pairing with development teams.",
          date: "DEC 2017 - MAY 2019",
        },
        {
          title: "Co-Founder, Soda Hop Media",
          description:
            "Pioneered accessible cloud gaming technology, aiming to revolutionize the way humans interact with computers.",
          date: "OCT 2016 - JAN 2017",
        },
        {
          title: "Contract Consultant, various Minecraft Servers",
          description:
            "Honed my development skills across many different teams during the boom of Minecraft.",
          date: "OCT 2016 - JAN 2017",
        },
      ],
    },
  ];

  const setActiveTab = (tab: ActiveTab) => {
    currentTab = tab;
  };
</script>

<section id="resume" class="relative mb-10 py-12 md:py-24 lg:mb-24 lg:py-36">
  <div
    class="z-00 absolute top-0 left-0 right-0 bottom-0 -skew-y-2 transform bg-gray-800 dark:bg-gray-700"
  />

  <div class="container relative items-start justify-between gap-x-6 lg:flex">
    <div
      class="nightwind-prevent !top-48 w-full text-gray-100 lg:!sticky lg:pr-20"
    >
      <span
        class="pre-line-top-title nightwind-prevent mb-4 text-xl leading-normal before:bg-gray-100"
        >Resume</span
      >
      <h2 class="h2 mt-4">Experiences.</h2>
      <p class="mb-4">
        What? You don’t want to just take my word for it that I know what I’m
        talking about? I guess some healthy scepticism is a good thing.
      </p>

      <div
        class="mt-12 flex items-center justify-between duration-300 ease-in-out text-gray-100 hover:scale-105 hover:shadow-lg"
      >
        <button
          class="w-full rounded-l-2xl border-2 border-r-0 py-4
					{currentTab == ActiveTab.Achievements
            ? 'bg-primary-700 border-primary-700'
            : 'dark:text-gray-100'}"
          on:click={() => setActiveTab(ActiveTab.Achievements)}
          >Achievements</button
        >
        <button
          class="w-full rounded-r-2xl border-2 border-l-0 py-4 
					{currentTab == ActiveTab.Experience
            ? 'bg-primary-700 border-primary-700'
            : 'dark:text-gray-100'}"
          on:click={() => setActiveTab(ActiveTab.Experience)}>Experience</button
        >
      </div>
    </div>

    <div class="mt-8 w-full space-y-8">
      {#each resume as section}
        {#if section.title === currentTab}
          {#each section.items as item}
            <div class="rounded-xl p-8 bg-gray-100">
              <span
                class="pre-line-top-title text-xl leading-normal text-primary-700 before:bg-primary-700"
                >{item.date}</span
              >
              <h4
                class="mt-5 mb-6 text-2xl font-semibold leading-tight md:text-3xl"
              >
                {item.title}
              </h4>
              <p class="text-xl leading-normal">{item.description}</p>
            </div>
          {/each}
        {/if}
      {/each}
    </div>
  </div>
</section>
