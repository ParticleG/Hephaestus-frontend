<template>
  <q-page class="flex flex-center column q-gutter-lg" style="padding-top:10vh">
    <div class="text-h1 text-weight-regular">
      {{ i18n("labels.title") }}
    </div>
    <div class="text-h5 text-light">
      {{ i18n("labels.intro") }}
    </div>
    <q-avatar
      size="80vmin"
      square
      style="margin-top:-25vmin;z-index:-1">
      <q-img src="images/logo.png" alt="logo" />
    </q-avatar>
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
