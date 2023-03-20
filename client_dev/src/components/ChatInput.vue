<template>
  <div class="h-16 px-2 justify-between bg-slate-900 place-items-center flex">
    <textarea class="bg-slate-800 w-4/5 h-12 rounded-xl resize-none text-white px-2 py-2" rows="2" v-model="message"></textarea>
    <button class="rounded-xl text-white bg-blue-600 px-4 py-2" @click="sendMessage">Send</button>
  </div>
</template>

<script lang="ts">
// import { socket } from '@/api'
export default {
  name: 'ChatInput',
  data() {
    return {
      message: '',
    }
  },
  methods: {
    sendMessage() {
      console.log(this.message)
      this.$emit("send-message", this.message)
    },
  }
}
  
</script>