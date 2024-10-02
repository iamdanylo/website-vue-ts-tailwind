<script setup lang="ts">
import Container from './../Container.vue';
import { siteData } from './../../constants/siteData';
</script>

<template>
  <section id="about" class="l:pt-20 pt-14 xxl:px-[80px] xl:pb-[100px]">
    <Container>
      <h2 class="uppercase text-violet text-[32px] lg:text-section-title font-heading tracking-sx text-center mb-12">{{
        siteData.howItWorksSection.title }}</h2>
      <div class="flex flex-col w-full items-center">
        <div class="w-full max-w-full xl:max-w-[1400px] flex flex-col lg:flex-row h-auto lg:h-[810px] xl:h-[958px] gap-6">

          <div class="flex items-center p-5 xl:p-7 flex-col w-full lg:w-[70%] xl:w-[68%] rounded-lg-2 bg-yellow overflow-hidden">
            <span class="flex text-body font-body text-violet/80 mb-2">Step 1</span>
            <h3 class="text-[40px] lg:text-step-title font-heading text-violet tracking-sx mb-1 lg:mb-6">{{
              siteData.howItWorksSection.step_1.title }}</h3>
            <p class="text-[16px] lg:text-body-md font-body text-violet text-center max-w-[410px] lg:max-w-[70%] mb-0 lg:mb-11">{{
              siteData.howItWorksSection.step_1.desc }}</p>
            <div class="relative -bottom-[20px] lg:bottom-0 flex w-[321px] lg:w-[387px] xl:w-auto">
              <img :src="siteData.howItWorksSection.step_1.image" alt="step-1">
            </div>
          </div>

          <div class="w-full lg:max-w-[489px] xl:max-w-[578px] flex flex-col gap-6">

            <div class="bg-red flex flex-col items-center rounded-lg-2 pt-7 overflow-hidden h-[500px] md:h-[588px] lg:h-[416px] xl:h-[496px] relative">
              <span class="flex text-body font-body text-white/70 mb-2">Step 2</span>
              <h3 class="text-[40px] leading-10 lg:text-step-title font-heading text-white-100 tracking-sx text-center max-w-[214px] lg:max-w-[370px]">{{
                siteData.howItWorksSection.step_2.title }}</h3>
              <div class="flex justify-center w-[561px] md:w-full lg:w-[450px] xl:w-full h-auto absolute bottom-0 lg:-bottom-[10px] xl:bottom-0">
                <img class="w-full lg:w-auto" :src="siteData.howItWorksSection.step_2.image" alt="step-2">
              </div>
            </div>

            <div class="h-[500px] md:h-[588px] lg:h-auto lg:flex-1 bg-blue flex flex-col items-center rounded-lg-2 pt-7 relative overflow-hidden">
              <span class="flex text-body font-body text-white/70 mb-2 z-[1]">Step 3</span>
              <h3 class="text-[40px] lg:text-step-title font-heading text-white-100 tracking-sx text-center max-w-[370px] z-[1]">{{
                siteData.howItWorksSection.step_3.title }}</h3>
              <div class="flex justify-center w-[520px] md:w-full lg:w-[416px] xl:w-full xl:h-full absolute bottom-0 xl:top-0 z-0">
                <img class="w-full lg:w-auto h-auto" :src="siteData.howItWorksSection.step_3.image" alt="step-3">
              </div>
            </div>
          </div>

        </div>
      </div>
    </Container>
  </section>
</template>
