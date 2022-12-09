<template>
  <div class="FormDemo">
    <TkForm ref="formRef" :model="formData" :rules="formRules">
      <TkFormItem prop="name">
        <TkInput v-model="formData.name" placeholder="用户名"/>
      </TkFormItem>
      <TkFormItem
        prop="email"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]"
      >
        <TkInput v-model="formData.email" placeholder="Email"/>
      </TkFormItem>
      <TkFormItem
        prop="age"
        :rules="[
          { required: true, message: '年龄不能为空'},
          { type: 'number', message: '年龄必须为数字值'}
        ]"
      >
        <TkInput
          v-model.number="formData.age"
          type="number"
          placeholder="Age"
        />
      </TkFormItem>
      <TkFormItem prop="pass">
        <TkInput v-model="formData.pass" placeholder="密码"/>
      </TkFormItem>
      <TkFormItem prop="checkPass">
        <TkInput v-model="formData.checkPass" placeholder="确认密码"/>
      </TkFormItem>

      <TkButton @click="handleSubmit">提交</TkButton>
    </TkForm>
  </div>
</template>

<script>
export default {
  name: 'FormDemo',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.formData.checkPass !== '') {
          this.$refs.formRef.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.formData.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      formData: {
        name: '',
        email: '',
        age: null,
        pass: '',
        checkPass: ''
      },
      formRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'change' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.formRef.validate((valid) => {
        if (!valid) {
          console.error('error submit!!')
          return
        }
        console.log('ok')
        alert('ok!')
      })
    }
  }
}
</script>

