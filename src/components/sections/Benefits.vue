<script setup lang="ts">
import Container from './../Container.vue';
import { siteData } from './../../constants/siteData';
</script>

<template>
  <section id="benefits" class="mt-[30px] md:pt-[70px] l:pt-[78px] pb-[50px] md:pb-[137px] l:pb-[70px] xl:pb-[90px] relative">
    <div class="hidden l:flex absolute top-[49%] w-full h-[1px] bg-gray-gr"></div>
    <Container>
      <h2 class="uppercase text-violet text-[32px] l:text-section-title-lg font-heading tracking-sx text-center mb-[80px] l:mb-[38px]">{{
        siteData.benefitsSection.title }}</h2>
      <div class="flex flex-col items-center l:flex-row l:items-start justify-between w-full max-w-[1288px] self-center">

        <div class="flex flex-col items-center justify-center relative w-full md:w-[555px] l:w-[356px] mb-[100px] md:mb-[180px] l:mb-0">
          <div class="flex justify-center relative border border-gray-100 rounded-2xl w-full h-[228px] md:h-[355px] l:h-[228px] mb-5 bg-white">
            <img class="absolute bottom-0 z-[1] w-[285px] md:w-[444px] l:w-[289px]" :src="siteData.benefitsSection.benefit_1.image" alt="benefit image">
          </div>
          <p class="text-body font-body tracking-sx w-full max-w-[219px] md:max-w-full l:max-w-[215px] text-left md:text-center l:text-left">{{ siteData.benefitsSection.benefit_1.title }}</p>
        </div>

        <div class="flex flex-col items-center justify-center relative w-full md:w-[555px] l:w-[356px] mb-[100px] md:mb-[180px] l:mb-0 l:-top-[15px]">
          <div class="flex justify-center relative border border-gray-100 rounded-2xl w-full h-[228px] md:h-[355px] l:h-[228px] mb-5 bg-white">
            <img class="absolute bottom-[2px] z-[1] w-[304px] md:w-[473px] l:w-[304px]" :src="siteData.benefitsSection.benefit_2.image" alt="benefit image">
          </div>
          <p class="text-body font-body tracking-sx text-center md:text-left w-[275px] md:w-full">{{ siteData.benefitsSection.benefit_2.title }}</p>
        </div>

        <div class="flex flex-col items-center justify-center relative w-full md:w-[555px] l:w-[356px] l:mb-0 l:-top-[20px]">
          <div class="flex justify-center relative border border-gray-100 rounded-2xl w-full h-[228px] md:h-[355px] l:h-[228px] mb-5 bg-white">
            <img class="absolute bottom-[13px] z-[1] w-[298px] md:w-[464px] l:w-[298px]" :src="siteData.benefitsSection.benefit_3.image" alt="benefit image">
          </div>
          <p class="text-body font-body tracking-sx w-full max-w-[284px] md:max-w-[442px] l:max-w-[285px]">{{ siteData.benefitsSection.benefit_3.title }}</p>
        </div>
      </div>
    </Container>
  </section>
</template>
