<script setup lang="ts">
import { computed } from 'vue';
import { twClsx } from './../utils/twClsx';
import { PricingCard } from '../constants/pricing';
import FlatButton from '../components/FlatButton.vue';

import blueBadgeIcon from './../assets/svg/badges/badge-blue.svg?url';
import yellowBadgeIcon from './../assets/svg/badges/badge-yellow.svg?url';
import redBadgeIcon from './../assets/svg/badges/badge-red.svg?url';

const props = defineProps<{
  class?: string;
  item: PricingCard;
  index: number;
}>()

const containerClass = computed(() =>
  twClsx('relative flex items-center justify-center rounded-lg-1 w-full max-w-full l:max-w-[271px] xl:max-w-[332px]',
    props.class, props.item.gradientClass)
);

const flatBtnClass = computed(() =>
  twClsx('relative',
    props.item?.btnBgClass)
);

const badgeIcon = computed(() => {
  switch (props.item.type) {
    case 'indie':
    case 'team':
      return yellowBadgeIcon;
    case 'starter':
      return blueBadgeIcon;
    case 'enterprise':
      return redBadgeIcon;
    default:
      return blueBadgeIcon;
  }
});

const btnTitleClass = computed(() => {
  switch (props.item.type) {
    case 'indie':
    case 'team':
      return 'text-violet';
    case 'starter':
    case 'enterprise':
      return 'text-white';
    default:
      return 'text-violet';
  }
});

</script>

<template>
  <div :class=containerClass>
    <div class="bg-white-100 flex flex-col items-center w-[calc(100%-1px)] h-[calc(100%-1px)] rounded-lg-1 p-2">
      <div class="flex pt-4 pl-5 mb-[30px] w-full justify-start">
        <span class="flex text-btn text-gray tracking-sx mr-2">0{{ index }}</span>
        <span class="flex text-card-title-lg text-violet font-heading uppercase tracking-sx">{{ item.title }}</span>
      </div>
      <div class="flex w-[130px] h-[130px] self-center">
        <img class="w-full h-auto object-cover" :src="item.image" alt="image">
      </div>
      <div class="flex flex-col w-full pl-1 xl:pl-5 mb-6">
        <div class="flex mb-2" v-for="(f) in item.features" :key="f">
          <img class="mr-2" :src="badgeIcon" alt="icon">
          <span>{{ f }}</span>
        </div>
      </div>
      <FlatButton :class="flatBtnClass" :onClick="() => undefined">
        <template v-if="item.btnTitle">
          <span :class="['flex tracking-sx text-btn-1 font-heading uppercase', btnTitleClass]">{{ item.btnTitle
            }}</span>
        </template>
        <template v-else>
          <div :class="['font-heading tracking-sx', btnTitleClass]">
            <span class="text-[30px]">${{ item.price?.amount }}</span>
            <span class="text-body">/{{ item.price?.period }}</span>
          </div>
        </template>
      </FlatButton>
    </div>
  </div>
</template>
