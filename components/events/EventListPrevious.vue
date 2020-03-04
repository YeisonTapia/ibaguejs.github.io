<template>
  <v-row
    class="py-12"
    align="center"
    justify="center">
    <v-col class="text-center my-12 py-12" cols="12">
      <pre>{{events}}</pre>
    </v-col>
  </v-row>
</template>

<script>

export default {
  props:{
    events:{
      type: Array,
      default: () => []
    }
  },
}
</script>

<style>

</style>