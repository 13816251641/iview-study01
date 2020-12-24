<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu theme="dark" width="auto" :class="menuitemClasses">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            Grid
                        </template>
                        <MenuItem name="1-1" to="/Layout/Grid01">Grid01</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            Poptip
                        </template>
                        <MenuItem name="2-1" to="/Layout/Poptip01">Poptip:基础用法</MenuItem>
                        <MenuItem name="2-2" to="/Layout/Poptip02">Poptip:内容换行</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            国际化
                        </template>
                        <MenuItem name="3-1" to="/Layout/UseI18nDemo">使用国际化案例</MenuItem>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            Form表单
                        </template>
                        <MenuItem name="4-1" to="/Layout/Form01">Form:表单验证</MenuItem>
                        <MenuItem name="4-2" to="/Layout/Form02">Form:图片上传</MenuItem>
                    </Submenu>
                    <Submenu name="5">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                           使用bootstrap样式
                        </template>
                        <MenuItem name="5-1" to="/Layout/UseBootstrap01">引入bootstrap布局</MenuItem>
                    </Submenu>
                    <Submenu name="6">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            Message 全局提示
                        </template>
                        <MenuItem name="6-1" to="/Layout/Message01">显示一个10秒的提示</MenuItem>
                    </Submenu>
                    <Submenu name="7">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            使用Modal
                        </template>
                        <MenuItem name="7-1" to="/Layout/Modal01">显示一个简单的Modal</MenuItem>
                        <MenuItem name="7-2" to="/Layout/Modal02">显示一个自定义页头和页脚的Modal</MenuItem>
                    </Submenu>
                    <Submenu name="8">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            父子组件使用
                        </template>
                        <MenuItem name="8-1" to="/Layout/Parent">父组件使用子组件</MenuItem>
                    </Submenu>
                    <Submenu name="9">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            使用样式
                        </template>
                        <MenuItem name="8-1" to="/Layout/UseCss01">动态修改样式</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '500px'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false,
                name:'Layout'
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ];
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    };
</script>
