import createStore from "src/scripts/createStore";

const storagePrefix = "hephaestus.effectManager.";

const defaultConfig = JSON.stringify({
  name: "default",
  animationType: "simple",
  animationDirection: true,
  startColor: "#000000",
  minPeriod: 500,
  maxPeriod: 1000
});

export const useEffectManagerStore = createStore(
  "effectManager",
  storagePrefix,
  defaultConfig
);
