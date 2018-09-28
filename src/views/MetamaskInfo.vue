<template>
  <div class="metamask_info">
    Metamask Info<br><br>
    noed version : {{ web3info.node_version }} <br>
    web3 version : {{ web3info.web3_version }} <br>
    network protocol version : {{ web3info.network_version }} <br>
    is connected : {{ web3info.isConnected}} <br>
    ethereum protocol version : {{ web3info.ethereum_version }} <br>
    <!-- whisper version : {{ web3info.whisper_version}} <br> -->
  </div>
</template>

<script>
export default {
  name: "metamask_info",
  props: ["web3info"],
  methods: {}
};
</script>
