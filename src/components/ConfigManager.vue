<template>
  <q-card>
    <ConfigSection v-model="configurations[selected]" />
    <q-card-actions align="right">
      <q-btn
        flat
        icon="file_download"
        no-caps>
        {{ i18n("labels.exportConfig") }}
      </q-btn>
      <q-btn
        flat
        icon="share"
        no-caps>
        {{ i18n("labels.shareConfig") }}
      </q-btn>
      <q-btn
        flat
        icon="mdi-book-cog-outline"
        no-caps
        @click="toggleDialog()">
        {{ i18n("labels.manageConfigs") }}
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

import ConfigDialog from "components/ConfigDialog";
import ConfigSection from "components/ConfigSection";

export default defineComponent({
  name: "ConfigManager",
  components: { ConfigSection },
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    configs: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const selected = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    const configurations = computed({
      get: () => props.configs,
      set: (value) => emit("update:configs", value)
    });
    return { selected, configurations };
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
    toggleDialog() {
      if (!this.dialogOpen) {
        this.dialogOpen = true;
        this.$q.dialog({
          component: ConfigDialog,
          componentProps: {
            modelValue: this.modelValue,
            configs: this.configs,
            selectCallback: (index) => {
              this.selected = index;
            },
            insertCallback: (config) => {
              this.configurations.push(config);
              this.selected = this.configurations.length - 1;
            },
            removeCallback: (index) => {
              this.configurations.splice(index, 1);
              this.selected = index === 0 ? 0 : index - 1;
            }
          }
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
