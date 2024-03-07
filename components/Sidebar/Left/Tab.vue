<template>
  <nuxt-link to="#" class="flex items-center p-3 text-black w-min hover:bg-gray-200 rounded-full dark:hover:bg-dim-200 dark:text-white" :class="defaultTransition">
    <div class="w-6 h-6 text-dark" :class="defaultTransition">
      <slot name="icon" />
    </div>
    <div class="hidden ml-4 text-xl xl:block" :class="textClasses">
      <slot name="name" />
    </div>
  </nuxt-link>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
})

const textClasses = computed(() => {
  if (props.active) {
    return 'font-semibold'
  } else {
    return 'font-normal'
  }
})

</script>
