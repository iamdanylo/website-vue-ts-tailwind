import { ref, onMounted } from 'vue';

interface MediaQueryListEvent {
  matches: boolean;
}

export const useMediaQuery = (width: number, width2?: number) => {
  const targetReached = ref<boolean>(false);

  const updateTarget = (e: MediaQueryListEvent) => {
    if (e.matches) {
      targetReached.value = true;
    } else {
      targetReached.value = false;
    }
  };

  onMounted(() => {
    const media = !width2
      ? window.matchMedia(`(max-width: ${width}px)`)
      : window.matchMedia(`(min-width: ${width}px) and (max-width: ${width2}px)`);

    media.addEventListener('change', updateTarget);

    if (media.matches) {
      targetReached.value = true;
    }

    return () => media.removeEventListener('change', updateTarget);
  });

  return targetReached;
};
