<template>
  <div id="QRcode">
    <div class="container">
      <div class="QRcode-input">
        <div class="QRcode-input-item">
          <Input
            placeholder="channel-name"
            ref="channelRoom"
            @debounceSearch="debounceSearch"
          />
        </div>
        <div class="QRcode-input-item">
          <Input placeholder="Username" ref="username" />
        </div>
        <div>
          <buttonVue @click="gotoRoomChat" content="Go Room" />
        </div>
      </div>
      <div v-if="qr.output">
        <div v-html="qr.output" class="img-qrcode"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { toString } from "qrcode";
import Input from "../input/Input.vue";
import buttonVue from "../button/button.vue";
export default {
  components: { Input, buttonVue },
  data() {
    return {
      username: "",
      qr: {
        url: "",
        svg_output: "",
        url_input: "",
        url_input_timeout: null,
      },
    };
  },
  methods: {
    generateQr() {
      this.qr.url = this.qr.url.trim();
      if (!this.qr.url) {
        this.qr.output = null;
        return;
      }
      toString(
        this.qr.url,
        { color: { dark: "#000000", light: "#0000" } },
        (err, string) => {
          if (err) throw err;
          this.qr.output = string;
        }
      );
    },
    gotoRoomChat() {
      window.localStorage.setItem('username', this.$refs.username.value)
      this.$router.push(`/${this.$refs.channelRoom.value}`);
    },
    debounceSearch(text) {
      if (this.qr.url_input_timeout) {
        clearTimeout(this.qr.url_input_timeout);
      }
      this.qr.url_input_timeout = setTimeout(() => {
        this.qr.url = text;
        this.generateQr();
      }, 400);
    },
  },
};
</script>
<style scoped lang="scss">
#QRcode {
  width: 100%;
  .container {
    .QRcode-input {
      display: flex;
      width: 100%;
      gap: 12px;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
      flex-wrap: wrap;
      &-item {
        flex: 1;
      }
    }

    .img-qrcode {
      padding: 12px;
      border: 1px solid #fff;
      border-radius: 20px;
      background-color: #fff;
      width: 100%;
    }
  }
}
</style>
