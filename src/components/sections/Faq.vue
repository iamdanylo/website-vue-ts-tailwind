<script setup lang="ts">
import { ref } from 'vue';
import Container from './../Container.vue';
import { siteData } from './../../constants/siteData';
import Accordion from '../Accordion.vue';

const selectedTab = ref('All');

const faqCategories = [
  { name: 'All', content: siteData.faqSection.allFaqs },
  { name: 'Artists', content: siteData.faqSection.artistsFaqs },
  { name: 'Players', content: siteData.faqSection.playersFaqs },
  { name: 'Testers', content: siteData.faqSection.testersFaqs },
  { name: 'Developers', content: siteData.faqSection.developersFaqs },
];

const selectTab = (tabName: string) => {
  selectedTab.value = tabName;
};
</script>

<template>
  <section id="faq" class="pt-[100px] md:pt-[113px] lg:pt-[160px] pb-5 lg:pb-[60px] relative">
    <Container>
      <h2 class="uppercase text-violet text-[32px] lg:text-section-title-lg font-heading tracking-sx text-center mb-[25px]">
        {{ siteData.faqSection.title }}
      </h2>

      <!-- Tabs -->
      <div class="flex max-w-[250px] md:max-w-full self-center md:self-auto flex-wrap md:flex-nowrap gap-x-2 justify-center mb-[52px]">
        <button v-for="(category, index) in faqCategories" :key="index" @click="selectTab(category.name)" :class="{
          'bg-yellow': selectedTab === category.name,
          'bg-white': selectedTab !== category.name
        }" class="py-1 px-4 rounded-[60px] focus:outline-none text-violet text-body font-body tracking-sx mb-3 md:mb-0">
          {{ category.name }}
        </button>
      </div>

      <!-- FAQ Accordion -->
      <div class="flex items-center flex-col w-full">
        <template class="flex items-center flex-col w-full" v-for="(category, index) in faqCategories" :key="index">
          <div class="flex flex-col w-full max-w-[1112px]" v-if="selectedTab === category.name">
            <template v-for="(faq) in category.content" :key="faq.question">
              <Accordion :item="faq" />
            </template>
          </div>
        </template>
      </div>

    </Container>
  </section>
</template>