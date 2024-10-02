<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  class?: string;
}>()

const containerClasses = computed(() => [
  'flex flex-col relative w-full mx-auto px-3.5 md:px-5 l:px-12 xl:px-9 xxl:max-w-[1504px] xxl:px-0',
  props.class
]);

</script>

<template>
  <div :class="containerClasses">
    <slot></slot>
  </div>
</template>
