<script setup lang="ts">
import { onMounted } from 'vue';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { mobileWidth } from '../utils/screenSizes';
import LogoImage from '../assets/svg/logo-white.svg?url';

const isMobile = useMediaQuery(mobileWidth);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const smoothScrollToAnchor = (event: Event) => {
  event.preventDefault();
  const targetId = (event.target as HTMLAnchorElement).getAttribute('href')?.substring(1);
  const targetElement = targetId ? document.getElementById(targetId) : null;

  if (targetElement) {
    const headerHeight = 60 + 10;
    const offsetTop = targetElement.offsetTop - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};


onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScrollToAnchor);
  });
});
</script>

<template>
  <footer class="relative flex flex-col items-center w-full bg-blue pt-[50px] l:pt-[98px] pb-5 l:pb-[74px]">
    <div class="flex flex-col l:flex-row justify-between h-full w-full items-center px-5 l:px-12 xl:px-0 xl:max-w-[1288px] gap-8">
      <a href="#home" @click="scrollToTop">
        <img :src="LogoImage" alt="logo" class="max-w-[121px] md:max-w-[164px]">
      </a>
      <div class="hidden xl:flex w-full max-w-[168px] bg-white-100/70 h-[1px]"></div>
      <nav class="grid grid-cols-[repeat(3,max-content)] md:flex md:flex-1 justify-center items-center gap-4 md:gap-x-9 max-w-full w-full">
        <div class="hidden md:flex flex-1 w-full h-[1px] bg-white-100/30"></div>
        <a href="#home" class="text-nav font-body tracking-sx text-white-100 transition-all duration-200 hover:text-white-100/80">Home</a>
        <a href="#about" class="text-nav font-body tracking-sx text-white-100 transition-all duration-200 hover:text-white-100/80">How it works</a>
        <a href="#pricing" class="text-nav font-body tracking-sx text-white-100 transition-all duration-200 hover:text-white-100/80">Pricing</a>
        <a href="#benefits" class="text-nav font-body tracking-sx text-white-100 transition-all duration-200 hover:text-white-100/80">Benefits</a>
        <a href="#features" class="text-nav font-body tracking-sx text-white-100 transition-all duration-200 hover:text-white-100/80">Key Features</a>
        <a href="#faq" class="text-nav font-body tracking-sx text-white-100 transition-all duration-200 hover:text-white-100/80">FAQs</a>
        <div class="hidden md:flex flex-1 w-full h-[1px] bg-white-100/30"></div>
      </nav>
      <div class="hidden xl:flex w-full max-w-[158px] bg-white-100/70 h-[1px]"></div>
      <div class="flex">
        <p class="text-body-sx font-body text-white/70 w-full l:max-w-[132px]">Copyright
          All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>