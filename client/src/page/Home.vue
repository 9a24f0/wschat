<template>
  <div>
    <QRGenerator :qr="qr"></QRGenerator>
  </div>
</template>

<script>
import QRGenerator from "../components/home/QRGenerator.vue";
export default {
  components: { QRGenerator },
};
</script>
