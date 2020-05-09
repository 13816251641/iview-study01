<template>

    <!--
        在 Form 内,每个表单域由 FormItem 组成, 需要给 Form 设置 label-width 后才能给 FormItem
        设置属性 label 可以显示表单域的标签;

        prop对应表单域 model 里的字段,如果不设置resetFields将会没有效果,同时表单验证也需要prop的支持;


     -->


    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="Password" prop="passwd">
            <Input type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="Confirm" prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <FormItem label="Age" prop="age">
            <Input type="text" v-model="formCustom.age" number></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
            <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('The two input passwords do not match!'));
                } else {
                    callback();
                }
            };
            /* 校验方法写在data()中 */
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('Age cannot be empty'));//callback中要包含Error之后要return
                    return;
                }
                if (!Number.isInteger(value)) {
                    callback(new Error('Please enter a numeric value'));
                } else if (value < 18) {
                    callback(new Error('Must be over 18 years of age'));
                } else {
                    callback();
                }
            };

            return {
                msg: 'msg321',
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    /*
                       trigger:'change' 在修改后验证
                       age字段必须和model中的字段保持一致
                     */
                    age: [
                        { validator: validateAge, trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    console.log(this.msg);
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();//重置
            }
        }
    }
</script>
