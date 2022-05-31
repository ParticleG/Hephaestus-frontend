<template>
  <q-card>
    <q-card-section class="justify-between items-baseline" horizontal>
      <q-card-section>
        <q-input
          dense
          outlined
          hide-bottom-space
          v-model="item.name">
          <template v-slot:before>
            <div
              class="text-body1"
              :class="$q.dark.isActive?'text-light':'text-dark'">
              {{ i18n("labels.configName") }}
            </div>
          </template>
        </q-input>
      </q-card-section>
      <q-space />
      <q-card-section>
        <q-btn
          color="positive"
          dense
          icon="mdi-refresh"
          no-caps
          round
          unelevated
          @click="store.refresh" />
      </q-card-section>
      <q-card-section>
        <q-btn
          color="primary"
          icon="mdi-download"
          no-caps
          unelevated
          @click="exportConfig">
          {{ i18n("labels.exportConfig") }}
        </q-btn>
      </q-card-section>
      <q-card-section>
        <q-btn
          color="accent"
          icon="mdi-book-cog-outline"
          no-caps
          unelevated
          @click="toggleDialog">
          {{ i18n("labels.manageConfigs") }}
        </q-btn>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { saveAs } from "file-saver";
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";

import ConfigDialog from "components/ConfigDialog";

import { useEffectManagerStore } from "stores/effectManager";
import { useKeymapManagerStore } from "stores/keymapManager";
import ConfigType from "src/scripts/ConfigType";

export default defineComponent({
  name: "ConfigManager",
  props: {
    modelValue: {
      type: ConfigType,
      required: true
    }
  },
  setup(props) {
    let store;
    switch (props.modelValue) {
      case ConfigType.Description:
        break;
      case ConfigType.Effect:
        store = useEffectManagerStore();
        break;
      case ConfigType.Keymap:
        store = useKeymapManagerStore();
        break;
    }
    const { item } = storeToRefs(store);
    return { item, store };
  },
  data() {
    return {
      dialogOpen: ref(false)
    };
  },
  methods: {
    i18n(relativePath) {
      return this.$t("components.configManager." + relativePath);
    },
    exportConfig() {
      const blob = new Blob([JSON.stringify(this.item, null, 2)], {
        type: "text/json"
      });
      saveAs(blob, this.item.name + ".json");
    },
    toggleDialog() {
      if (!this.dialogOpen) {
        this.dialogOpen = true;
        this.$q.dialog({
          component: ConfigDialog
        }).onDismiss(() =>
          this.dialogOpen = false
        );
      }
    }
  }
});
</script>

<style scoped>

</style>
