<template>
  <q-item
    class="non-selectable"
    tag="label"
    v-ripple>
    <q-item-section>
      {{ title }}
    </q-item-section>
    <q-item-section side>
      <q-toggle v-model="value" />
    </q-item-section>
  </q-item>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "ItemToggle",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(props, { emit }) {
    let value = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return { value };
  }
});
</script>

<style scoped>

</style>
