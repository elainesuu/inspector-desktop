<template>
  <section class="plate-number">
    <h1 class="plate-title">Input Plate Number</h1>
    <!--input-->
    <div class="number-input">
      <a-input :size="size" v-model="plateInput.number" placeholder="Plate Number" :maxLength="10" allow-clear />
    </div>
    <!--button-->
    <div class="submit-button">
      <a-button :size="size" type="primary" @click="$router.push('/imageupload')" html-type="submit"
        :disabled="plateInput.number === ''">
        Proceed
      </a-button>
    </div>
  </section>

</template>

<script>
export default {
  data() {
    return {
      size: 'large',
      plateInput: {
        number: '',
      },
    };
  },
  props: ['step'],
  created() {
    console.log(this.step);
    this.$emit('change', 0);
  }
};
</script>

<style lang = "scss" scoped>

//missing "required" icon and number of characters left display

section.plate-number {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.plate-title{
  font-size: 18px;
  margin: 0px;
}

.number-input{
  margin: 20px 0px;
}

.submit-button{
  button:enabled {
      background-color: orange;
      color: #2c3e50;
    }
}

</style>