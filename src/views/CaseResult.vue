<template>
  <section class="caseresult">
    <section class="heading">
      <div class="heading-info">
        <h3> Plate Number</h3>
        <p>insert plate number variable</p>
      </div>
      <div class="heading-info">
        <h3> Photo Upload Time</h3>
        <p>insert photo upload variable</p>
      </div>
      <div class="heading-info">
        <h3> Damage Analysis Time</h3>
        <p>insert damage analysis variable</p>
      </div>
    </section>

    <!-- <section class="damaged-part-list">

    </section> -->
    <!-- <div>
      <h3 :style="{ marginBottom: '16px' }">
        Default Size
      </h3>
      <a-list bordered :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item, index">
          {{ item }}
        </a-list-item>
        <div slot="header">
          Header
        </div>
        <div slot="footer">
          Footer
        </div>
      </a-list>
      <h3 :style="{ margin: '16px 0' }">
        Small Size
      </h3>
      <a-list size="small" bordered :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item, index">
          {{ item }}
        </a-list-item>
        <div slot="header">
          Header
        </div>
        <div slot="footer">
          Footer
        </div>
      </a-list>
      <h3 :style="{ margin: '16px 0' }">
        Large Size
      </h3>
      <a-list size="large" bordered :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item, index">
          {{ item }}
        </a-list-item>
        <div slot="header">
          Header
        </div>
        <div slot="footer">
          Footer
        </div>
      </a-list>
    </div> -->
  </section> 

</template>

<script>
// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

// export default {
//   data() {
//     return {
//       data,
//       size: 'large',
//       plateInput: {
//         number: '',
//       },
//     };
//   },
//   props: ['step'],
//   created() {
//     console.log(this.step);
//     this.$emit('change', 2);
//   }
// };


</script>


<style lang = "scss" scoped>
section.heading {
  display: flex;
  flex-direction: row;
  margin: 0px 20px;
  width: 100%;
  height: max-content;
  padding: 15px 0px;
  border: 1px solid rgb(31, 93, 147);
  justify-content: center;
  align-content: center;


}

.heading-info {
  flex-grow: 1;
  text-align: center;

  h3 {
    margin: 0px;
  }

  p {
    margin: 0px;
  }
}
</style>