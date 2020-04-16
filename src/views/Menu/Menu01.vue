<template>
    <div>
        <Row>
            <Col span="8">
                <Menu :theme="myTheme" :accordion="myAccordion">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-paper" />
                            内容管理
                        </template>
                        <MenuItem name="1-1" to="/Menu01/Grid01">Grid01</MenuItem>
                        <MenuItem name="1-2">评论管理</MenuItem>
                        <MenuItem name="1-3">举报管理</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-people" />
                            用户管理
                        </template>
                        <MenuItem name="2-1">新增用户</MenuItem>
                        <MenuItem name="2-2">活跃用户</MenuItem>
                    </Submenu>
                </Menu>
            </Col>
            <Col span="16">
                <router-view></router-view>
            </Col>
        </Row>

    </div>
</template>
<script>

    export default {
        data () {
            return {
                myTheme: 'dark',
                myAccordion: true
            }
        }
    }
</script>
