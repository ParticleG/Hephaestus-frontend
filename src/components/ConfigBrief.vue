<template>
  <q-list
    class="non-selectable"
    bordered
    separator>
    <q-item
      v-for="(config, index) in configs"
      :key="index"
      clickable
      v-ripple
      @click="selected = index">
      <q-item-section>
        <q-item-label
          :class="selected === index ? 'text-primary' : ''"
          lines="2">
          {{ config[firstLabel] ? config[firstLabel] : i18n("labels.anonymous") }}
        </q-item-label>
        <q-item-label
          :class="selected === index ? 'text-primary' : ''"
          caption>
          {{ config[firstCaption] }}
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <q-item-label
          :class="selected === index ? 'text-primary' : ''"
          lines="2">
          {{ config[secondLabel] }}
        </q-item-label>
        <q-item-label
          :class="selected === index ? 'text-primary' : ''"
          caption>
          {{ config[secondCaption] }}
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn
          color="primary"
          icon="mdi-download"
          outline
          padding="xs"
          round
          @click.stop="exportConfig(config)" />
      </q-item-section>
      <q-item-section side>
        <q-btn
          color="negative"
          icon="mdi-delete"
          outline
          padding="xs"
          round
          @click.stop="deleteConfig(index)" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "ConfigBrief",
  props: {
    modelValue: {
      type: Number,
      default: -1
    },
    configs: {
      type: Array,
      required: true
    },
    firstLabel: {
      type: String,
      default: "name"
    },
    firstCaption: {
      type: String,
      default: ""
    },
    secondLabel: {
      type: String,
      default: ""
    },
    secondCaption: {
      type: String,
      default: ""
    }
  },
  setup(props, { emit }) {
    const selected = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return { selected };
  },
  methods: {
    i18n(relativePath) {
      return this.$t("components.configBrief." + relativePath);
    },
    exportConfig(config) {
      saveAs(
        new Blob([JSON.stringify(config, null, 2)], {
          type: "text/json"
        }),
        config.name + ".json"
      );
    },
    deleteConfig(index) {
      this.$emit("delete:index", index);
    }
  }
});
</script>

<style scoped>

</style>
