<template>
    <div>
        <Button type="primary" @click="modal2 = true">Display dialog box</Button>
        <Modal v-model="modal2" :mask-closable="false" title="这是一个标题" @on-ok="ok" @on-cancel="cancel">
            <div style="text-align:center">
                <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
                <p>Will you delete it?</p>
            </div>
            <div slot="footer">
                <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal2: false,
                modal_loading: false
            }
        },
        methods: {
            del () {
                this.modal_loading = true;//btn转圈圈的时候点击事件会失效
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('Successfully delete');
                }, 2000);
            }
        }
    }
</script>