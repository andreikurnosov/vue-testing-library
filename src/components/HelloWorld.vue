<template>
  <div class="hello">
    <form @submit.prevent="submit">
      <label for="name">Name</label>
      <input v-model="name" id="name" />
      <button role="button" :disabled="!name.length">Submit</button>
    </form>
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
      name: ''
    }
  },
  methods: {
    submit() {
      this.$emit('submit', { name: this.name })
    }
  }
})
</script>
