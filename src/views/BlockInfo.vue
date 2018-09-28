<template>
  <div class="block_info">
      <input type="text" v-model="block_num">
      <button @click="get_block('previous')"> get previous </button>
      <button @click="get_block('specify')"> specify </button>
      <button @click="get_block('next')"> get next </button>
      <br>
      <!-- <ul>
        <li v-for="(value, key) in block_info">{{ key }}: {{ value }} </li>
      </ul> -->
      <table>
        <tr v-for="(value, key) in block_info">
          <th>{{key}}</th>
          <th>{{value}}</th>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: 'block_info',
  props: ["web3api"],
  data:function(){
    return {
      block_info:null,
      block_num:1,
    }
  },
  methods:{
    get_block(type){
      console.log("start to get block");
      if(type=='next'){
        this.block_num++;
      }else if(type=='specify'){
        
      }else if(type=='previous'){
        if(this.block_num>0)
          this.block_num--;
      }
      console.log(this.web3api.version.api);
      var self = this;
      this.web3api.eth.getBlock(this.block_num, function(error, result){
          if(!error){
            
            console.log(JSON.stringify(result));
            self.block_info=result;
          }else
            console.error(error);
      });
    }
  }
}
</script>
