<template>
    <div>
        <!--
          在 Form 内,每个表单域由 FormItem 组成, 需要给 Form 设置 label-width 后才能给 FormItem
          设置属性 label 可以显示表单域的标签;
          prop对应表单域 model 里的字段,如果不设置的话resetFields将会没有效果,同时表单验证也需要prop的支持;

          v-if修饰的字段即使配置了校验如果不可见也不会进行校验
          v-show修饰的字段如果配置了校验如果不可见也会进行校验
          :style="{display:display}"修饰的字段如果配置了校验如果不可见也会进行校验


          this.ruleCustom.age[0].required = false; 只是不会进行非空校验,后面如果配置了业务校验的话仍旧会执行,
          只不过字段上的非空红点不会消失

        -->
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
            <FormItem label="Password" prop="passwd">
                <Input type="password" v-model="formCustom.passwd"></Input>
            </FormItem>
            <FormItem label="Confirm" prop="passwdCheck">
                <Input type="password" v-model="formCustom.passwdCheck"></Input>
            </FormItem>
            <!--v-show="this.flag"-->
            <FormItem label="Age" prop="age" :style="{display:display}">
                <Input type="text" v-model="formCustom.age"></Input>
            </FormItem>
            <FormItem label="Name" prop="name">
                <Input type="text" v-model="formCustom.name"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
                <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Form>


        <Button @click="change"></Button>
    </div>



</template>
<script>

    import * as cookieUtil from '@/common/utils/cookie'


    export default {
        name: 'Form01',
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
                if (value === '2003') {
                    callback();
                } else {
                    callback(new Error('Age not equals to 2003'));
                }
            };

            return {
                display: 'block',
                msg: 'msg321',
                flag: true,
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: '',
                    name:''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    /*
                        required和validator组合使用
                        require负责界面标红,和非空校验
                        validateAge负责业务上的校验
                        这样的写法,会先校验非空,非空成功后再去进行业务校验
                    */
                    age: [
                        {required:true,trigger:'blur',message: 'age must has value'},
                        {trigger:'blur',validator:validateAge}
                    ],
                    /*
                       name字段必须和model中的字段保持一致
                     */
                    name: [
                        {required: true, message: '哈哈', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            change(){
                this.flag = false;
                if (this.display === 'none'){
                    this.display = 'block'
                } else {
                    this.display = 'none'
                }
                //this.ruleCustom.age[0].required = false;
            },
            handleSubmit (name) {
                //alert(this.$getCookie('embedIsid'));
                //alert(cookieUtil.usageCookie.getCookie('embedIsid'));
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
        },
        mounted() {
            this.$setCookie('embedIsid', '110', {})  //7551383157312357  3160870398528427
            this.$refs.child.message = 'zhuzhu'
        }
    }
</script>
