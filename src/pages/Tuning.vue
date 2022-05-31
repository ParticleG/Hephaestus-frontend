<template>
  <q-page class="flex row q-pa-lg">
    <div class="col-grow column q-pa-lg">
      <ConfigManager class="q-mb-lg" :model-value="ConfigType.Keymap" />
      <!--      <div class="text-h5 q-mb-md">-->
      <!--        Descriptions:-->
      <!--      </div>-->
      <!--      <q-list-->
      <!--        class="non-selectable q-mb-lg"-->
      <!--        bordered-->
      <!--        separator>-->
      <!--        <q-item-->
      <!--          v-for="(description,index) in item.descriptions"-->
      <!--          :key="index"-->
      <!--          v-ripple>-->
      <!--          <q-item-section>-->
      <!--            <q-item-label>{{ description["name"] }}</q-item-label>-->
      <!--            <q-item-label caption lines="2">-->
      <!--              {{ description["comment"] }}-->
      <!--            </q-item-label>-->
      <!--          </q-item-section>-->

      <!--          <q-item-section side>-->
      <!--            <q-chip>-->
      <!--              <q-avatar color="primary" text-color="white">-->
      <!--                {{ description["size"] }}-->
      <!--              </q-avatar>-->
      <!--              Bytes-->
      <!--            </q-chip>-->
      <!--          </q-item-section>-->
      <!--        </q-item>-->
      <!--      </q-list>-->
      <div class="text-h5 q-mb-md">
        Keymap:
      </div>
      <div class="row q-mb-lg q-gutter-md">
        <KeySelector v-model="item.keymap.mapping" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

import ConfigManager from "components/ConfigManager";
import KeySelector from "components/KeySelector";

import { useKeymapManagerStore } from "stores/keymapManager";
import ConfigType from "src/scripts/ConfigType";

export default defineComponent({
  name: "TuningPage",
  components: { KeySelector, ConfigManager },
  setup() {
    const keymapManager = useKeymapManagerStore();
    const { item } = storeToRefs(keymapManager);
    return { ConfigType, keymapManager, item };
  },
  methods: {
    i18n(relativePath) {
      return this.$t("pages.tuning." + relativePath);
    }
  }
});
</script>

<style scoped>

</style>
