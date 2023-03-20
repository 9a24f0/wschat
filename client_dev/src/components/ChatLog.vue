<template>
  <div class="flex flex-col flex-grow">
    <ul v-for="messageItem in messageList" :key="messageItem.id">
      <ChatMessage :message="messageItem.message"></ChatMessage>
    </ul>
  </div>
</template>

<script lang="ts">
import ChatMessage from '@/components/ChatMessage.vue';
export default {
  name: 'ChatLog',
  props: ['messageList'],
  components: {
    ChatMessage,
  },
  // data: () => {
  //   return {
  //     messageList: [
  //       { id: 1, message: "Hello"},
  //       { id: 2, message: "Bonjour"},
  //       { id: 3, message: "Konichiwa"},
  //     ]
  //   }
  // }
}
</script>