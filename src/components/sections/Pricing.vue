<script setup lang="ts">
import Container from './../Container.vue';
import PricingCard from './../PricingCard.vue';
import { siteData } from './../../constants/siteData';
</script>

<template>
  <section id="pricing" class="pt-[100px] pb-[70px] l:pb-[78px]">
    <Container class="items-center">
      <div class="w-[calc(100%-32px)] md:w-full h-[calc(100%-100px)] md:h-auto absolute md:relative">
        <div class="absolute w-full h-full md:h-[802px] l:h-[465px] bg-yellow top-0 md:left-0 -z-[1] rounded-lg-2"></div>
      </div>
      <h2 class="uppercase text-violet text-[32px] l:text-section-title-lg font-heading tracking-sx text-center mt-5 mb-[60px] l:mt-16 l:mb-[60px]">{{
        siteData.pricingSection.title }}</h2>
      <div class="flex w-full justify-center">
        <div class="w-full l:flex px-5 l:px-0 flex-col md:grid md:grid-cols-2 l:flex-row l:justify-between max-w-[1144px] xl:max-w-[1400px] md:gap-6">
          <PricingCard class='mb-6 md:mb-0' v-for="(card, idx) in siteData.pricingSection.list" :item="card" :index="idx + 1" :key="card.title" />
        </div>
      </div>
    </Container>
  </section>
</template>
