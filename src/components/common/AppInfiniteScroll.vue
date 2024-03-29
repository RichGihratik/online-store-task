<script lang="ts">
export default {
  name: 'AppInfiniteScroll',
};
</script>

<script lang="ts" setup>

import { vIntersection } from '@/directives';
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  disable: {
    type: Boolean,
    required: true
  },
  debounce: {
    type: Number,
    default: 300,
  },
});

const emits = defineEmits<{
  (e: 'load', done: (stop?: boolean) => void): void
}>();

const loading = ref(false);
const mounted = ref(false);

// Property for internal stop
const disabled = ref(props.disable);

function intersection() {
  if (!loading.value) {
    loading.value = true;
    emits('load', done);
  }
}

function loadDebounce() {
  if (loading.value) setTimeout(() => {
    loading.value = false;
  }, props.debounce);
}

function done(stop?: boolean) {
  disabled.value = stop ?? props.disable;
  loadDebounce();
}

watch(props, () => {
  disabled.value = props.disable;
});

onMounted(() => {
  setTimeout(() => mounted.value = true, props.debounce);
})

</script>

<template>
  <div>
    <slot></slot>
    <div 
      v-if="!disabled" 
      v-intersection="intersection" 
      :class="loading ? 'invisible' : ''">
        <slot name="loading"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">

.invisible {
  visibility: hidden;
  transition: none;
  animation: none;
}

</style>