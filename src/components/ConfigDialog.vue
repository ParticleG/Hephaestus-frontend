<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
    style="min-width: 50vw">
    <q-card class="q-dialog-plugin hide-scrollbar full-width">
      <q-card-section>
        <div class="text-h6">{{ i18n("labels.title") }}</div>
      </q-card-section>
      <q-card-section>
        <ConfigBrief
          :configs="effectManager.items"
          first-caption="animationType"
          v-model="effectManager.index"
          @delete:index="effectManager.remove($event)" />
      </q-card-section>
      <q-separator v-if="uploadPreview.length!==0" />
      <q-card-section v-if="uploadPreview.length!==0">
        <div class="text-h6">{{ i18n("labels.preview") }}</div>
      </q-card-section>
      <q-card-section v-if="uploadPreview.length!==0">
        <ConfigBrief
          :configs="uploadPreview"
          @delete:index="deleteUpload($event)" />
      </q-card-section>
      <q-card-actions class="q-pa-md q-gutter-sm" align="right">
        <q-btn
          color="positive"
          icon="mdi-book-plus"
          outline
          padding="sm"
          @click.stop="effectManager.create" />
        <q-file
          accept=".json"
          dense
          :label="i18n('labels.importConfig')"
          outlined
          multiple
          v-model="uploadFiles">
          <template v-slot:append>
            <q-btn
              flat
              icon="mdi-upload"
              round
              padding="xs"
              @click.stop="importConfig" />
          </template>
        </q-file>
        <q-space />
        <q-btn
          color="primary"
          :label="i18n('labels.close')"
          no-caps
          @click="cancel" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useDialogPluginComponent } from "quasar";

import ConfigBrief from "components/ConfigBrief";
import { useEffectManagerStore } from "stores/effectManager";

export default defineComponent({
  name: "ConfigDialog",
  components: { ConfigBrief },
  emits: [...useDialogPluginComponent.emits],
  setup() {
    const { dialogRef, onDialogHide } = useDialogPluginComponent();
    const effectManager = useEffectManagerStore();
    const uploadFiles = ref([]);
    const uploadPreview = ref([]);
    return {
      dialogRef,
      onDialogHide,
      effectManager,
      uploadFiles,
      uploadPreview
    };
  },
  watch: {
    uploadFiles: {
      async handler(files) {
        this.uploadPreview = [];
        if (files) {
          for (const file of files) {
            this.uploadPreview.push(JSON.parse(await file.text()));
          }
        }
      },
      deep: true
    }
  },
  methods: {
    i18n(relativePath) {
      return this.$t("components.configDialog." + relativePath);
    },
    importConfig() {
      this.uploadFiles[0].text().then(res => {
        console.log(res);
      });
    },
    deleteUpload(index) {
      this.uploadFiles.splice(index, 1);
    },
    cancel() {
      this.hide();
    },
    confirm() {
      this.hide();
    }
  }
});
</script>

<style scoped>

</style>
