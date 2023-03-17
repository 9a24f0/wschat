<template>
    <div id="face">
        <div class="container">
            <div class="background-avatar"></div>
            <header class="header">
                <div class="icon"><arrow-left-outlined /></div>
                <div class="header-main">
                    <div class="header-main-avatar">
                        <img src="https://nguoinoitieng.tv/images/nnt/103/0/bg5a.jpg" />
                    </div>
                    <div class="header-main-infor">
                        <div class="header-main-name">Nguyễn Thị Hiền Lương</div>
                        <div class="header-main-nick">Hoạt động 10 phút trước</div>
                    </div>
                </div>
                <div class="header-contact">
                    <div class="header-phone icon"><phone-outlined style="color: aqua;" /></div>
                    <div class="header-video icon"><video-camera-outlined style="color: aqua;" /></div>
                    <div class="header-video icon"> <info-circle-outlined style="color: aqua;" /></div>

                </div>
            </header>
            <main class="body-chat-box">
                <div  class="card-chat-message" style="width: 45%" title="Card title"                 
               >
                    <h2>231232132</h2>
                </div>
                <div class="card-chat-message" style="width: 45%" title="Card title"                 
               >
                    <h2>231232132</h2>
                </div>
            </main>
            <footer class="footer">
                <div class="icon"><setting-outlined /></div>
                <div class="icon"><camera-outlined /></div>
                <div class="icon"><file-image-outlined /></div>
                <div class="icon"><audio-outlined /></div>
                <div class="text-chat">
                    <a-textarea :rows="3" size="large " placeholder="maxlength is 6" :maxlength="5000">
                    </a-textarea>
                </div>


                <div class="icon"><like-outlined /></div>
            </footer>

        </div>

    </div>
</template>
<script>
import "./face1.scss"
import {
    ArrowLeftOutlined,
    PhoneOutlined,
    VideoCameraOutlined,
    SettingOutlined,
    CameraOutlined,
    FileImageOutlined,
    AudioOutlined,
    LikeOutlined,
    InfoCircleOutlined

} from '@ant-design/icons-vue';
export default {
    components: {
        ArrowLeftOutlined,
        PhoneOutlined,
        VideoCameraOutlined,
        SettingOutlined,
        CameraOutlined,
        FileImageOutlined,
        AudioOutlined,
        LikeOutlined,
        InfoCircleOutlined
    },
data() {
    return {
        tabList : [
      {
        key: 'tab1',
        tab: 'tab1',
      },
      {
        key: 'tab2',
        tab: 'tab2',
      },
    ],
     contentList : {
      tab1: 'content1',
      tab2: 'content2',
    },
     tabListNoTitle : [
      {
        key: 'article',
        tab: 'article',
      },
      {
        key: 'app',
        tab: 'app',
      },
      {
        key: 'project',
        tab: 'project',
      }
    ]
    }
  },
  methods: {
    trimSpace() {
      if (this.objConfirm.comment) {
        this.objConfirm.comment = this.objConfirm.comment.trim()
      }
    },
    accept() {
      this.$emit('accept-action')
      this.closeDialog()
    },
    closeDialog() {
      this.$emit('close-dialog')
    }
  }
}
</script>
