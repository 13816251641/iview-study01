<template>
    <div>
        <Button type="primary" @click="modal1 = true">Display dialog box</Button>
        <Modal v-model="modal1" :mask-closable="false" title="这是一个标题" @on-ok="ok" @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            /*
                点击取消;右上角x;空白处都会触发
             */
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>