<template>
  <q-page class="flex row q-pa-lg">
    <div class="col-10 column q-pa-lg">
      <ConfigManager class="q-mb-lg" :model-value="ConfigType.Effect"/>
      <div class="row q-mb-lg q-gutter-md">
        <EffectCard />
      </div>
      <div class="col-grow">
        <Simple
          v-if="item.animationType==='simple'"
          v-model="item" />
        <Breathing
          v-if="item.animationType==='breathing'"
          v-model="item" />
        <Strobing
          v-if="item.animationType==='strobing'"
          v-model="item" />
        <ColorCycle
          v-if="item.animationType==='colorCycle'"
          v-model="item" />
        <Rainbow
          v-if="item.animationType==='rainbow'"
          v-model="item" />
        <StarryNight
          v-if="item.animationType==='starryNight'"
          v-model="item" />
        <Smart
          v-if="item.animationType==='smart'"
          v-model="item" />
      </div>
    </div>
    <div class="col-2 column q-pa-lg">
      <EffectPreview class="col-auto" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

import ConfigManager from "components/ConfigManager";
import EffectCard from "components/EffectCard";
import EffectPreview from "components/EffectPreview";
import Simple from "components/EffectSettings/Simple";
import Breathing from "components/EffectSettings/Breathing";
import ColorCycle from "components/EffectSettings/ColorCycle";
import Rainbow from "components/EffectSettings/Rainbow";
import Strobing from "components/EffectSettings/Strobing";
import Smart from "components/EffectSettings/Smart";
import StarryNight from "components/EffectSettings/StarryNight";

import { useEffectManagerStore } from "stores/effectManager";
import ConfigType from "src/scripts/ConfigType";

export default defineComponent({
  name: "DesignerPage",
  components: {
    StarryNight,
    Smart,
    Strobing,
    Rainbow,
    ConfigManager,
    EffectPreview,
    EffectCard,
    ColorCycle,
    Breathing,
    Simple
  },
  setup() {
    const effectManager = useEffectManagerStore();
    const { item } = storeToRefs(effectManager);
    return { ConfigType, effectManager, item };
  },
  created() {
    this.effectManager.$subscribe(() => {
      this.$ws.sendObject({
        action: 1,
        data: {
          path: this.$hid.path,
          config: this.item
        }
      });
    });
  },
  methods: {
    i18n(relativePath) {
      return this.$t("pages.designer." + relativePath);
    }
  }
});
</script>
