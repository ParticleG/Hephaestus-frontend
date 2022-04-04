<template>
  <q-card>
    <q-card-section horizontal>
      <q-card-section>
        <EffectColor v-model="config.startColor" />
      </q-card-section>
      <q-card-section>
        <SliderInput
          :min="0"
          :max="10000"
          :step="50"
          :title="i18n('labels.maxPeriod')"
          unit="ms"
          v-model="config.maxPeriod" />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { computed, defineComponent } from "vue";

import EffectColor from "components/EffectColor";
import SliderInput from "components/SliderInput";

export default defineComponent({
  name: "EffectBreathing",
  components: { SliderInput, EffectColor },
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const config = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return { config };
  },
  methods: {
    i18n(relativePath) {
      return this.$t("components.effectBreathing." + relativePath);
    }
  }
});
</script>

<style scoped>

</style>
