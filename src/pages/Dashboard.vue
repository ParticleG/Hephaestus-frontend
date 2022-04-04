<template>
  <q-page class="flex flex-center column q-gutter-lg">
    <div class="text-h1 text-weight-regular">
      {{ i18n("labels.title") }}
    </div>
    <div class="text-h5 text-grey">
      {{ i18n("labels.intro") }}
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardPage",
  methods: {
    i18n(relativePath) {
      return this.$t("pages.dashboard." + relativePath);
    }
  }
});
</script>
