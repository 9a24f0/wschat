<template>
  <div id="face">
    <div class="container">
      <div class="background-avatar">
        <img :src="imgAvatar" alt="" />
      </div>
      <header class="header">
        <div class="icon" @click="backHref"><arrow-left-outlined /></div>
        <div class="header-main">
          <div class="header-main-avatar">
            <img :src="imgAvatar" />
            <div class="header-main-avatar-online"></div>
          </div>
          <div class="header-main-infor">
            <div class="header-main-name">Channel : {{ channel }}</div>
            <div class="header-main-nick">Your name: {{ userName }}</div>
          </div>
        </div>
        <div class="header-contact">
          <!-- <div class="header-phone icon">
            <phone-outlined />
          </div>
          <div class="header-video icon">
            <video-camera-outlined  />
          </div>
          <div class="header-video icon">
            <info-circle-outlined />
          </div> -->
        </div>
      </header>
      <main class="body-chat-box">
        <ul class="main-chat" ref="msgContainer">
          <li
            class="main-liter"
            v-for="item in messageList"
            :key="item.id"
            :class="item.name == this.userName ? 'reverse' : ''"
          >
            <img :src="item.img" />
            <span class="content-chat">{{ item.message }} </span>
          </li>
        </ul>
      </main>
      <footer class="footer">
        <!-- <div class="icon"><setting-outlined /></div>
        <div class="icon"><camera-outlined /></div>
        <div class="icon"><file-image-outlined /></div>
        <div class="icon"><audio-outlined /></div> -->
        <div class="text-chat">
          <textarea
            placeholder="..."
            id="w3review"
            name="w3review"
            rows="2"
            v-model="textChat"
            @focus="forcusTextChat"
            @keyup.enter="sendMessage"
          ></textarea>
          <div class="box">
            <div class="icon" @click="showDialogPickerEmoji">
              <smile-outlined />
            </div>
            <div v-if="isShowDialogEmojiPicker" class="emoji">
              <EmoJiPicker
                @emoji_click="getEmojiPicker"
                @closeDialogEmojiPicker="closeDialogEmojiPicker"
              />
            </div>
          </div>
        </div>
        <div class="icon" @click="sendMessage"><send-outlined /></div>
      </footer>
    </div>
  </div>
