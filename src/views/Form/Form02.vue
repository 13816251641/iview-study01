<template>

    <div>
        <el-upload
                action="#"
                :auto-upload="false"
                :limit="1"
                :multiple="false"
                :file-list="fileList"
                :on-exceed="handleExceedSingle"
                :on-change="uploadSingleFileChange">
            <Button size="small" type="primary">+ 点击重新上传</Button>
        </el-upload>
        <a style="text-decoration: underline;margin-left: 10px" href="javascript:void(0);" @click="delImg">删除</a>
        <Button @click="submit">提交</Button>
    </div>
</template>



<script>
    export default {
        data(){
            return {
                name:'lujieni',
                fileList:[],
                uploadFileResult:[]
            }
        },
        methods:{
            submit(){
                if (this.uploadFileResult.length === 0) {
                    this.$Message.info({
                        content: '没有需要上传的图片',
                        duration: 1,
                        closable: true
                    });
                    return;
                }
                this.http.post('/upload',{
                    imgStr:this.uploadFileResult[0].imgStr,
                    fileName:this.uploadFileResult[0].fileName
                }).then(res=>{
                    console.log(res);
                });
            },
            readFileData(file,list){
                //获取文件信息
                //debugger;
                let reader = new FileReader();
                reader.readAsDataURL(file.raw);//FileReader使用base64编码图片
                reader.onload = function (e) {
                    let res = {
                        fileName : file.name,
                        imgStr : e.target.result
                    }
                    list.push(res);
                };
            },
            delImg(){
                this.uploadFileResult = [];
                this.fileList = [];
            },
            /*
                组件本地上传成功后的回调,文件上传数量超标不会回调
            */
            uploadSingleFileChange(file,fileList){
                console.log(file);
                console.log(fileList);
                this.readFileData(file,this.uploadFileResult);
            },
            /*
                上传文件个数超标的回调
             */
            handleExceedSingle(){
                this.$Message.info({
                    content: '只能上传一个文件，请删除后再上传',
                    duration: 1,
                    closable: true
                });
            }
        }
    }


</script>


<style scoped>
    /deep/ .el-upload__input {
        display: none;
    }
</style>


