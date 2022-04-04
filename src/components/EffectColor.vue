<template>
  <q-color
    format-model="hex"
    v-model="color"
    style="width: 16rem" />
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "EffectColor",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const color = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return { color };
  }
});
</script>

<style scoped>

</style>
