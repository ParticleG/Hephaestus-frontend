<template>
  <q-card-section class="justify-between items-baseline" horizontal>
    <q-card-section>
      <q-input
        class="col-2"
        dense
        outlined
        hide-bottom-space
        v-model="config.name">
        <template v-slot:before>
          <div
            class="text-body1"
            :class="$q.dark.isActive?'text-light':'text-dark'">
            {{ i18n("labels.configName") }}
          </div>
        </template>
      </q-input>
    </q-card-section>
  </q-card-section>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "ConfigSection",
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const config = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return { config };
  },
  methods: {
    i18n(relativePath) {
      return this.$t("components.configSection." + relativePath);
    }
  }
});
</script>

<style scoped>

</style>
