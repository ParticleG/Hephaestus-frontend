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
        <q-list
          class="non-selectable"
          bordered
          separator>
          <q-item
            v-for="(config, index) in configs"
            :key="index"
            v-ripple>
            <q-item-section>
              <q-item-label
                :class="index===selected?'text-primary':''"
                lines="2">
                {{ config.name ? config.name : i18n("labels.newConfig") }}
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label :class="index===selected?'text-primary':''" caption>
                {{ config.deviceName ? config.deviceName : i18n("labels.anonymousDevice") }}
              </q-item-label>
              <q-icon name="keyboard" color="primary" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          :label="i18n('labels.cancel')"
          @click="cancel" />
        <q-btn
          color="primary"
          flat
          :label="i18n('labels.confirm')"
          @click="confirm" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useDialogPluginComponent } from "quasar";

export default defineComponent({
  name: "ConfigDialog",
  emits: [...useDialogPluginComponent.emits],
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    configs: {
      type: Array,
      required: true
    },
    selectCallback: {
      type: Function, default: (value) => {
        console.log(value);
      }
    },
    insertCallback: {
      type: Function, default: (value) => {
        console.log(value);
      }
    },
    removeCallback: {
      type: Function, default: (value) => {
        console.log(value);
      }
    }
  },
  setup(props) {
    const { dialogRef, onDialogHide } = useDialogPluginComponent();
    const selected = computed({
      get: () => props.modelValue,
      set: (value) => props.selectCallback(value)
    });
    return {
      dialogRef,
      onDialogHide,
      selected
    };
  },
  methods: {
    i18n(relativePath) {
      return this.$t("components.configDialog." + relativePath);
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
