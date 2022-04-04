<template>
  <q-card>
    <q-card-section>
      <EffectColor v-model="config.startColor" />
    </q-card-section>
  </q-card>
</template>

<script>
import { computed, defineComponent } from "vue";
import EffectColor from "components/EffectColor";

export default defineComponent({
  name: "EffectSmart",
  components: { EffectColor },
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
      return this.$t("components.effectSmart." + relativePath);
    }
  }
});
</script>

<style scoped>

</style>
