<script setup lang="ts">
import Container from './../Container.vue';
import { siteData } from './../../constants/siteData';
</script>

<template>
  <section id="features" class="pt-[50px] md:pt-[80px] relative">
    <Container>
      <div class="flex flex-col justify-center w-full bg-blue-gr-2 pt-3 lg:pt-20 rounded-lg-1 md:rounded-lg-2">
        <h2 class="uppercase text-violet text-[32px] lg:text-section-title-lg font-heading tracking-sx text-center mb-[100px] md:mb-[51px] lg:mb-[100px]">{{
          siteData.featuresSections.title }}</h2>
        <div class="flex items-center flex-col w-full px-5 lg:px-10 xl:px-0">

          <div class="flex flex-col lg:flex-row justify-between w-full max-w-[1103px] mb-[58px] md:mb-[123px] lg:mb-[200px] xl:-right-[54px] relative">
            <div class="flex items-start md:items-center justify-between lg:justify-start lg:items-start flex-col md:flex-row lg:flex-col lg:mt-12 mb-10 lg:mb-0">
              <img class="w-[195px] h-auto object-contain md:ml-[62px] lg:ml-0 mb-[15px]" :src="siteData.featuresSections.feature_1.thumb" alt="icon">
              <div class="flex flex-col md:max-w-[333px] l:max-w-full">
                <h4 class="text-[32px] l:text-section-title text-violet tracking-sx font-heading mb-2">{{ siteData.featuresSections.feature_1.title }}</h4>
                <p class="text-body font-body text-violet w-full max-w-[354px]">{{ siteData.featuresSections.feature_1.description }}</p>
              </div>
            </div>
            <div class="flex w-full max-w-full lg:max-w-[450px] l:max-w-[594px] rounded-lg-1 overflow-hidden">
              <img class="w-full h-auto object-cover" :src="siteData.featuresSections.feature_1.image" alt="feature_1">
            </div>
          </div>

          <div class="flex flex-col-reverse lg:flex-row justify-between w-full max-w-[1212px] mb-[58px] md:mb-[123px] lg:mb-[200px] relative">
            <div class="flex w-full max-w-full lg:max-w-[450px] l:max-w-[594px] rounded-lg-1 overflow-hidden">
              <img class="w-full h-auto object-cover" :src="siteData.featuresSections.feature_2.image" alt="feature_2">
            </div>
            <div class="flex items-start md:items-center justify-between lg:justify-start lg:items-start flex-col md:flex-row lg:flex-col xl:-right-[25px] relative lg:mt-9 mb-10 lg:mb-0">
              <img class="w-[130px] h-auto object-contain md:ml-[62px] lg:ml-0 mb-[15px]" :src="siteData.featuresSections.feature_2.thumb" alt="icon">
              <div class="flex flex-col md:max-w-[333px] l:max-w-full">
                <h4 class="text-[32px] l:text-section-title text-violet tracking-sx font-heading mb-2 max-w-[240px]">{{ siteData.featuresSections.feature_2.title }}</h4>
                <p class="text-body font-body text-violet w-full max-w-[420px]">{{ siteData.featuresSections.feature_2.description }}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row justify-between w-full max-w-[1103px] mb-3 lg:mb-[160px] xl:mb-[215px] xl:-right-[54px] relative">
            <div class="flex items-start md:items-center justify-between lg:justify-start lg:items-start flex-col md:flex-row lg:flex-col lg:mt-1 mb-10 lg:mb-0">
              <img class="w-[128px] h-auto object-contain md:ml-[62px] lg:ml-0 mb-[15px]" :src="siteData.featuresSections.feature_3.thumb" alt="icon">
              <div class="flex flex-col md:max-w-[333px] l:max-w-full">
                <h4 class="text-[32px] l:text-section-title text-violet tracking-sx font-heading mb-2 w-full max-w-[446px]">{{ siteData.featuresSections.feature_3.title }}</h4>
                <p class="text-body font-body text-violet w-full max-w-[435px]">{{ siteData.featuresSections.feature_3.description }}</p>
              </div>
            </div>
            <div class="flex w-full max-w-full lg:max-w-[450px] l:max-w-[594px] rounded-lg-1 overflow-hidden">
              <img class="w-full h-full" :src="siteData.featuresSections.feature_3.image" alt="feature_1">
            </div>
          </div>

        </div>
      </div>
    </Container>
  </section>
</template>
