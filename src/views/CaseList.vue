<!--

Variables to keep:
plateNumber = input from 'Create Case #1'
createTime = **
action -> link to 'Case Result'

-->

<template>
  <div class="case-list">
    <div class="heading">

        <p class="cases-left">You have N cases left</p>
        <!--Will need variable for keeping track of 50 - N -->

        <a-button class="create-case" :size="size" @click="$router.push('/platenumber')" type="primary">
          Create Case
        </a-button>

    </div>

    <a-table :columns="columns" :row-key="record => record.login.uuid" :data-source="data" :pagination="pagination"
      :loading="loading" @change="handleTableChange" class="table">
      <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template>
    </a-table>

  </div>
</template>



<script>
import axios from 'axios';



const queryData = params => {
  return axios.get('https://randomuser.me/api', { params: params });
};
const columns = [
  {
    title: 'Plate Number',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Create Time',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Action',
    dataIndex: 'email',
  },
];

export default {
  data() {
    return {
      size: 'large',
      data: [],
      pagination: {},
      loading: false,
      columns,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch(params = {}) {
      this.loading = true;
      queryData({
        results: 6,
        ...params,
      }).then(({ data }) => {
        const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 50;
        this.loading = false;
        this.data = data.results;
        this.pagination = pagination;
      });
    },
  },
};
</script>

<style lang = "scss" scoped>


.heading {
  margin: 20px 40px;
  display: flex;
  justify-content: space-between;

  .cases-left {
    margin: 0px;
  }
}

.table {
  min-width: max-content;
  border: 1px solid #ced3d9;
  margin: 0px 40px;
  overflow-y: scroll;
}
</style>
