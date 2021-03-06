<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { Notify, useQuasar } from "quasar";

import { useEffectManagerStore } from "stores/effectManager";
import { useKeymapManagerStore } from "stores/keymapManager";

export default defineComponent({
  name: "App",
  setup() {
    const $q = useQuasar();
    if ($q.localStorage.has("hephaestus.settings.darkMode")) {
      $q.dark.set($q.localStorage.getItem("hephaestus.settings.darkMode"));
    } else {
      $q.dark.set("auto");
    }
    const effectManager = useEffectManagerStore();
    const keymapManager = useKeymapManagerStore();
    return { effectManager, keymapManager };
  },
  created() {
    if (this.$q.localStorage.has("hephaestus.settings.language")) {
      this.$i18n.locale = this.$q.localStorage.getItem("hephaestus.settings.language");
    } else {
      this.$i18n.locale = this.$q.lang.getLocale();
    }
    this.initStores();
    this.initWebSocket();
    this.initHid();

    /** @property {Object} window */
    window.addEventListener("beforeunload", this.beforeUnload);
  },
  methods: {
    i18n(relativePath) {
      return this.$t("global.app." + relativePath);
    },
    initStores() {
      this.effectManager.init(this.$q.localStorage);
      this.keymapManager.init(this.$q.localStorage);
    },
    initWebSocket() {
      this.$ws.setOnOpen(() => {
        Notify.create({
          type: "info",
          message: this.i18n("notifications.ws.onConnect"),
          icon: "mdi-server"
        });
        this.$ws.sendObject({
          action: 0,
          data: {
            path: this.$hid.path,
            count: 16
          }
        });
      });
      this.$ws.setOnError((event) => {
        console.log(event);
      });
      this.$ws.setOnClose((event) => {
        Notify.create({
          type: "info",
          message: this.i18n("notifications.ws.onDisconnect"),
          icon: "mdi-server-off"
        });
      });
      this.$ws.registerHandler(0, (message) => {
        if (message.type !== "client") {
          Notify.create({
            type: "warning",
            message: this.i18n("notifications.ws.actions.0.failed") + this.$t(message.reason),
            icon: "mdi-keyboard-off"
          });
        } else {
          Notify.create({
            type: "positive",
            message: this.i18n("notifications.ws.actions.0.success"),
            icon: "mdi-keyboard"
          });
          console.log("Device connected: ", message.data);
        }
      });
      this.$ws.registerHandler(1, (message) => {
        if (message.type !== "client") {
          Notify.create({
            type: "warning",
            message: this.i18n("notifications.ws.actions.1.failed") + this.$t(message.reason),
            icon: "mdi-message-alert"
          });
        }
      });
    },
    initHid() {
      navigator["hid"].addEventListener("connect", () => {
        Notify.create({
          type: "positive",
          message: this.i18n("notifications.hid.onConnect"),
          icon: "link"
        });
      });
      navigator["hid"].addEventListener("disconnect", () => {
        Notify.create({
          type: "warning",
          message: this.i18n("notifications.hid.onDisconnect"),
          icon: "link_off"
        });
      });
    },
    beforeUnload() {
      this.effectManager.save(this.$q.localStorage);
      this.keymapManager.save(this.$q.localStorage);
    }
  }
});
</script>
