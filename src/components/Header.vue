<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useMediaQuery } from './../hooks/useMediaQuery';
import LogoImage from './../assets/svg/logo.svg?url';
import BurgerIcon from './../assets/svg/burger_icon.svg?url';
import BurgerIconClose from './../assets/svg/burger_close.svg?url';

import Button from './Button.vue';

const isMobile = useMediaQuery(1024);
const isMobileMenuOpen = ref(false);
const headerRef = ref<HTMLElement | null>(null);
const lastScrollY = ref(0);

const handleScroll = () => {
  if (headerRef.value) {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY.value) {
      // Scrolling up
      headerRef.value.classList.add('fixed-header');
      headerRef.value.classList.remove('hidden-header');
    } else {
      // Scrolling down
      headerRef.value.classList.add('hidden-header');
      headerRef.value.classList.remove('fixed-header');
    }
    if (currentScrollY < 40) {
      headerRef.value.classList.add('no-shadow');
    } else {
      headerRef.value.classList.remove('no-shadow');
    }
    lastScrollY.value = currentScrollY;
  }
};

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
    const offsetTop = targetElement.offsetTop + headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScrollToAnchor);
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleStartNowClick() {
  window.open('', '_blank'); // TODO: add START NOW link
}
</script>

<template>
  <header ref='headerRef'
    class="flex w-full justify-center h-[60px] z-50 fixed top-0 bg-white transition-all duration-300 opacity-1">
    <div
      class="flex flex-row justify-between h-full w-full items-center px-5 l:px-[100px] xxl:max-w-[1504px] xxl:px-[0px]">
      <a href="#home" @click="scrollToTop">
        <img :src="LogoImage" alt="logo" class="max-w-[121px] md:max-w-[164px]">
      </a>
      <nav v-if="!isMobile" class="flex">
        <a href="#home" class="hovered-link mr-11 text-nav text-violet font-body tracking-sx">Home</a>
        <a href="#about" class="hovered-link mr-11 text-nav text-violet font-body tracking-sx">How it works</a>
        <a href="#pricing" class="hovered-link mr-11 text-nav text-violet font-body tracking-sx">Pricing</a>
        <a href="#benefits" class="hovered-link mr-11 text-nav text-violet font-body tracking-sx">Benefits</a>
        <a href="#features" class="hovered-link mr-11 text-nav text-violet font-body tracking-sx">Key Features</a>
        <a href="#faq" class="hovered-link text-nav text-violet font-body tracking-sx">FAQs</a>
      </nav>
      <div class="flex">
        <div class="max-w-[125px] mr-4 l:mr-0">
          <Button :wrapperClass="'border border-violet xsm:w-[125px] w-auto'" :onClick="handleStartNowClick">
            <span class="px-[16px] pt-2 pb-2 font-body text-btn uppercase tracking-sm">Start now</span>
          </Button>
        </div>
        <Button v-if="isMobile" :wrapperClass="'border border-violet h-[40px]'" :class="'w-[40px] h-[40px]'"
          :onClick="() => isMobileMenuOpen = true">
          <div class="w-full h-full flex items-center justify-center">
            <img :src="BurgerIcon" alt="mobile menu">
          </div>
        </Button>
      </div>
      <!-- mobile menu -->
      <div v-if="isMobileMenuOpen" class="fixed top-0 right-0 left-0 bottom-0 bg-yellow px-[24px] z-50">
        <nav class="w-full h-full flex items-center justify-center relative">
          <div class="absolute top-8 flex items-center justify-center bg-white w-[44px] h-[44px] rounded-xl"
            role="button" @click="isMobileMenuOpen = false">
            <img :src="BurgerIconClose" alt="mobile menu close">
          </div>
          <ul class="flex flex-col items-center justify-center gap-[24px] uppercase">
            <li>
              <a href="#home" @click="isMobileMenuOpen = false"
                class="font-heading text-[44px] leading-[48px] text-white">Home</a>
            </li>
            <li>
              <a href="#overview" @click="isMobileMenuOpen = false"
                class="font-heading text-[44px] leading-[48px] text-white">How it works</a>
            </li>
            <li>
              <a href="#features" @click="isMobileMenuOpen = false"
                class="font-heading text-[44px] leading-[48px] text-white">Pricing</a>
            </li>
            <li>
              <a href="#features" @click="isMobileMenuOpen = false"
                class="font-heading text-[44px] leading-[48px] text-white">Benefits</a>
            </li>
            <li>
              <a href="#features" @click="isMobileMenuOpen = false"
                class="font-heading text-[44px] leading-[48px] text-white">Key Features</a>
            </li>
            <li>
              <a href="#features" @click="isMobileMenuOpen = false"
                class="font-heading text-[44px] leading-[48px] text-white">FAQs</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fixed-header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 1;
}

.hidden-header {
  opacity: 0;
  user-select: none;
  pointer-events: none
}

.no-shadow {
  box-shadow: none;
  opacity: 1;
}

.hovered-link {
  text-decoration: none;
  color: inherit;
  position: relative;
}

.hovered-link:hover::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  transition: all .3s ease-in-out;
  background-color: #FFC139;
}
</style>
