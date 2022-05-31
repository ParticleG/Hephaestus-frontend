export default class ConfigType {
  static Description = new ConfigType("description");
  static Effect = new ConfigType("effect");
  static Keymap = new ConfigType("keymap");

  constructor(name) {
    this.name = name;
  }
}
