<template>
  <div
    v-for="type in ANIMATION_TYPES"
    :key="type"
    style="width: 8rem;">
    <q-btn
      class="q-px-md q-pb-sm full-height"
      :color="item.animationType===type?'primary':''"
      :disable="!ENABLED_ANIMATIONS.includes(type)"
      outline
      @click="item.animationType=type">
      <q-avatar square size="6rem">
        <EffectIcon
          :disabled="!ENABLED_ANIMATIONS.includes(type)"
          :fill="item.animationType===type?getPaletteColor('primary') : ''"
          :model-value="type" />
      </q-avatar>
      <div class="text-center text-capitalize">
        <div class="text-subtitle2">{{ i18n(`titles.${type}`) }}</div>
        <div class="text-caption">{{ i18n(`descriptions.${type}`) }}</div>
      </div>
    </q-btn>
    <q-tooltip
      v-if="!ENABLED_ANIMATIONS.includes(type)"
      anchor="top middle"
      self="bottom middle"
      transition-show="jump-up"
      transition-hide="jump-down">
      {{ i18n("tooltips.comingSoon") }}
    </q-tooltip>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { colors } from "quasar";

import { ANIMATION_TYPES, ENABLED_ANIMATIONS } from "boot/config";
import EffectIcon from "components/EffectIcon";
import { useEffectManagerStore } from "stores/effectManager";

export default defineComponent({
  name: "EffectCard",
  components: { EffectIcon },
  setup() {
    const effectManager = useEffectManagerStore();
    const { item } = storeToRefs(effectManager);
    const { getPaletteColor } = colors;

    return {
      ANIMATION_TYPES,
      ENABLED_ANIMATIONS,
      item,
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
