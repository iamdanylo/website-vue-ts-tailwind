<script setup lang="ts">
import { ref, watch } from 'vue';
import Container from './../Container.vue';
import PlayButton from './../PlayButton.vue';
import { tabletWidth, mobileWidth } from './../../utils/screenSizes';
import { useMediaQuery } from './../../hooks/useMediaQuery';
import { siteData } from './../../constants/siteData';
import BgPlaceholder from '../../assets/images/hero_bg.webp';
import DownArrow from '../../assets/svg/down-arrow.svg';

const isTablet = useMediaQuery(tabletWidth);
const isMobile = useMediaQuery(mobileWidth);
// const videoSrc = ref(siteData.heroSection.backgroundVideo.desktop);
const videoElement = ref<HTMLVideoElement | null>(null);

function handleStartNowClick() {
  window.open('', '_blank'); // TODO: add START NOW link
}

watch(
  () => [isTablet.value, isMobile.value],
  () => {
    if (isMobile.value) {
      // videoSrc.value = siteData.heroSection.backgroundVideo.mobile;
    } else if (isTablet.value) {
      // videoSrc.value = siteData.heroSection.backgroundVideo.tablet;
    } else {
      // videoSrc.value = siteData.heroSection.backgroundVideo.desktop;
    }

    if (videoElement.value) {
      videoElement.value.load();
      videoElement.value.play();
    }
  },
  { immediate: true }
);

const dots = ref([
  { left: '-51%', top: '68%' },
  { left: '-20%', top: '25%' },
  { left: '3%', top: '0' },
  { left: '29%', top: '28%' },
  { left: '68%', top: '18%' },
  { left: '83%', top: '-8%' },
  { right: '-15%', top: '12%' },
  { right: '-45%', top: '79%' }
]);

</script>

<template>
  <section id="home" class="w-full flex flex-col items-center relative mt-[60px]">
    <div
      class="w-full h-[calc(100vh-60px)] xxxl:max-w-[1600px] xxxl:h-[920px] relative flex flex-col items-center overflow-hidden">
      <div class="w-full h-full overflow-hidden flex justify-center">
        <img :src=BgPlaceholder class="absolute left-0 top-0 z-0 w-full h-full object-cover" />
        <!-- <video ref="videoElement" class="absolute left-0 top-0 z-1 w-full h-full object-cover" autoplay muted loop
            playsinline>
            <source :src="videoSrc" type="video/mp4" />
            Your browser does not support the video tag.
          </video> -->
        <Container class="h-full">
          <div class="flex flex-col items-center justify-end w-full h-full">
            <div class="flex flex-col md:flex-row w-full items-start justify-between">
              <div class="flex flex-col w-full mb-[30px] xsm:mb-[90px] xl:mb-0">
                <h1
                  class="text-[58px] leading-[58px] l:text-h1-md xl:text-h1 font-heading tracking-sx text-white max-w-[360px] xl:max-w-[556px] mb-[15px] xl:mb-12 uppercase">
                  {{
                    siteData.heroSection.title
                  }}
                </h1>
                <span
                  class='xl:hidden text-body font-body tracking-sx text-white max-w-[400px] font-light leading-[27px]'><span
                    class="font-semibold">{{ siteData.heroSection.description_part_1
                    }}</span>{{ siteData.heroSection.description_part_2 }}<span class="font-semibold">{{
                      siteData.heroSection.description_part_3 }}</span>{{
                      siteData.heroSection.description_part_4
                    }}<span class="font-semibold">{{ siteData.heroSection.description_part_5 }}</span>{{
                    siteData.heroSection.description_part_6 }}</span>
              </div>
              <div
                class="flex items-end xl:items-start h-full w-full md:w-auto xl:w-full justify-end l:justify-between xl:justify-end">
                <span
                  class='hidden xl:inline text-body font-body tracking-sx text-white max-w-[400px] l:max-w-[310px] font-light leading-[27px]'><span
                    class="font-semibold">{{ siteData.heroSection.description_part_1
                    }}</span>{{ siteData.heroSection.description_part_2 }}<span class="font-semibold">{{
                      siteData.heroSection.description_part_3 }}</span>{{
                      siteData.heroSection.description_part_4
                    }}<span class="font-semibold">{{ siteData.heroSection.description_part_5 }}</span>{{
                    siteData.heroSection.description_part_6 }}</span>
                <PlayButton :onClick="handleStartNowClick" class="relative xl:self-end mb-[40px] md:mb-[100px] xl:mb-12 xl:ml-16" />
              </div>
            </div>
            <div class="cursor-pointer flex flex-col items-center absolute left-12 md:left-[initial] bottom-2">
              <DownArrow class="mb-2" />
              <span class="text-[19px] md:text-[22px] font-heading text-white uppercase">learn more</span>
              <div class="flex absolute w-full h-full">
                <div v-for="(dot, index) in dots" :key="index" class="absolute w-[2px] h-[2px] bg-white"
                  :style="{ left: dot.left, top: dot.top, right: dot.right }" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  </section>
</template>