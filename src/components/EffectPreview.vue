<template>
  <q-card>
    <q-card-section>
      <q-skeleton
        animation="fade"
        height="200px" />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn
        color="accent"
        outline>
        {{ i18n("labels.sync") }}
      </q-btn>
      <q-btn
        color="primary">
        {{ i18n("labels.confirm") }}
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EffectPreview",
  created() {

  },
  methods: {
    i18n(relativePath) {
      return this.$t("components.effectPreview." + relativePath);
    }
  }
});
</script>

<style scoped>

</style>
