<script lang="ts">
import ChatHeader from '@/components/ChatHeader.vue';
import ChatLog from '@/components/ChatLog.vue';
import ChatInput from '@/components/ChatInput.vue'

export default {
  components: {
    ChatHeader,
    ChatLog,
    ChatInput
  },
  data() {
    return {
      socket: new WebSocket('ws:/localhost:3000'),
      messageList: [
        { id: 0, message: "Hello"},
        { id: 1, message: "Bonjour"},
        { id: 2, message: "Konichiwa"},
      ]
    }
  },
  mounted() {
    this.socket.onmessage = (event) => {
      this.messageList.push( {id: this.messageList.length, message: event.data })
    }
  },
  methods: {
    sendMessage(message: string) {
      this.socket.send(message);
    }
  }
}
</script>

<template>
  <div class="bg-slate-700 flex justify-center h-screen">
    <div class="w-96 bg-slate-800 flex flex-col">
      <ChatHeader></ChatHeader>
      <ChatLog :messageList="messageList"></ChatLog>
      <ChatInput @send-message="sendMessage"></ChatInput>
    </div>
  </div>
</template>
