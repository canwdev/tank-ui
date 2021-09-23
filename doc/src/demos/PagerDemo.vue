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
            <TkInput v-model="pageSize" min="0" type="number"></TkInput>
          </div>
        </div>
        <div class="tk-form-row">
          <div>
            offset
          </div>
          <div>
            <TkInput v-model="offset" min="0" type="number"></TkInput>
          </div>
        </div>
        <div class="tk-form-row">
          <div>
            allCount
          </div>
          <div>
            <TkInput v-model="allCount" min="0" type="number"></TkInput>
          </div>
        </div>
        <div class="tk-form-row">
          <div>
            pageGroupCount
          </div>
          <div>
            <TkInput v-model="pageGroupCount" min="5" type="number"></TkInput>
          </div>
        </div>
        <div class="tk-form-row">
          <div>
            showExtraButtons
          </div>
          <div>
            <TkSwitch v-model="showExtraButtons" />
          </div>
        </div>

      </div>

      <TkPager
        :page-size="pageSize"
        :offset.sync="offset"
        :total="allCount"
        :page-group-count="pageGroupCount"
        :show-extra-buttons="showExtraButtons"
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
      pageGroupCount: 5,
      showExtraButtons: true
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
