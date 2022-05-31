export default Object.freeze({
  /** Alphabetic */
  KeyA: 0x04,  // a and A
  KeyB: 0x05,  // b and B
  KeyC: 0x06,  // c and C
  KeyD: 0x07,  // d and D
  KeyE: 0x08,  // e and E
  KeyF: 0x09,  // f and F
  KeyG: 0x0A,  // g and G
  KeyH: 0x0B,  // h and H
  KeyI: 0x0C,  // i and I
  KeyJ: 0x0D,  // j and J
  KeyK: 0x0E,  // k and K
  KeyL: 0x0F,  // l and L
  KeyM: 0x10,  // m and M
  KeyN: 0x11,  // n and N
  KeyO: 0x12,  // o and O
  KeyP: 0x13,  // p and P
  KeyQ: 0x14,  // q and Q
  KeyR: 0x15,  // r and R
  KeyS: 0x16,  // s and S
  KeyT: 0x17,  // t and T
  KeyU: 0x18,  // u and U
  KeyV: 0x19,  // v and V
  KeyW: 0x1A,  // w and W
  KeyX: 0x1B,  // x and X
  KeyY: 0x1C,  // y and Y
  KeyZ: 0x1D,  // z and Z
  Digit1: 0x1E,  // 1 and !
  Digit2: 0x1F,  // 2 and @
  Digit3: 0x20,  // 3 and #
  Digit4: 0x21,  // 4 and $
  Digit5: 0x22,  // 5 and %
  Digit6: 0x23,  // 6 and ^
  Digit7: 0x24,  // 7 and &
  Digit8: 0x25,  // 8 and *
  Digit9: 0x26,  // 9 and (
  Digit0: 0x27,  // 0 and )
  /** Basic Functions */
  Enter: 0x28,         // ENTER
  Escape: 0x29,           // ESCAPE
  Backspace: 0x2A,     // Backspace
  Tab: 0x2B,           // Tab
  Space: 0x2C,         // SpaceBar
  Minus: 0x2D,           // - and _(underscore)
  Equal: 0x2E,         // = and +
  BracketLeft: 0x2F,   // [ and {
  BracketRight: 0x30,  // ] and }
  Backslash: 0x31,     // \ and |
  Semicolon: 0x33,     // ; and :
  Quote: 0x34,     // ‘ and “
  Backquote: 0x35,    // `(Grave Accent) and ~(Tilde)
  Comma: 0x36,         //, and <
  Period: 0x37,           // . and >
  Slash: 0x38,         // / and ?
  CapsLock: 0x39,      // Caps Lock
  /** Basic Macros */
  F1: 0x3A,  // Keyboard F1
  F2: 0x3B,  // Keyboard F2
  F3: 0x3C,  // Keyboard F3
  F4: 0x3D,  // Keyboard F4
  F5: 0x3E,  // Keyboard F5
  F6: 0x3F,  // Keyboard F6
  F7: 0x40,  // Keyboard F7
  F8: 0x41,  // Keyboard F8
  F9: 0x42,  // Keyboard F9
  F10: 0x43,  // Keyboard F10
  F11: 0x44,  // Keyboard F11
  F12: 0x45,  // Keyboard F12
  /** Controls */
  PrintScreen: 0x46,  // Keyboard PrintScreen
  ScrollLock: 0x47,  // Keyboard Scroll Lock
  Pause: 0x48,  // Keyboard Pause
  Insert: 0x49,  // Keyboard Insert
  Home: 0x4A,  // Keyboard Home
  PageUp: 0x4B,  // Keyboard PageUp
  Delete: 0x4C,  // Keyboard Delete
  End: 0x4D,  // Keyboard End
  PageDown: 0x4E,  // Keyboard PageDown
  /** Directions */
  ArrowRight: 0x4F,  // Keyboard RightArrow
  ArrowLeft: 0x50,  // Keyboard LeftArrow
  ArrowDown: 0x51,  // Keyboard DownArrow
  ArrowUp: 0x52,  // Keyboard UpArrow
  /** Numpad */
  NumLock: 0x53,  // Keypad Num Lock and Clear
  NumpadDivide: 0x54,  // Keypad /
  NumpadMultiply: 0x55,  // Keypad *
  NumpadSubtract: 0x56,  // Keypad -
  NumpadAdd: 0x57,  // Keypad +
  NumpadEnter: 0x58,  // Keypad ENTER
  Numpad1: 0x59,  // Keypad 1 and End
  Numpad2: 0x5A,  // Keypad 2 and Down Arrow
  Numpad3: 0x5B,  // Keypad 3 and PageDn
  Numpad4: 0x5C,  // Keypad 4 and Left Arrow
  Numpad5: 0x5D,  // Keypad 5
  Numpad6: 0x5E,  // Keypad 6 and Right Arrow
  Numpad7: 0x5F,  // Keypad 7 and Home
  Numpad8: 0x60,  // Keypad 8 and Up Arrow
  Numpad9: 0x61,  // Keypad 9 and PageUp
  Numpad0: 0x62,  // Keypad 0 and Insert
  NumpadDecimal: 0x63,  // Keypad . and Delete
  /** Extra Functions */
  LaunchApp1: 0x65,  // Keyboard Application
  F13: 0x68,  // Keyboard F13
  F14: 0x69,  // Keyboard F14
  F15: 0x6A,  // Keyboard F15
  F16: 0x6B,  // Keyboard F16
  F17: 0x6C,  // Keyboard F17
  F18: 0x6D,  // Keyboard F18
  F19: 0x6E,  // Keyboard F19
  F20: 0x6F,  // Keyboard F20
  F21: 0x70,  // Keyboard F21
  F22: 0x71,  // Keyboard F22
  F23: 0x72,  // Keyboard F23
  F24: 0x73,  // Keyboard F24
  /** Basic Auxiliaries */
  ControlLeft: 0xE0,
  ShiftLeft: 0xE1,
  AltLeft: 0xE2,
  MetaLeft: 0xE3,
  ControlRight: 0xE4,
  ShiftRight: 0xE5,
  AltRight: 0xE6,
  MetaRight: 0xE7,
  /** Volume Controls */
  AudioVolumeMute: 0x80,
  AudioVolumeUp: 0x81,
  AudioVolumeDown: 0x82
});
