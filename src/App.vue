<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div> -->
    <div v-if='hasmetamask'>
      <button @click="tabbutton('metamask')">Metamask info</button>
      <button @click="tabbutton('block')">block info</button> 
      <button @click="tabbutton('web3func')">function of web3</button><br>
      <!-- {{ web3info.node_version }} <br>
      {{ web3info.web3_version }} <br> -->
    </div>
    <div v-else>
      need to install metamask!
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      hasmetamask: null,
      web3api: null,
      web3info:{
        node_version: null,
        web3_version: null,
        network_version: null,
        isConnected: null,
        ethereum_version: null,
        // whisper_version: null,
        eth:{
          defaultAccount: null,
          
        }
      },
      web_node_version:null
    };
  },
  methods: {
    tabbutton(type) {
      console.log(type);
      if (type == "metamask") {
        this.$router.push({name:"metamask_info",params:{web3info:this.web3info}});
      } else if (type == "block") {
        //this.$router.push("/block_info");
        this.$router.push({name:"block_info",params:{web3api:this.web3api}});
      } else if (type == "web3func"){
        this.$router.push({name:"web3_func",params:{web3api:this.web3api}});
      }
    },
    web3_update(){
      var self = this;
      this.web3api.version.getNode(function(error, result) {
        if (!error) {
          console.log(result);
          self.web3info.node_version = result;
        }
      });
      this.web3api.version.getNetwork(function(error, result) {
        if (!error) {
          console.log(result);
          self.web3info.network_version = result;
        }
      });
      this.web3info.isConnected = this.web3api.isConnected();
      this.web3api.version.getEthereum(function(error, result) {
        if (!error) {
          console.log(result);
          self.web3info.ethereum_version = result;
        }
      });
      // self.web3info.whisper_version=this.web3api.version.whisper;
      // this.web3api.version.getWhisper(function(error, result) {
      //   if (!error) {
      //     console.log(result);
      //     self.web3info.whisper_version = result;
      //   }
      // });

      // this.web3api.eth.getBlock(2, function(error, result){
      //     if(!error)
      //       console.log(JSON.stringify(result));
      //     else
      //       console.error(error);
      // });
      
    }
  },
  mounted: function() {
    if (typeof web3 !== "undefined") {
      //web3 = new Web3(web3.currentProvider);
      this.web3api = new Web3(web3.currentProvider);
      this.web3info.web3_version = this.web3api.version.api;
      //this.web3 = window.web3;
      if (this.web3api.currentProvider.isMetaMask == true) {
        console.log("metamask");
        this.hasmetamask = true;
        this.web3_update();
        // "MetaMask可用"
      } else {
        // "非MetaMask环境"
        console.log("no metamask");
      }
    } else {
      //$("#env").html("No web3? 需要安装<a href='https://metamask.io/'>MetaMask</a>!");
      console.log("need install metamask");
      //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
