<template>
  <section class="container">
    <div class="login">
      <!--title and logo-->
      <main>
        <div class="logo-title">
          <img src="img/icons/img_de_icon.png" alt="">
          <h1>DE Asia AI Detection</h1>
          <h2>Log In</h2>
        </div>
        <!--form-->
        <a-form-model @submit="handleSubmit" @submit.native.prevent class="form">
          <!--username-->
          <a-form-model-item class="username">
            <a-input v-model="formInline.user" type="text" placeholder="Username" :maxLength="15">
              <a-icon slot="prefix" type="user" style="color:coral"/>
            </a-input>
          </a-form-model-item>
          <!--password-->
          <a-form-model-item class="password">
            <a-input v-model="formInline.password" type="text" placeholder="Password" :maxLength="8">
              <a-icon slot="prefix" type="lock" style="color:coral"/>
            </a-input>
          </a-form-model-item>

          <!--button-->
          <a-form-model-item class="login-button">
            <a-button @click="$router.replace('/caselist')" type="primary" html-type="submit"
              :disabled="formInline.user === '' || formInline.password === ''">
              Log in
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
    };
  },
};
</script>

<style lang = "scss" scoped>

section.container {
  display: flex;
	justify-content: center;
	align-items: center;
}

main {
  position: relative;
  z-index: 1;
  padding: 30px 60px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba($color: #000, $alpha: 0.1);
}

.login {
  text-align: center;
}

.logo-title {
  position: relative;

  img {
    height: 80px;
    width: 80px;
  }

  h1 {
    margin: 12px 0px;
    font-size: 28px;
  }

  h2{
    margin: 0px 0px 0px;
  }
}

.form {
  position: relative;
  .username{
    margin: 10px 0px;
  }
  .login-button {
    margin: 0px;
    button:enabled {
      background-color: orange;
      color: #2c3e50;
    }
  }
}
</style>



