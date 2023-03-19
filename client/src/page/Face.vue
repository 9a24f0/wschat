<template>
  <div id="face">
    <div class="container">
      <div class="background-avatar">
        <img :src="faceCurrent.srcImg" alt="" />
      </div>
      <header class="header">
        <div class="icon"><arrow-left-outlined /></div>
        <div class="header-main">
          <div class="header-main-avatar">
            <img :src="faceCurrent.srcImg" />
            <div class="header-main-avatar-online"></div>
          </div>
          <div class="header-main-infor">
            <div class="header-main-name">{{ faceCurrent.name }}</div>
            <div class="header-main-nick">Hoạt động 10 phút trước</div>
          </div>
        </div>
        <div class="header-contact">
          <div class="header-phone icon">
            <phone-outlined style="color: aqua" />
          </div>
          <div class="header-video icon">
            <video-camera-outlined style="color: aqua" />
          </div>
          <div class="header-video icon">
            <info-circle-outlined style="color: aqua" />
          </div>
        </div>
      </header>
      <main class="body-chat-box">
        <ul class="main-chat">
          <li
            class="main-liter"
            v-for="item in chat1"
            :key="item.face"
            :class="this.face == item.face ? 'reverse' : ''"
          >
            <img :src="item.srcImg" />
            <span class="">{{ item.text }} </span>
          </li>
        </ul>
      </main>
      <footer class="footer">
        <div class="icon"><setting-outlined /></div>
        <div class="icon"><camera-outlined /></div>
        <div class="icon"><file-image-outlined /></div>
        <div class="icon"><audio-outlined /></div>
        <div class="text-chat">
          <textarea
            placeholder=""
            id="w3review"
            name="w3review"
            rows="2"
            v-model="textChat"
          ></textarea>
          <div class="icon"><smile-outlined /></div>
        </div>
        <div class="icon" @click="sendMessage"><send-outlined /></div>
      </footer>
    </div>
  </div>
</template>
<script>
import "./face.scss";
import {
  ArrowLeftOutlined,
  PhoneOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  CameraOutlined,
  FileImageOutlined,
  AudioOutlined,
  LikeOutlined,
  InfoCircleOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons-vue";
export default {
  props: ["face"],
  methods: {
    sendMessage() {
      const itemChat = {
        srcImg: this.faceCurrent.srcImg,
        face: this.face,
        text: this.textChat,
      };
      this.chat.unshift(itemChat);
      this.textChat = "";
      console.log("tuancan", this.face, itemChat);
    },
  },
  components: {
    SmileOutlined,
    ArrowLeftOutlined,
    PhoneOutlined,
    VideoCameraOutlined,
    SettingOutlined,
    CameraOutlined,
    FileImageOutlined,
    AudioOutlined,
    LikeOutlined,
    InfoCircleOutlined,
    SendOutlined,
  },
  created() {
    if (this.face === "face1") {
      this.faceCurrent = this.face1;
    }
    if (this.face === "face2") {
      this.faceCurrent = this.face2;
    }
    if (this.face === "face3") {
      this.faceCurrent = this.face3;
    }
  },
  computed: {
    chat1() {
      return this.chat;
    },
  },
  data() {
    return {
      textChat: "",
      faceCurrent: null,
      face1: {
        srcImg: "https://nguoinoitieng.tv/images/nnt/103/0/bg5a.jpg",
        name: "Nguyễn Thị Hiền Lương",
      },
      face2: {
        srcImg:
          "https://photo-cms-plo.epicdn.me/w850/Uploaded/2023/xpckxpiu/2021_02_23/plo-1_qkis.jpg",
        name: "Sơn Tùng",
      },
      face3: {
        srcImg:
          "https://avatar-ex-swe.nixcdn.com/singer/avatar/2018/01/24/a/3/d/e/1516765405718_600.jpg",
        name: "Lê Bảo Bình",
      },
      chat: [
        {
          srcImg: "https://nguoinoitieng.tv/images/nnt/103/0/bg5a.jpg",
          face: "face1",
          text: "Đi hat khong",
        },
        {
          srcImg:
            "https://photo-cms-plo.epicdn.me/w850/Uploaded/2023/xpckxpiu/2021_02_23/plo-1_qkis.jpg",
          face: "face2",
          text: "khong, vo t dang o nha",
        },
        {
          srcImg:
            "https://avatar-ex-swe.nixcdn.com/singer/avatar/2018/01/24/a/3/d/e/1516765405718_600.jpg",
          face: "face3",
          text: "de toi mai di",
        },
        {
          srcImg: "https://nguoinoitieng.tv/images/nnt/103/0/bg5a.jpg",
          face: "face1",
          text: "hazz. chan chung may ghe",
        },
        {
          srcImg:
            "https://photo-cms-plo.epicdn.me/w850/Uploaded/2023/xpckxpiu/2021_02_23/plo-1_qkis.jpg",
          face: "face2",
          text: "hom nay chan qua",
        },
        {
          srcImg:
            "https://avatar-ex-swe.nixcdn.com/singer/avatar/2018/01/24/a/3/d/e/1516765405718_600.jpg",
          face: "face3",
          text: "thoi o nha di",
        },
      ],
    };
  },
};
</script>
