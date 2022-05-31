import { defineStore } from "pinia";

export default function(id, storagePrefix, defaultConfig) {
  return defineStore(id, {
    state: () => ({
      items: [],
      index: 0
    }),
    getters: {
      item: (state) => {
        return state.items[state.index];
      }
    },
    actions: {
      init(localStorage) {
        if (localStorage.has(`${storagePrefix}items`)) {
          let items = localStorage.getItem(`${storagePrefix}items`);
          if (Array.isArray(items)) {
            this.items = items;
          }
        }
        if (this.items.length === 0) {
          this.items = [JSON.parse(defaultConfig)];
        }
        if (localStorage.has(`${storagePrefix}index`)) {
          this.index = localStorage.getItem(`${storagePrefix}index`);
        }
        if (this.item === undefined) {
          this.index = 0;
        }
      },
      save(localStorage) {
        localStorage.set(`${storagePrefix}items`, this.items);
        localStorage.set(`${storagePrefix}index`, this.index);
      },
      create() {
        this.items.push(JSON.parse(defaultConfig));
        this.index = this.items.length - 1;
      },
      remove(index) {
        this.items.splice(index, 1);
        if (this.index > index) {
          this.index--;
        }
      },
      refresh() {
        this.$patch();
      },
    }
  });
}
