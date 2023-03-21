<script setup>
import { toString } from "qrcode";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { DoubleRightOutlined } from "@ant-design/icons-vue";

const qr = reactive({
  url: "",
  svg_output: "",
  url_input: "",
  url_input_timeout: null,
});
const generateQr = () => {
  qr.url = qr.url.trim();
  if (!qr.url) {
    qr.output = null;
    return;
  }
  toString(
    qr.url,
    { color: { dark: "#000000", light: "#0000" } },
    (err, string) => {
      if (err) throw err;
      qr.output = string;
    }
  );
};

const router = useRouter();
const gotoRoomChat = () => {
  console.log("tuancan", username.value);
  router.push(`/${qr.url_input}`);
};

const debounceSearch = () => {
  if (qr.url_input_timeout) {
    clearTimeout(qr.url_input_timeout);
  }
  qr.url_input_timeout = setTimeout(() => {
    qr.url = qr.url_input;
    generateQr();
  }, 400);
};

const username = ref("");
</script>

<template>
  <div id="QRcode">
    <div class="container">
      <h1 class="tittel">Chat client with WEBSOCKET</h1>
      <div class="QRcode-input">
        <input
          class="input"
          v-model="qr.url_input"
          type="text"
          id="url"
          @input="debounceSearch"
          placeholder="channel-name"
        />
        <input
          class="input"
          v-model="username"
          type="text"
          id="qr-color-val"
          name="qr-color-val"
          placeholder="username"
        />
        <div class="go-room" @click="gotoRoomChat">
          <double-right-outlined /> Go Room
        </div>
      </div>
      <div v-if="qr.output">
        <div class="img-qrcode">
          <div v-html="qr.output" class="viewer mx-auto"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#QRcode {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
    .container{
        .tittel{
            width: 100%;
            text-align: center;
        }
        .QRcode-input {
            display: flex;
            width: 100%;
            gap: 12px;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
            flex-wrap: wrap;
    
            .color {
                position: relative;
    
                &-input {
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    top: 20%;
                    right: 0;
                    background-color: transparent;
                    border: none;
                }
            }

            input {
                padding: 12px 20px;
                margin: 0;
                display: block;
                min-width: 150px;
                border-radius: 8px;
                flex: 1;
            }

            .go-room {
                border-radius: 12px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                padding: 12px 20px;
                min-width: 100px;
                cursor: pointer;
    
                &:hover {
                    box-shadow: rgba(27, 216, 207, 0.2) 0px 7px 29px 0px;
                    background-color: rgba(27, 216, 207, 0.2);
                }
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
