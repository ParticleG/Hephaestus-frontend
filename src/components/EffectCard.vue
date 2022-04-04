<template>
  <div
    v-for="option in options"
    :key="option"
    style="width: 8rem;">
    <q-btn
      class="q-px-md q-pb-sm full-height"
      :color="selected === option ? 'primary' : ''"
      :disable="!ENABLED_ANIMATIONS.includes(option)"
      outline
      @click="selected = option">
      <q-avatar square size="6rem">
        <EffectIcon
          :disabled="!ENABLED_ANIMATIONS.includes(option)"
          :fill="selected === option ? getPaletteColor('primary') : ''"
          :model-value="option" />
      </q-avatar>
      <div class="text-center text-capitalize">
        <div class="text-subtitle2">{{ i18n(`titles.${option}`) }}</div>
        <div class="text-caption">{{ i18n(`descriptions.${option}`) }}</div>
      </div>
    </q-btn>
    <q-tooltip
      v-if="!ENABLED_ANIMATIONS.includes(option)"
      anchor="top middle"
      self="bottom middle"
      transition-show="jump-up"
      transition-hide="jump-down">
      {{ i18n("tooltips.comingSoon") }}
    </q-tooltip>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { colors } from "quasar";

import EffectIcon from "components/EffectIcon";
import { ENABLED_ANIMATIONS } from "boot/config";

export default defineComponent({
  name: "EffectCard",
  components: { EffectIcon },
  props: {
    modelValue: {
      type: String,
      required: true,
      default: () => ""
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const selected = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    const { getPaletteColor } = colors;

    return {
      ENABLED_ANIMATIONS,
      selected,
      getPaletteColor
    };
  },
  methods: {
    i18n(relativePath) {
      return this.$t("components.effectCard." + relativePath);
    }
  }
});
</script>

<style scoped>

</style>
