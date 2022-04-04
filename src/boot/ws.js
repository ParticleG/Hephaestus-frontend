import { reactive } from "vue";
import { boot } from "quasar/wrappers";
import { Notify } from "quasar";

const baseUrl = "ws://localhost:38081/hephaestus";

const WebSocketHelper = reactive({
  ws: new WebSocket(baseUrl + "/ws/v1/hid"),
  handlers: {},
  setOnOpen(handler) {
    this.ws.onopen = handler;
  },
  setOnError(handler) {
    this.ws.onerror = handler;
  },
  setOnClose(handler) {
    this.ws.onclose = handler;
  },
  send(message) {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(message);
    } else {
      console.log("WebSocket not connected");
    }
  },
  sendObject(object) {
    this.send(JSON.stringify(object));
  },
  registerHandler(action, handler) {
    this.handlers[action] = handler;
  },
  removeHandler(action) {
    delete this.handlers[action];
  }
});

WebSocketHelper.ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.action in WebSocketHelper.handlers) {
    WebSocketHelper.handlers[message.action](message);
  } else {
    Notify.create({
      type: "warning",
      message: `Unknown action(${message.action}): ${message}`,
      icon: "mdi-message-question"
    });
  }
};

export default boot(({ app }) => {
  app.config.globalProperties.$ws = WebSocketHelper;
});