</template>
<script>
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
import EmoJiPicker from "@/components/channel/EmojiPicker.vue";
export default {
  props: ["channel"],
  updated() {
    // whenever data changes and the component re-renders, this is called.
    this.$nextTick(() => {
      var container = this.$refs.msgContainer;
      container.scrollTop = container.scrollHeight;
    });
  },
  methods: {
    sendMessage() {
      if (this.textChat.trim()) {
        const formChat = {
          textChat: this.textChat.trim(),
          userName: window.localStorage.getItem("username"),
          imgAvatar: this.imgAvatar,
        };
        this.socket.send(JSON.stringify(formChat));
        this.textChat = "";
      } else return;
    },
    backHref() {
      this.$router.go(-1);
    },
    forcusTextChat() {
      this.isShowDialogEmojiPicker = false;
    },
    showDialogPickerEmoji() {
      this.isShowDialogEmojiPicker = true;
    },
    closeDialogEmojiPicker() {
      this.isShowDialogEmojiPicker = false;
    },
    getEmojiPicker(value) {
      console.log(value);
      this.textChat += value;
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
    EmoJiPicker,
  },
  created() {
    this.userName = window.localStorage.getItem("username") || "Ẩn danh";
    this.imgAvatar =
      window.localStorage.getItem("img") ||
      "https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg";
  },
  data() {
    return {
      imgAvatar: null,
      userName: "",
      textChat: "",
      faceCurrent: null,
      isShowDialogEmojiPicker: false,
      socket: new WebSocket("ws:/localhost:3000"),
      messageList: [],
    };
  },
  mounted() {
    this.socket.onmessage = async (event) => {
      const messageForm = JSON.parse(await new Response(event.data).text());
      this.messageList.push({
        id: this.messageList.length,
        message: messageForm.textChat,
        img: messageForm.imgAvatar,
        name: messageForm.userName,
      });
    };
  },
};
</script>

<style scoped lang="scss">
#face {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;

  .container {
    position: relative;
    margin: 0 auto;
    max-width: 750px;
    height: 100vh;
    background-color: #313131;

    .background-avatar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        opacity: 0.1;
        object-fit: fill;
      }
    }

    .header {
      position: relative;
      display: flex;
      padding: 12px 20px;
      justify-content: space-between;
      gap: 16px;
      align-items: center;
      border-bottom: 1px solid aqua;

      &-main {
        display: flex;
        gap: 16px;
        flex: 1;
        align-items: center;
        color: #ffffff;

        &-avatar {
          width: 36px;
          height: 36px;
          position: relative;

          &-online {
            display: block;
            width: 12px;
            height: 12px;
            background-color: rgb(5, 247, 5);
            position: absolute;
            border-radius: 50%;
            bottom: 0;
            right: 0;
          }

          img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
          }
        }

        &-infor {
        }

        &-nick {
          cursor: pointer;
        }

        &-name {
          font-size: large;
        }
      }

      &-contact {
        display: flex;
        gap: 20px;
        margin-right: 25px;
      }

      &-phone {
      }

      &-video {
      }
    }

    .footer {
      width: 90%;
      min-height: 20px;
      display: flex;
      justify-content: space-between;
      gap: 30px;
      margin: 0 auto;
      background-color: transparent;
      border-radius: 16px;
      align-items: center;
      padding: 8px 0;

      .text-chat {
        background-color: rgba($color: aqua, $alpha: 0.1);
        display: flex;
        padding: 8px 16px;
        border-radius: 16px;
        position: relative;
        width: 100%;

        .box {
          position: relative;

          .emoji {
            position: absolute;
            top: -420px;
            right: 0;

            &::after {
              content: "";
              border: 10px solid black;
              border-right: transparent 10px solid;
              border-left: transparent 10px solid;
              border-bottom: none;
              position: absolute;
              right: 8px;
            }
          }
        }

        textarea {
          background-color: transparent;
          outline: none;
          display: block;
          border: none;
          flex: 1;
          color: #ffffff;
          max-height: 60px;
          resize: none;
          &::-webkit-scrollbar {
            display: none;
            /* for Chrome, Safari, and Opera */
          }
        }
      }
    }

    .body-chat-box {
      padding: 0 16px;
      position: relative;
      height: 80vh;
      overflow: hidden;

      .main-chat {
        margin: 12px 0;
        overflow-y: scroll;
        color: #ffffff;
        padding: 0;
        list-style-type: none;
        height: 100%;
        display: flex;
        flex-direction: column;

        &::-webkit-scrollbar-track {
          background-color: transparent;
        }

        &::-webkit-scrollbar {
          width: 6px;
          background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: transparent;
          border: 2px solid rgba($color: aqua, $alpha: 0.1);
        }

        .main-liter {
          display: flex;
          margin: 10px 0;
          width: 100%;
          align-items: end;

          img {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: block;
            cursor: pointer;
          }

          span {
            display: block;
            padding: 8px 16px;
            border-radius: 8px;
            margin: 0 8px;
            background-color: rgba($color: aqua, $alpha: 0.1);
            word-break: break-all;
            max-width: 60%;
          }
        }

        .reverse {
          flex-direction: row-reverse;
        }
      }
    }
  }

  .icon {
    font-size: 20px;
    color: aqua;
    cursor: pointer;
    z-index: 1;

    &:hover {
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 390px), screen and (max-height: 844px) {
    .header {
      padding: 8px 20px !important;
    }
  }
}

textarea.ant-input {
  background-color: transparent !important;
  border-radius: 20px;
  overflow: auto;
  color: #ffffff;
}
</style>
