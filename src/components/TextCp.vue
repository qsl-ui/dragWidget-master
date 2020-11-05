<template>
    <div class="sortItem textcp-box ui-sortable" :data-code="content.code">
        <span class="ui-textcp"
            :style="[oStyle, {fontSize: oStyle.fontSize + 'px' }]">
            {{ content.text }}
        </span>
        
        <DeleteCp :aIndex="aIndex"></DeleteCp>
    </div>
</template>
<script>
//按钮组件，
    import DeleteCp from "@/components/DeleteCp";
    export default {
        name: 'TextCp',
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
                textCpModel: 'textcp-model'
            }
        }
    }
</script>