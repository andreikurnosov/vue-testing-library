<template>
  <div class="hello">
    <button @click="show = true" role="show-text"></button>
    <div v-if="show">
      {{ msg }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      show: false
    }
  }
})
</script>
