<template>
  <div class="demo">
    <h2>TkDropdown</h2>

    <fieldset class="tk-fieldset">
      <legend>Size</legend>

      <div class="tk-block-gap-xs flex items-center">
        <TkDropdown v-model="selected" :options="options" size="xs" placeholder="input (xs)"/>
        <TkDropdown v-model="selected" :options="options" size="sm" placeholder="input (sm)"/>
        <TkDropdown v-model="selected" :options="options" placeholder="input"/>
        <TkDropdown v-model="selected" :options="options" size="lg" placeholder="input (lg)"/>
        <TkDropdown v-model="selected" :options="options" size="xl" placeholder="input (xl)"/>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>Theme</legend>

      <div class="tk-block-gap-xs flex items-center">
        <TkDropdown v-model="selected" :options="options" theme="black" placeholder="black"/>
        <TkDropdown v-model="selected" :options="options" theme="success" placeholder="success"/>
        <TkDropdown v-model="selected" :options="options" theme="accent" placeholder="accent"/>
        <TkDropdown v-model="selected" :options="options" theme="secondary" placeholder="secondary"/>
        <TkDropdown v-model="selected" :options="options" theme="error" placeholder="error"/>
        <TkDropdown v-model="selected" :options="options" theme="info" placeholder="info"/>
        <TkDropdown v-model="selected" :options="options" theme="warning" placeholder="warning"/>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>Disable</legend>

      <div class="tk-block-gap-xs flex items-center">
        <TkDropdown v-model="selected" :options="options" disabled placeholder="disabled"/>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>v-model</legend>
      <div>
        <TkButton @click="selected = ''">Clear</TkButton>

        <fieldset class="tk-fieldset">
          <legend>data</legend>
          <select
            v-model="selected"
          >
            <option
              v-for="item in options"
              :key="item"
              :value="item"
            >{{ item }}
            </option>
          </select>

          {{ selected }}
        </fieldset>
      </div>
    </fieldset>

  </div>
</template>

<script>
export default {
  name: 'DropdownDemo',
  data() {
    return {
      selected: 'Apple',
      options: [
        'Apple',
        'Banana',
        'Cyber',
        'Dog',
        'Element',
        'Figure',
        'Good',
      ]
    }
  }
}
</script>


