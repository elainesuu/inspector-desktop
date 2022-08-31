<template>
  <section>
  <div id="app">
    <a-layout id="components-layout">
      <!-- header -->
      <a-layout-header v-if="!['login'].includes($route.name)" class="header">
        <div class="logo" />
        <!-- <img src="img/icons/logo.png" alt="">
        </div> -->
        <a-menu theme="dark" mode="horizontal" :default-selected-keys="['1']" :style="{ lineHeight: '64px' }">
          <a-menu-item key="1" @click="$router.replace('/caselist')">
            Case List
          </a-menu-item>
        </a-menu>
      </a-layout-header>

      <div class="steps-display" v-if="['platenumber', 'imageupload', 'caseresult'].includes($route.name)">
          <a-steps v-model="stepCurrent" size="small">
            <a-step title="Plate Number"/>
            <!-- <a-step title="Image Upload" :disabled="['platenumber'].includes($route.name)"  /> 
            <a-step title="Case Result" :disabled="['platenumber', 'imageupload'].includes($route.name)" />   -->
            <a-step title="Image Upload" :disabled="stepCurrent === 0" /> <!--1-->
            <a-step title="Case Result" :disabled="stepCurrent === 0 || stepCurrent === 1"/> <!--2--> 
          </a-steps>
        </div>      

      <!--content-->
      <a-layout-content class="content">
        <router-view :step="stepCurrent" @change="changeStep" />
      </a-layout-content>

      <!--footer-->
      <a-layout-footer class="footer">
        © DataEnlighten (Asia) Ltd
      </a-layout-footer>
    </a-layout>
  </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stepCurrent: 0
    };
  },
  props: [],
  watch: {
    stepCurrent(newValue, oldValue) {
      console.log(oldValue, newValue);
      if (oldValue - newValue === 1) {
        this.$router.back();
      }
    }
  },
  methods: {
    changeStep(value) {
      console.log(value);
      this.stepCurrent = value;
    }
  }
};
</script>


<style lang="scss" scoped>
section {
  min-height: 100%;
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  background-color: #f5f6f7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/


#components-layout {

  .header {
    .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 24px 16px 0;
      float: left;
    }
  }

  .content {
    margin: 0px 50px ;
    position: relative;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #f5f6f7;
  }

  .footer {
    position: static;
    bottom: 0px;
    width: 100vw;
    text-align: center;
    font-size: 12px;
    line-height: 1;
    color: #aaaeb3;
    //background-color: #f5f6f7;
  }

  .steps-display{
    margin: 30px 70px;
  }

}
</style>
