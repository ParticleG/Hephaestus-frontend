export default {
  components: {
    configDialog: {
      labels: {
        title: "Edit configurations",
        newConfig: "New config",
        anonymousDevice: "Anonymous device",
        cancel: "Cancel",
        confirm: "Confirm"
      }
    },
    configManager: {
      labels: {
        manageConfigs: "Manage configs",
        shareConfig: "Share config",
        exportConfig: "Export config"
      }
    },
    configSection: {
      labels: {
        configName: "Config name: "
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
        screen: "Screen",
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
        screen: "Matches area of screen",
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
  layouts: {
    drawers: {
      main: {
        labels: {
          dashboard: "Dashboard",
          designer: "Designer",
          tuning: "Tuning"
        }
      }
    },
    headers: {
      main: {
        labels: {
          title: "Configurator",
          noConfig: "No config"
        }
      }
    },
    footers: {
      main: {
        labels: {
          title: "Configurator"
        }
      }
    },
    main: {}
  },
  pages: {
    dashboard: {
      labels: {
        title: "Keyboard Configurator",
        intro: "A configurator for custom keyboard"
      }
    },
    designer: {
      labels: {}
    }
  }
};
