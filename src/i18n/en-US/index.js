export default {
  components: {
    configBrief: {
      labels: {
        anonymous: "Anonymous"
      }
    },
    configDialog: {
      labels: {
        title: "Edit configurations",
        preview: "Import preview",
        importConfig: "Import from file",
        close: "Close"
      },
      notifications: {
        configDeleted: "Config deleted",
        configImported: "Config imported"
      }
    },
    configManager: {
      labels: {
        configName: "Config name: ",
        manageConfigs: "Manage configs",
        shareConfig: "Share config",
        exportConfig: "Export config"
      }
    },
    effectBreathing: {
      labels: {
        maxPeriod: "Breathing speed"
      }
    },
    effectColorCycle: {
      labels: {
        maxPeriod: "Loop speed",
        direction: "Cycle direction"
      }
    },
    effectRainbow: {
      labels: {
        maxPeriod: "Loop speed",
        direction: "Rainbow direction"
      }
    },
    effectStarryNight: {
      labels: {
        rangeTitle: "Shine speed range"
      }
    },
    effectStrobing: {
      labels: {
        maxPeriod: "Strobing speed"
      }
    },
    effectCard: {
      titles: {
        simple: "Simple",
        breathing: "Breathing",
        strobing: "Strobing",
        colorCycle: "Color Cycle",
        rainbow: "Rainbow",
        starryNight: "Starry Night",
        music: "Music",
        smart: "Smart",
        game: "Game",
        dark: "Dark",
        comet: "Comet",
        star: "Star",
        tide: "Tide",
        trigger: "Trigger"
      },
      descriptions: {
        simple: "Always on",
        breathing: "Fades in and out",
        strobing: "Flashed on and off",
        colorCycle: "Fades between the rainbow",
        rainbow: "A rolling multi-color flow",
        starryNight: "Mimic the starry night",
        music: "Beat of your music",
        smart: "Show hardware status",
        game: "Sync with your game",
        dark: "No light",
        comet: "Strike like a comet",
        star: "Shiny star",
        tide: "Moving color wave",
        trigger: "light up when triggered"
      },
      tooltips: {
        comingSoon: "Coming soon..."
      }
    },
    effectPreview: {
      labels: {
        sync: "Sync area",
        confirm: "Confirm"
      }
    },
    keySelector: {
      keycode: {
        0x001D: "Left Ctrl",
        0x002A: "Left Shift",
        0x0036: "Right Shift",
        0x0038: "Left Alt",
        0x0045: "Pause",
        0x0056: "IntlBackslash",
        0x0064: "F13",
        0x0065: "F14",
        0x0066: "F15",
        0x0067: "F16",
        0x0068: "F17",
        0x0069: "F18",
        0x006A: "F19",
        0x006B: "F20",
        0x006C: "F21",
        0x006D: "F22",
        0x006E: "F23",
        0x0073: "IntlRo",
        0x0076: "F24",
        0x0079: "Convert",
        0x007B: "NonConvert",
        0x007D: "IntlYen",
        0xE01D: "Right Ctrl",
        0xE021: "Launch App 2",
        0xE038: "Right Alt",
        0xE046: "Pause",
        0xE05B: "Left Win",
        0xE05C: "Right Win",
        0xE06B: "Launch App 1",
        0xE06C: "Launch Mail",
      }
    },
    languagesMenu: {
      labels: {}
    },
    settingsMenu: {
      labels: {
        darkMode: "Dark mode"
      }
    }
  },
  global: {
    app: {
      notifications: {
        hid: {
          onConnect: "Device connected",
          onDisconnect: "Device disconnected"
        },
        ws: {
          onConnect: "Connected to server",
          onDisconnect: "Disconnected from server",
          actions: [
            {
              success: "Device connected",
              failed: "Failed to connect: "
            },
            {
              failed: "Set animation failed: "
            }
          ]
        }
      }
    }
  },
  Hephaestus: {
    LedConnect: {
      alreadyConnected: "Already connected",
      deviceNotFound: "Device not found"
    },
    LedEffect: {
      deviceNotFound: "Device not found"
    }
  },
  layouts: {
    drawers: {
      main: {
        labels: {}
      }
    },
    headers: {
      main: {
        labels: {
          title: "Hephaestus",
          dashboard: "Dashboard",
          designer: "Designer",
          tuning: "Tuning"
        }
      }
    },
    footers: {
      main: {
        labels: {
          title: "Hephaestus"
        }
      }
    },
    main: {}
  },
  pages: {
    dashboard: {
      labels: {
        title: "Hephaestus",
        intro: "Custom gaming device configurator"
      }
    },
    designer: {
      labels: {}
    }
  }
};
