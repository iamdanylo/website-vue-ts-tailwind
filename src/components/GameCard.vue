<script setup lang="ts">
import { computed } from 'vue';

import { twClsx } from './../utils/twClsx';
import { GameCard } from './../constants/featuredGames';
import HeartIcon from './../assets/svg/heart_icon.svg';
import FlashIcon from './../assets/svg/flash_icon.svg';
import EyeIcon from './../assets/svg/eye_icon.svg';

const props = defineProps<{
  class?: string;
  item: GameCard;
}>()

const containerClasses = computed(() => [
  twClsx('relative flex flex-col rounded-[20px] px-[6px] l:px-2',
    props.class)
]);
</script>

<template>
  <div :class=containerClasses>
    <div class="absolute left-0 bottom-0 rounded-[30px] w-full h-[calc(100%-28px)] shadow-card -z-[1]"></div>
    <div class="flex rounded-[30px] w-full justify-center overflow-hidden mb-6 z-[1]">
      <img class="w-full h-[176px] l:h-[258px] object-cover" :src="item.image" alt="game image">
    </div>
    <p class="text-violet text-card-title tracking-sx text-left px-4 l:px-7 mb-2 truncate">{{ item.title }}</p>
    <div class="flex items-start px-3.5 pb-4">
      <div class="flex items-center mr-4 l:mr-8">
        <HeartIcon class="mr-1.5 l:mr-2" />
        <span class="flex text-violet text-[12px] l:text-body font-body tracking-sx mr-1.5 l:mr-2">{{ item.likes }}</span>
        <span class="flex text-violet/50 text-[12px] l:text-body font-body tracking-sx">Likes</span>
      </div>
      <div class="flex items-center mr-4 l:mr-8">
        <FlashIcon class="mr-1.5 l:mr-2" />
        <span class="flex text-violet text-[12px] l:text-body font-body tracking-sx mr-1.5 l:mr-2">{{ item.plays }}</span>
        <span class="flex text-violet/50 text-[12px] l:text-body font-body tracking-sx">Plays</span>
      </div>
      <div class="flex items-center">
        <EyeIcon class="mr-1.5 l:mr-2" />
        <span class="flex text-violet text-[12px] l:text-body font-body tracking-sx mr-1.5 l:mr-2">{{ item.views }}</span>
        <span class="flex text-violet/50 text-[12px] l:text-body font-body tracking-sx">Views</span>
      </div>
    </div>
  </div>
</template>
