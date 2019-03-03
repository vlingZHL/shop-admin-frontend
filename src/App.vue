<template>
  <div id="app">
    <p>登录</p>
    <el-form label-width="100px" class="demo-ruleForm">

      <el-form-item label="账号" class="coutant">
        <el-input v-model="input" placeholder="请输入登录账号"></el-input>
      </el-form-item>

      <el-form-item label="密码" >
        <el-input type="password" autocomplete="off" v-model="pas"></el-input>
      </el-form-item>
  

      <el-form-item class="hl-cen">
        <el-button type="primary"  @click="hlsubmit">提交</el-button>
        <el-button @click="hlreset">重置</el-button>
      </el-form-item>

    </el-form>

  </div>
 
</template>

<script>
  export default {
    data: function(){
      return {
        input: "",
        pas: ""
      }
    },
    methods: {
      hlsubmit: function(){
        console.log("账号："+ (+this.input),"密码："+(+this.pas));
      },
      hlreset: function(){
        this.input = "" ,
        this.pas = ""
      }
    }
  }
</script>


<style lang="scss">
  #app {
    margin: 0 auto;
    width: 500px;
    height: 300px;
    p {
      margin: 0 auto;
      text-align: center;
      margin-bottom: 20px;
      font-size: 20px;
      color: #409EFF;
    }
    
    .hl-cen {
      text-align: center;
    }
  }
</style>
