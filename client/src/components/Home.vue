<template>
  <div>
    <div id="home">
      <h1 style="margin-top: 50px">Chat client with WEBSOCKET</h1>
    </div>
    <!-- <div class="face-button">
      <button><router-link to="/face1">face1</router-link></button>
      <button><router-link to="/face2">face2</router-link></button>
      <button><router-link to="/face3">face3</router-link></button>
    </div> -->
    <QRGenerator></QRGenerator>
  </div>
</template>

<script>
import QRGenerator from "./QRGenerator.vue";

export default {
  components: { QRGenerator },
};
</script>
<style lang="scss">
#home {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.face-button {
  margin: 0 auto;
  text-align: center;

  button {
    margin: 0 50px;

    a {
      font-weight: bold;
      font-size: 24px;
    }
  }
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
