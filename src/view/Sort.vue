<template>
    <draggable :options="sortOption" @sort="onSort" @add="onAdd" class="app-sort">
        <!-- ui组件 -->
        <!--这里不懂的人，可以去vue官网看看动态组件-->
        <div class="widgetBorder" v-bind:class="{ active: index == editIndex }" 
        v-for="(appUi,index) in sortApi" 
        :is="appUi.component" :content="appUi.content" :oStyle="appUi.style" 
        :editPartShow="appUi.editPartShow" :aIndex="index" 
        @click.native="getIndex(index)" :key="appUi.content.code">
        </div>
    </draggable>
</template>
<script>
    //利用vuex 辅助函数来操作vuexjs中的数据
    import { mapState,mapMutations } from 'vuex';
    //拖拽插件引入
    import Draggable from 'vuedraggable';
    //各个组件引入
    import Btn from "@/components/Btn.vue";
    import TextCp from "@/components/TextCp.vue";

    export default {
        name: 'Sort',
        components: {
            Draggable,Btn,TextCp
        },
        data(){
            return {
                sortOption: {
                    group: {
                      name: 'components', //前面说的name,在这里就起了作用，不一样，是不能放入的
                      pull: true,
                      put: true
                    },
                    sort: true,
                    animation: 300 //给了个动画，看起来舒服些
                }
            }
        },
        computed:{
            ...mapState(['editIndex','sortApi']),
        },
        watch:{
            sortApi:{
                handler(newVal,oldVal){
                    window.sessionStorage.setItem('localData',JSON.stringify(newVal));
                },
                deep: true
            }
        },
        methods:{
            ...mapMutations(['sortCp','addCp','setStyle','setCommon']),
            onSort(res){ //排序产生的事件
                console.log(res);
                if(res.from === res.to){
                    this.sortCp(res);
                }
                  
            },
            
            onAdd(res){//组件增加产生的事件
              console.log("onAdd");
                this.addCp(res);
            },
            ondrop(res){//.
              console.log("ondrop");
            },
            
          
            
            getIndex(index){
               this.setCommon({index,flag: true});
            }
        }
    }
</script>