import createStore from "src/scripts/createStore";

const storagePrefix = "hephaestus.keymapManager.";

const defaultConfig = JSON.stringify({
  name: "default",
  keymap: {
    layers: 1,
    mapping: [
      {
        name: "GameKey1",
        icon: "mdi-gamepad-square",
        key: "undefined",
        code: 0x0
      },
      {
        name: "GameKey2",
        icon: "mdi-gamepad-square",
        key: "undefined",
        code: 0x0
      },
      {
        name: "GameKey3",
        icon: "mdi-gamepad-square",
        key: "undefined",
        code: 0x0
      },
      {
        name: "GameKey4",
        icon: "mdi-gamepad-square",
        key: "undefined",
        code: 0x0
      },
      {
        name: "GameKey5",
        icon: "mdi-gamepad-square",
        key: "undefined",
        code: 0x0
      },
      {
        name: "GameKey6",
        icon: "mdi-gamepad-square",
        key: "undefined",
        code: 0x0
      },
      {
        name: "GameKey7",
        icon: "mdi-gamepad-square",
        key: "undefined",
        code: 0x0
      },
      {
        name: "FuncKey1",
        icon: "mdi-keyboard-variant",
        key: "undefined",
        code: 0x0
      },
      {
        name: "FuncKey2",
        icon: "mdi-keyboard-variant",
        key: "undefined",
        code: 0x0
      },
      {
        name: "FuncKey3",
        icon: "mdi-keyboard-variant",
        key: "undefined",
        code: 0x0
      },
      {
        name: "FuncKey4",
        icon: "mdi-keyboard-variant",
        key: "undefined",
        code: 0x0
      },
      {
        name: "DiskForward",
        icon: "fa-solid fa-compact-disc",
        key: "undefined",
        code: 0x0
      },
      {
        name: "DiskBackward",
        icon: "fa-solid fa-compact-disc",
        key: "undefined",
        code: 0x0
      }
    ]
  }
});
export const useKeymapManagerStore = createStore(
  "keymapManager",
  storagePrefix,
  defaultConfig
);
