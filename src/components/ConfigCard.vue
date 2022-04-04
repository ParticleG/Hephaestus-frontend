<template>
  <q-card
    v-ripple
    @click="log('card')">
      <q-card-section class="q-pt-xs">
        <div class="text-subtitle1 q-mt-sm q-mb-xs">
          “组队啦”——大学生自己的交流组队平台
        </div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </q-card-section>

    <q-separator/>

    <q-card-actions
      class="text-dark"
      align="right">
      <q-btn
        v-show="liked"
        color="red"
        dense
        flat
        icon="favorite"
        @click.stop.prevent="liked = !liked">
        19
      </q-btn>
      <q-btn
        v-show="!liked"
        dense
        flat
        icon="favorite_border"
        @click.stop.prevent="liked = !liked">
        18
      </q-btn>
      <q-btn
        v-show="collected"
        color="amber"
        dense
        flat
        icon="star"
        @click.stop.prevent="collected = !collected">
        7
      </q-btn>
      <q-btn
        v-show="!collected"
        dense
        flat
        icon="star_border"
        @click.stop.prevent="collected = !collected">
        6
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "ConfigCard"
};
</script>

<style scoped>

</style>
