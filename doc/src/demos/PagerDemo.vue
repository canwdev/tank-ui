<template>
  <div>
    <h2>TkPager</h2>
    <fieldset class="tk-fieldset">
      <legend>Demo</legend>

      <div class="tk-form">
        <div class="tk-form-row">
          <div>
            pageSize
          </div>
          <div>
            <TkInput min="0" v-model="pageSize" type="number"></TkInput>
          </div>
        </div>
        <div class="tk-form-row">
          <div>
            offset
          </div>
          <div>
            <TkInput min="0" v-model="offset" type="number"></TkInput>
          </div>
        </div>
        <div class="tk-form-row">
          <div>
            allCount
          </div>
          <div>
            <TkInput min="0" v-model="allCount" type="number"></TkInput>
          </div>
        </div>
        <div class="tk-form-row">
          <div>
            pageGroupCount
          </div>
          <div>
            <TkInput min="5" v-model="pageGroupCount" type="number"></TkInput>
          </div>
        </div>

      </div>

      <TkPager
        :page-size="pageSize"
        :offset.sync="offset"
        :total="allCount"
        :page-group-count="pageGroupCount"
      ></TkPager>

      <ul v-for="i in filteredList" :key="i">
        <li>Item {{ i }}</li>
      </ul>
    </fieldset>

  </div>
</template>

<script>

export default {
  name: 'Demo',
  data() {
    return {
      pageSize: 10,
      offset: 0,
      allCount: 100,
      pageGroupCount: 5
    }
  },
  computed: {
    filteredList() {
      const list = []
      for (let i = 0; i < this.allCount; i++) {
        list.push(i)
      }
      return list.splice((this.offset) * this.pageSize, this.pageSize)
    }
  },
  methods: {}
}
</script>
