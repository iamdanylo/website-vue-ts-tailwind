<script setup lang="ts">
import { ref } from 'vue';
import { FaqItem } from '../constants/faq';

const props = defineProps<{
  item: FaqItem;
}>();

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

</script>

<template>
  <div class="border-t border-gray-100">
    <div class="flex justify-between items-center cursor-pointer pt-6" :class="{'pb-4': isOpen, 'pb-9': !isOpen}" @click="toggle">
      <h5 class="text-faq-title text-violet font-heading tracking-sx max-w-[290px] md:max-w-full">{{ props.item.question }}</h5>
      <div class="flex w-8 h-8 items-center justify-center rounded-full transition-all duration-300 bg-gray-100" :class="{'bg-yellow': isOpen, 'bg-gray-100': !isOpen}">
        <div :class="{'scale-100': isOpen, 'scale-0': !isOpen}" class='absolute w-14 h-14 rounded-full border border-yellow transition-all duration-300'></div>
        <div v-if="isOpen" class="flex w-full h-full justify-center items-center">
            <div class='w-4 h-[1px] bg-violet'></div>
         </div>
         <div v-else class="flex w-full h-full justify-center items-center">
            <div class='w-4 h-[1px] bg-violet'></div>
            <div class='absolute w-4 h-[1px] bg-violet rotate-90'></div>
         </div>
      </div>
    </div>
    <p v-if="isOpen" class="text-body-sm text-violet-100 font-body tracking-sx pb-[46px] w-full max-w-[290px] md:max-w-[47%]">
      {{ item.answer }}
    </p>
  </div>
</template>
