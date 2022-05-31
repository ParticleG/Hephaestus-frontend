import { boot } from "quasar/wrappers";
import { reactive, ref } from "vue";
import { Notify } from "quasar";

const HidHelper = reactive({
  path: ref("\\\\?\\hid#vid_0483&pid_5750&col06#6&3d4f710&0&0005#{4d1e55b2-f16f-11cf-88cb-001111000030}"),
  device: ref(null),
  sentMessage: ref(null),
  receivedMessage: ref(null),

  connect(device) {
    this.device = device;
    this.device["open"]().then(() => {
      Notify.create({
        type: "positive",
        message: "Device connected",
        icon: "link"
      });
      this.device["addEventListener"]("inputreport", (e) => {
        this.receivedMessage = new Uint8Array(e.data.buffer);
      });
    }).catch((err) => {
      Notify.create({
        type: "negative",
        message: err.message,
        icon: "report_off"
      });
    });
  },

  disconnect() {
    if (this.device) {
      this.device["close"]().then(() => {
        this.device = null;
        Notify.create({
          type: "info",
          message: "Device closed",
          icon: "link_off"
        });
      });
    }
  },

  sendReport(id, data) {
    this.device["sendReport"](id, data).then(() => {
      this.sentMessage = data;
    }).catch((e) => {
      Notify.create({
        type: "negative",
        message: e.message,
        icon: "error"
      });
    });
  }
});

export default boot(({ app }) => {
  app.config.globalProperties.$hid = HidHelper;
});
