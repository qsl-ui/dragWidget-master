<template>
    <!--用的element-ui-->
    <el-container class="mainWrap">
        <el-aside class="app-left">
          <!--左侧数据栏 -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>组件</span>
            </div>
            <draggable class="app-aside-drag" :options="dragOption" @end="onEnd">
                <div class="app-aside-list" v-for="(dragList,index) in dragData"  
                :type="dragList.type" :key="dragList.type">
                    <div class="aside-item-body">
                        <i class="aside-item-ele"></i>
                        <span class="aside-item-ele">{{ dragList.title }}</span>
                    </div>
                </div>
            </draggable>
          </el-card>
        </el-aside>
        <div class="app-main">
                <section class="app-phone">
                    <div class="app-phone-header">
                        <span class="phone-camera"></span>
                        <span class="phone-ls"></span>
                    </div>
                    <!--页面view区 -->
                    <Sort class="app-phone-body"></Sort>
                    <div class="app-phone-footer">
                    </div>
                </section>
        </div>
        <el-aside class="app-right">
            <!--组件编辑区域-->
            <BaseEdit></BaseEdit>
        </el-aside>
    </el-container>
</template>
<script>
import DragApi from "@/dragapi/dragapi.js";
import Draggable from "vuedraggable";
import Sort from "@/view/Sort";
import BaseEdit from "@/view/BaseEdit";
export default {
  name: 'App',
  data(){
	    return{
	        dragData: {},
	        dragOption: {
	            group: {
	                name: 'components', //这个很重要，其他的与之能产生关联的拖拽框就靠这name 一定要一致
	                pull: 'clone',  
	                put: false
	            },
	            sort: false//默然为true。这里我们只需要他拖拽，无需能拖动排序
          }
	    }
	},
	components: {
	    Draggable,
	    Sort,
      BaseEdit
	},
  methods:{
    onEnd(res){
      console.log(res);
    }
  },
	created(){
	    //侧边栏拖拽列表数据
	    //这里我只写了组件的数据进来，布局的暂时没放
	    this.dragData = DragApi.configList[1].content;
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
