<template>
    <transition name="slide-right">
        <div v-if="sortApi.length > 0 && editShow === true">
            <el-tabs v-model="activeName">
                <el-tab-pane label="组件设置" name="first">
                    <div v-for="(appUi,index) in sortApi" :is="appUi.component+'Edit'" 
                    :styleShow="false"  :content="appUi.content" 
                    :oStyle="appUi.style" :editPartShow="index == editIndex" 
                    :aIndex="index" :currentIndex="editIndex" :key="appUi.content.code">
                    </div>
                </el-tab-pane>
                <el-tab-pane label="样式设置" name="second">
                  <div v-for="(appUi,index) in sortApi" 
                  :is="appUi.component+'Edit'" :styleShow="true" 
                  :content="appUi.content" :oStyle="appUi.style" 
                  :editPartShow="index == editIndex" :aIndex="index" 
                  :currentIndex="editIndex" :key="appUi.content.code">
                  </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </transition>
</template>
<script>
    import { mapState,mapMutations } from 'vuex';
    //组建的编辑栏，写成了一个组件
    import BtnEdit from "@/components/BtnEdit.vue";
    import TextCpEdit from "@/components/TextCpEdit.vue";
    export default{
        name: 'BaseEdit',
        components: {
          BtnEdit,TextCpEdit
        },
        data(){
            return{
                colorPicker: {
                    type: '颜色设置',
                    name: 'Picker',
                    content:[
                        {
                            title: '背景颜色',
                            style: 'background'
                        },
                        {
                            title: '字体颜色',
                            style: 'color'
                        }
                    ]
                    
                },
                activeName: 'first'
            }
        },
        
        computed:{
            ...mapState(['editIndex','sortApi','editShow'])
        },
        methods:{
            setStyle(value,style){
                //根据上面传入的style属性，实时改变现有的值
                this.$set(this.sortApi[this.editIndex].style,style,value);
            }
        }
    }
</script>