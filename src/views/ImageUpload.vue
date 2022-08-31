<template>
  <div section="image-upload">
    <div class="upload-section">
      <a-upload-dragger name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange">
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p class="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </a-upload-dragger>
    </div>

    <div class="navigation-buttons">
      <div class="back-button">
        <a-button :size="size" @click="$router.push('/platenumber')" type="primary">
          Back
        </a-button>
      </div>

      <div class="analysis-button">
        <a-button :size="size" @click="$router.push('/caseresult')" type="primary">
          Start Analysis
        </a-button>
      </div>
    </div>

  </div>

</template>


<script>

export default {
  data() {
    return {
      size: 'large',
    };
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
  props: ['step'],
  created() {
    console.log(this.step);
    this.$emit('change', 1);
  }
};
</script>

<style>

section.image-upload{
  display: flex;
  margin: 20px;
}


.navigation-buttons {
  display: flex;
  justify-content: space-between;
}
</style>

