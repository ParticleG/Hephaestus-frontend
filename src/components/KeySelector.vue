<template>
  <q-btn
    v-for="(key, index) in mapping"
    :key="index"
    class="q-px-md q-pb-sm"
    :color="currentRecording===index?'primary':''"
    outline
    @click="recordKey(index)"
    style="width: 10rem;">
    <div class="column items-center full-width">
      <div class="text-h6 text-center text-capitalize">
        {{ key.name }}
      </div>
      <q-icon class="q-pa-sm" :name="key.icon" size="4rem" />
      <div class="row q-gutter-sm items-center">
        <q-card v-if="keyIcon.hasOwnProperty(key.code)" bordered>
          <q-icon :class="currentRecording===index?'text-primary':''" :name="keyIcon[key.code]" />
        </q-card>
        <div class="text-body1 text-capitalize">
          {{ key.key }}
        </div>
      </div>
    </div>
  </q-btn>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

import keyIcon from "src/scripts/keyIcon";
import keymap from "src/scripts/keymap";

export default defineComponent({
  name: "KeySelector",
  props: {
    modelValue: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const currentRecording = ref(-1);
    const mapping = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return { currentRecording, keyIcon, keymap, mapping };
  },
  methods: {
    i18n(relativePath) {
      return this.$t("components.keySelector." + relativePath);
    },
    recordKey(index) {
      this.currentRecording = index;
      /** @property {Object} document */
      document.addEventListener("keydown", (e) => {
        // console.log(e);
        this.mapping[index].key = e.code;
        this.mapping[index].code = keymap[e.code];
        this.currentRecording = -1;
        e.preventDefault();
      }, { capture: true, once: true });
    }
  }
});
</script>

<style scoped>

</style>
