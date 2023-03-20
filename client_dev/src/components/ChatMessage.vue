<template>
  <div class="rounded-xl text-white px-2 py-2 mx-2 my-2 bg-slate-700">{{ message }}</div>
</template>

<script lang="ts">


export default {
  props: {
    message: String,
  }
}
</script>
