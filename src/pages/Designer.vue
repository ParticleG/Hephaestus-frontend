<template>
  <q-page class="flex row q-pa-lg">
    <div class="col-10 column q-pa-lg">
      <ConfigManager
        class="q-mb-lg"
        :configs="configs"
        v-model="selected" />
      <div class="row q-mb-lg q-gutter-md">
        <EffectCard
          :options="ANIMATION_TYPES"
          v-model="configs[selected].animationType" />
      </div>
      <div class="col-grow">
        <Simple
          v-if="configs[selected].animationType==='simple'"
          v-model="configs[selected]" />
        <Breathing
          v-if="configs[selected].animationType==='breathing'"
          v-model="configs[selected]" />
        <Strobing
          v-if="configs[selected].animationType==='strobing'"
          v-model="configs[selected]" />
        <ColorCycle
          v-if="configs[selected].animationType==='colorCycle'"
          v-model="configs[selected]" />
        <Rainbow
          v-if="configs[selected].animationType==='rainbow'"
          v-model="configs[selected]" />
        <StarryNight
          v-if="configs[selected].animationType==='starryNight'"
          v-model="configs[selected]" />
        <Smart
          v-if="configs[selected].animationType==='smart'"
          v-model="configs[selected]" />
      </div>
    </div>
    <div class="col-2 column q-pa-lg">
      <EffectPreview class="col-auto" />
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, reactive, ref } from "vue";
import { ANIMATION_TYPES } from "boot/config";

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
    const $q = useQuasar();

    let configs = reactive([{
      name: "",
      animationType: "simple",
      animationDirection: ref(true),
      startColor: ref("#000000"),
      minPeriod: ref(500),
      maxPeriod: ref(1000)
    }]);

    const selected = ref(0);

    if ($q.localStorage.has("hephaestus.configs.effect")) {
      configs = reactive($q.localStorage.getItem("hephaestus.configs.effect"));
    }
    if ($q.localStorage.has("hephaestus.lastStates.effect")) {
      selected.value = $q.localStorage.getItem("hephaestus.lastStates.effect");
    }
    if (configs[selected.value] === undefined) {
      selected.value = 0;
    }

    return { configs, selected, ANIMATION_TYPES };
  },
  watch: {
    configs: {
      handler(configs) {
        this.$ws.sendObject({
          action: 1,
          data: {
            path: this.$hid.path,
            config: configs[this.selected]
          }
        });
        this.$q.localStorage.set("hephaestus.configs.effect", configs);
        this.$q.localStorage.set("hephaestus.lastStates.effect", this.selected);
      },
      deep: true
    }
  },
  methods: {
    i18n(relativePath) {
      return this.$t("pages.designer." + relativePath);
    }
  }
});
</script>
