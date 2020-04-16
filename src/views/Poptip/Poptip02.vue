<style scoped>
    .content{
        white-space: normal;/*内容换行*/
        line-height: 25px;
        font-size: 15px;
    }
</style>


<template>
    <div>
        <!--width:最小150-->
        <Poptip trigger="hover" placement="top-start" width="200">
            <div slot="content" class="content">
                这是我的自定义内容，我想要换行啊换行鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋
                这是我的自定义内容，我想要换行啊换行鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋
                这是我的自定义内容，我想要换行啊换行鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋
            </div>
            <Button type="parimary" size="samll">我是提示框啊</Button>
        </Poptip>
    </div>
</template>
<script>
    export default {

    }
</script>