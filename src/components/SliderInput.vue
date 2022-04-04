<template>
  <div>
    <div class="row justify-between items-center">
      <div class="text-body1 ">
        {{ title }}
      </div>
      <q-input
        dense
        hide-bottom-space
        :suffix="unit"
        type="number"
        v-model="textValue"
        style="width:5rem" />
    </div>
    <q-slider
      label
      :min="min"
      :max="max"
      :step="step"
      switch-label-side
      v-model="sliderValue"
      style="width:24rem" />
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "SliderInput",
  props: {
    modelValue: {
      type: Number,
      required: true,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: ""
    },
    unit: {
      type: String,
      default: ""
    }
  },
  setup(props, { emit }) {
    let sliderValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    let textValue = computed({
      get: () => sliderValue.value.toString(),
      set: (value) => sliderValue.value = parseInt(value)
    });
    return { sliderValue, textValue };
  }
});
</script>

<style scoped>

</style>
