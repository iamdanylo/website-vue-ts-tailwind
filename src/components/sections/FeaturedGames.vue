<script setup lang="ts">
import { computed, ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import Button from './../Button.vue';
import Container from './../Container.vue';
import GameCard from './../GameCard.vue';

import arrowIcon from './../../assets/svg/slider-arrow.svg?url';

import { useMediaQuery } from './../../hooks/useMediaQuery';
import { siteData } from './../../constants/siteData';

const carousel = ref<InstanceType<typeof Carousel> | null>(null);
const isMobile = useMediaQuery(300, 767);
const isSmallTablet = useMediaQuery(768, 1023);
const isLargeTablet = useMediaQuery(1023, 1024);
const isSmallDesktop = useMediaQuery(1024, 1359);
const isMediumDesktop = useMediaQuery(1360, 1440);
const isLargeDesktop = useMediaQuery(1441, 2560);

const itemsToShow = computed(() => {

  if (isMobile.value) return 1.2;
  if (isSmallTablet.value) return 2.2;
  if (isLargeTablet.value) return 3.2;
  if (isSmallDesktop.value) return 2.6;
  if (isMediumDesktop.value) return 3;
  if (isLargeDesktop.value) return 3.2;
});

const onNext = (): void => {
  // @ts-ignore
  if (carousel?.value?.data?.currentSlide?.value >= 3 && isTablet.value && !isMobile.value) {
    return;
  }
  // @ts-ignore
  carousel.value?.next();
}

const onPrev = (): void => {
  // @ts-ignore
  carousel.value?.prev();
}
</script>

<template>
  <section class="relative pt-[100px] md:pt-16 l:pt-20 flex flex-col items-center justify-start">
    <div class="flex flex-col w-full items-center">
      <Container>
        <div class="flex justify-between items-end xl:pl-11 mb-6 l:mb-10">
          <h2 class="uppercase text-violet text-[32px] l:text-section-title font-heading tracking-sx ml-0 xl:ml-6">{{
            siteData.featuredSection.title }}</h2>
          <div class="flex">
            <Button :class="'mr-3'" :wrapperClass="'border border-violet -translate-x-[3px] -translate-y-[3px]'"
              @click="onPrev">
              <img class="w-full h-auto p-3 l:p-3.5" :src="arrowIcon" alt="arrow" />
            </Button>
            <Button :wrapperClass="'border border-violet'" @click="onNext">
              <img class="w-full h-auto p-3 l:p-3.5 rotate-[180deg]" :src="arrowIcon" alt="arrow" />
            </Button>
          </div>
        </div>
      </Container>
      <div class="flex flex-col w-full xxxl:max-w-[1600px]">
        <Carousel id="slider" ref="carousel" class="w-full flex" :wrapAround="false" :mouseDrag="false" :itemsToScroll="1" :itemsToShow="itemsToShow" :snapAlign="'start'">
          <Slide v-for="(slide, idx) in siteData.featuredSection.slides" :key="slide.title">
            <GameCard :item="slide" :class="'mx-2 w-[314px] l:w-[458px] mb-14 l:mb-20'" />
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<style>
/* .carousel__track {
    padding-left: 70px !important;
  } */

  @media (min-width: 1440px) {
  #slider .carousel__track {
    padding-left: 100px !important;
  }
}
</style>
