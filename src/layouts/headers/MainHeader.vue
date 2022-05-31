<template>
  <q-header elevated>
    <q-toolbar class="q-electron-drag">
      <q-btn
        flat
        dense
        round
        icon="menu"
        @click="$emit('click:leftMenu')" />
      <q-avatar>
        <q-img src="images/icon.png" alt="logo" />
      </q-avatar>
      <q-toolbar-title>
        {{ i18n("labels.title") }}
      </q-toolbar-title>
      <q-tabs
        class="text-grey-5"
        active-color="white"
        inline-label
        mobile-arrows
        no-caps
        outside-arrows>
        <q-route-tab
          v-for="tab in tabs"
          :key="tab"
          :disable="tab.disable"
          exact
          :icon="tab.icon"
          :label="i18n(`labels.${tab.label}`)"
          ripple
          :to="tab.to" />
      </q-tabs>
      <q-space />
      <q-btn class="q-mx-sm" dense flat icon="language">
        <LanguagesMenu />
      </q-btn>
      <q-btn class="q-mx-sm" dense flat icon="settings">
        <SettingsMenu />
      </q-btn>
      <div v-if="$q.platform.is.electron" class="row q-ml-sm q-gutter-x-sm">
        <q-btn dense flat icon="minimize" @click="minimize" />
        <q-btn dense flat icon="crop_square" @click="toggleMaximize" />
        <q-btn dense flat icon="close" @click="closeApp" />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import SettingsMenu from "components/SettingsMenu";
import LanguagesMenu from "components/LanguagesMenu";

export default defineComponent({
  name: "MainHeader",
  components: { LanguagesMenu, SettingsMenu },
  setup() {
    const currentRoute = computed(() => {
      return useRoute().name;
    });
    const tabs = [
      {
        label: "dashboard",
        icon: "view_quilt",
        disable: false,
        to: "/dashboard"
      },
      {
        label: "designer",
        icon: "palette",
        disable: false,
        to: "/designer"
      },
      {
        label: "tuning",
        icon: "tune",
        disable: false,
        to: "/tuning"
      }
    ];
    return { currentRoute, tabs };
  },
  methods: {
    i18n(relativePath) {
      return this.$t("layouts.headers.main." + relativePath);
    },
    minimize() {
      if (process.env.MODE === "electron") {
        /** @property {Object} window */
        window["electronWindowApi"].minimize();
      }
    },
    toggleMaximize() {
      if (process.env.MODE === "electron") {
        /** @property {Object} window */
        window["electronWindowApi"].toggleMaximize();
      }
    },
    closeApp() {
      if (process.env.MODE === "electron") {
        /** @property {Object} window */
        window["electronWindowApi"].close();
      }
    }
  }
});
</script>

<style scoped>

</style>
