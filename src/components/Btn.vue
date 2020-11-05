
<template>
    <div class="btn-box ui-sortable sortItem" :data-code="content.code">
        <el-button class="ui-btn"
            :style="[oStyle, {fontSize: oStyle.fontSize + 'px' }]">
            {{ content.text }}
        </el-button>
        
        <DeleteCp :aIndex="aIndex"></DeleteCp>
    </div>
</template>
<script>
//按钮组件，
    import DeleteCp from "@/components/DeleteCp";
    export default {
        name: 'Btn',
        props: { //父组件传入的参数
            content: Object,
            oStyle: Object,
            aIndex: Number
        },
        components: {
            DeleteCp
        },
        data(){
            return{
                btnModel: 'btn-model'
            }
        }
    }
</script>