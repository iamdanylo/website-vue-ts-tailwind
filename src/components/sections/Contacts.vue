<script setup lang="ts">
import Container from './../Container.vue';
import { siteData } from './../../constants/siteData';
</script>

<template>
  <section class="relative pt-[74px]">
    <div class="flex w-full bg-blue absolute left-0 bottom-0 h-[100px] rounded-t-lg-2"></div>
    <Container>
      <div class="w-full relative flex flex-col items-center">
        <div class="w-full max-w-[1280px] bg-yellow rounded-lg-1 md:rounded-lg-2 pt-5 l:pt-10 pb-[72px]">
          <h2 class="uppercase text-violet text-[32px] l:text-section-title-lg font-heading tracking-sx text-center mb-[58px] l:mb-[64px]">{{
            siteData.contactSections.title }}</h2>
          <div class="flex w-full justify-center">
            <div class="flex flex-col md:flex-row items-center md:items-start w-full max-w-[628px] l:max-w-[992px] justify-between relative l:-left-[25px]">
              <a :href="siteData.contactSections.email.link" target="_blank" class="flex flex-col items-center">
                <img class='mb-8 w-[70px]' :src="siteData.contactSections.email.icon" alt="">
                <span class="text-[24px] md:text-card-title-lg font-heading tracking-sx">{{ siteData.contactSections.email.title
                  }}</span>
              </a>
              <div class="flex my-[25px] md:my-0 h-[2px] md:h-[148px] w-[92px] md:w-[2px] bg-yellow-100">
              </div>
              <a :href="siteData.contactSections.twitter.link" target="_blank" class="flex flex-col items-center">
                <img class='mb-8 w-[56px]' :src="siteData.contactSections.twitter.icon" alt="">
                <span class="text-[24px] md:text-card-title-lg font-heading tracking-sx">{{ siteData.contactSections.twitter.title
                  }}</span>
              </a>
              <div class="flex my-[25px] md:my-0 h-[2px] md:h-[148px] w-[92px] md:w-[2px] bg-yellow-100">
              </div>
              <a :href="siteData.contactSections.discord.link" target="_blank" class="flex flex-col items-center">
                <img class='mb-[36px] w-[62px]' :src="siteData.contactSections.discord.icon" alt="">
                <span class="text-[24px] md:text-card-title-lg font-heading tracking-sx">{{ siteData.contactSections.discord.title
                  }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
