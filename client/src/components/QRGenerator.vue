<script setup>
import { toString } from "qrcode";
import { useRouter } from "vue-router";
import { reactive, ref, watch } from "vue";
import "./QRGenerator.scss";
import { DoubleRightOutlined } from "@ant-design/icons-vue";

const qr = reactive({
  url: "",
  svg_output: "",
  url_input: "",
  url_input_timeout: null,
  color_timeout: null,
});
const color = ref("#000000");

watch(color, () => {
  if (qr.color_timeout) clearTimeout(qr.color_timeout);

  qr.color_timeout = setTimeout(() => {
    generateQr();
  }, 250);
});
const generateQr = () => {
  qr.url = qr.url.trim(); // trim spaces

  if (!qr.url) {
    qr.output = null;
    return;
  }
  toString(
    qr.url,
    { color: { dark: color.value, light: "#0000" } },
    (err, string) => {
      if (err) throw err;
      qr.output = string;
    }
  );
};

const router = useRouter();
const gotoRoomChat = () => {
  console.log("tuancan", qr.url_input);
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
</script>

<template>
  <div id="QRcode">
    <div class="container">
      <div class="QRcode-input">
        <div class="input">
          <input
            class="input"
            v-model="qr.url_input"
            type="text"
            id="url"
            @input="debounceSearch"
            placeholder="https://manolisliolios@github.io/easy-qr"
          />
        </div>

        <div class="color">
          <div>
            <input
              class="input"
              v-model="color"
              type="text"
              id="qr-color-val"
              name="qr-color-val"
            />
          </div>

          <div class="color-box">
            <input
              v-model="color"
              type="color"
              id="qr-color"
              name="qr-color"
              class="color-input"
            />
          </div>
        </div>
        <div class="go-room" @click="gotoRoomChat">
          <double-right-outlined /> Go Room
        </div>
      </div>
      <div v-if="qr.output" class="text-center">
        <div class="grid md:grid-cols-2 items-center">
          <div v-html="qr.output" class="viewer mx-auto"></div>
        </div>
      </div>
    </div>
  </div>
</template>
