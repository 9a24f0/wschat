<template>
  <div>
    <div id="home">
      <a href="#" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="#" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <div class="face-button">
      <button><router-link to="/face1">face1</router-link></button>
      <button><router-link to="/face2">face2</router-link></button>
      <button><router-link to="/face3">face3</router-link></button>
    </div>

  </div>
</template>

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
