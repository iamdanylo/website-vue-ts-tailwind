<script setup lang="ts">
import { computed } from 'vue';
import { twClsx } from '../utils/twClsx';

import PlayBtnBg from '../assets/svg/play-btn-bg.svg';
import PlayBtn from '../assets/svg/play-btn.svg';
import PlayBtnArrow from '../assets/svg/btn-arrow.svg';
import clickSound from '../assets/audio/click-button-primary.mp3';

const props = defineProps<{
  class?: string;
  onClick: () => void;
}>()

const buttonClasses = computed(() => [
  twClsx('group flex justify-center svg-btn',
    props.class)
]);

const audio = new Audio(clickSound);

function handleClick() {
  if (props.onClick) {
    props.onClick();
  }
  audio.play();
}
</script>

<template>
  <button @click="handleClick" :class="buttonClasses">
    <div
      class="flex translate-x-[0px] -translate-y-[0px] z-20 transition-all duration-300 group-active:-translate-x-[10px] group-active:translate-y-[15px]">
      <span class="absolute z-10 text-[24px] lg:text-btn-1 font-heading uppercase text-white w-full bottom-4 lg:bottom-5 lg:tracking-sx">Get started for
        free</span>
      <PlayBtnArrow class="z-10 absolute right-[25px] top-[27px]" />
      <PlayBtn class="z-0 relative play-btn" />
    </div>
    <PlayBtnBg class="absolute z-0 left-0 top-0 -translate-x-[10px] -translate-y-[0px]" />
  </button>
</template>
