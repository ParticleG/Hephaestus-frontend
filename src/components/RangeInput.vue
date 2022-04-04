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
        v-model="minTextValue"
        style="width:5rem" />
      <q-input
        dense
        hide-bottom-space
        :suffix="unit"
        type="number"
        v-model="maxTextValue"
        style="width:5rem" />
    </div>
    <q-range
      drag-range
      label
      :min="min"
      :max="max"
      :step="step"
      switch-label-side
      v-model="rangeValue"
      style="width:24rem" />
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "RangeInput",
  props: {
    lowValue: {
      type: Number,
      required: true,
      default: 0
    },
    highValue: {
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
    const rangeValue = computed({
      get: () => ({ min: props.lowValue, max: props.highValue }),
      set: (value) => {
        emit("update:lowValue", value.min);
        emit("update:highValue", value.max);
      }
    });
    const minTextValue = computed({
      get: () => rangeValue.value.min.toString(),
      set: (value) => rangeValue.value.min = parseInt(value)
    });
    const maxTextValue = computed({
      get: () => rangeValue.value.max.toString(),
      set: (value) => rangeValue.value.max = parseInt(value)
    });
    return { rangeValue, minTextValue, maxTextValue };
  }
});
</script>

<style scoped>

</style>
