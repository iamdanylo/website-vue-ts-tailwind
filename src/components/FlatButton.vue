<script setup lang="ts">
import { computed } from 'vue';
import { twClsx } from './../utils/twClsx';

const props = defineProps<{
  class?: string;
  onClick: () => void;
}>()

const buttonClasses = computed(() => [
  twClsx('flex justify-center items-center w-full relative rounded-md-1 h-[60px] bg-gray-100',
    props.class)
]);

function handleClick() {
  props.onClick?.();
}
</script>

<template>
  <button @click="handleClick" :class="buttonClasses">
    <slot></slot>
  </button>
</template>
