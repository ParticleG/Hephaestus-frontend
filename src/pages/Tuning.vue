<template>
  <q-page class="flex row q-pa-lg">
    <div class="col-grow column q-pa-lg">
      <ConfigManager
        class="q-mb-lg"
        :configs="configs"
        v-model="selected" />
      <div class="text-h5 q-mb-md">
        Descriptions:
      </div>
      <q-list
        class="non-selectable q-mb-lg"
        bordered
        separator>
        <q-item
          v-for="(description,index) in configs[selected].descriptions"
          :key="index"
          v-ripple>
          <q-item-section>
            <q-item-label>{{ description["name"] }}</q-item-label>
            <q-item-label caption lines="2">
              {{ description["comment"] }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-chip>
              <q-avatar color="primary" text-color="white">
                {{ description["size"] }}
              </q-avatar>
              Bytes
            </q-chip>
          </q-item-section>
        </q-item>
      </q-list>
      <div class="text-h5 q-mb-md">
        Keymap:
      </div>
      <q-list
        class="non-selectable q-mb-lg"
        bordered
        separator>
        <q-item
          v-for="(keyCode,index) in configs[selected].keymap['mapping']"
          :key="index"
          v-ripple>
          <q-item-section>
            <q-item-label>{{ keyCode }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import ConfigManager from "components/ConfigManager";
import { useQuasar } from "quasar";
import { ANIMATION_TYPES } from "boot/config";

export default defineComponent({
  name: "TuningPage",
  components: { ConfigManager },
  setup() {
    const $q = useQuasar();

    let configs = reactive([{
      name: ref(""),
      device: ref("Anonymous"),
      type: ref("hid"),
      descriptions: ref([
        {
          name: "Example description",
          comment: "This is a demo comment",
          size: 1
        }
      ]),
      keymap: ref({
        layers: 1,
        mapping: [
          "GameKey1", "GameKey2", "GameKey3", "GameKey4",
          "GameKey5", "GameKey6", "GameKey7", "GameKey8",
          "GameKey9", "GameKey10", "GameKey11", "GameKey12",
          "GameKey13", "GameKey14", "GameKey15", "GameKey16",
          "GPIO_Input1", "GPIO_Input2", "GPIO_Input3",
          "Rotate1_Forward", "Rotate1_Reverse", "Rotate2_Forward", "Rotate2_Reverse"
        ]
      })
    }]);

    const selected = ref(0);

    if ($q.localStorage.has("hephaestus.configs.tuning")) {
      configs = reactive($q.localStorage.getItem("hephaestus.configs.tuning"));
    }
    if ($q.localStorage.has("hephaestus.lastStates.tuning")) {
      selected.value = $q.localStorage.getItem("hephaestus.lastStates.tuning");
    }
    if (configs[selected.value] === undefined) {
      selected.value = 0;
    }

    return { configs, selected, ANIMATION_TYPES };
  },
  watch: {
    configs: {
      handler(configs) {
        this.$ws.sendObject({
          action: 1,
          data: {
            path: this.$hid.path,
            config: configs[this.selected]
          }
        });
        this.$q.localStorage.set("hephaestus.configs.tuning", configs);
        this.$q.localStorage.set("hephaestus.lastStates.tuning", this.selected);
      },
      deep: true
    }
  },
  methods: {
    i18n(relativePath) {
      return this.$t("pages.tuning." + relativePath);
    }
  }
});
</script>

<style scoped>

</style>
