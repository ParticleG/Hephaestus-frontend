<template>
  <q-card>
    <q-card-section horizontal>
      <q-card-section>
        <EffectColor v-model="config.startColor" />
      </q-card-section>
      <q-card-section>
        <RangeInput
          :min="0"
          :max="10000"
          :step="50"
          :title="i18n('labels.rangeTitle')"
          unit="ms"
          :low-value="config.minPeriod"
          @update:lowValue="config.minPeriod=$event"
          :high-value="config.maxPeriod"
          @update:highValue="config.maxPeriod=$event" />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { computed, defineComponent } from "vue";

import EffectColor from "components/EffectColor";
import RangeInput from "components/RangeInput";

export default defineComponent({
  name: "EffectStarryNight",
  components: { RangeInput, EffectColor },
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
      return this.$t("components.effectStarryNight." + relativePath);
    }
  }
});
</script>

<style scoped>

</style>
