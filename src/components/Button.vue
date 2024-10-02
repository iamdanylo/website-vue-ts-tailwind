<script setup lang="ts">
import { computed } from 'vue';

import { twClsx } from './../utils/twClsx';
import clickSound from './../assets/audio/click-button-secondary.mp3';

const props = defineProps<{
  class?: string;
  wrapperClass?: string;
  overlayClass?: string;
  onClick: () => void;
}>()

const buttonClasses = computed(() => [
  twClsx('group w-full flex relative rounded-lg border border-transparent',
    props.class)
]);

const wrapperClasses = computed(() => [
  twClsx('w-full flex flex-row items-center justify-center relative z-10 translate-x-[3px] -translate-y-[3px] rounded-lg bg-white transition-all duration-150 group-active:translate-x-[0] group-active:translate-y-[0] group-hover:bg-yellow group-active:bg-white',
    props.wrapperClass)
]);

const overlayClasses = computed(() => [
  twClsx('z-0 w-full h-full absolute left-[0] top-[0] bg-violet rounded-lg',
    props.overlayClass)
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
    <div :class="wrapperClasses">
      <slot></slot>
    </div>
    <div :class="overlayClasses"></div>
  </button>
</template>
