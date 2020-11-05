<template>
    <div class="boxEdit textcp-boxEdit" :data-code="content.code" v-if="editPartShow">
        <el-form ref="form" :model="colorPicker" size="mini" v-if="!styleShow">
          <el-form-item label="文字" >
            <el-input placeholder="请输入文字" v-model="content.text"></el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" :model="colorPicker" size="mini" v-else>
            <el-form-item class="cui-inline-reset" v-for="(item,index) in colorPicker.content" 
            :label="item.title" :key="item.style">
                <el-color-picker @active-change=" (value) => setStyle(value,item.style)" 
                  v-model="oStyle[item.style]" show-alpha>
                </el-color-picker>
                <span class="black-text-shadow" :style="{color: oStyle[item.style]}">
                </span>
            </el-form-item>
            <el-form-item label="文字大小" >
              <el-input placeholder="" v-model="oStyle.fontSize" max="48" min="12" type="number">
              </el-input>px
            </el-form-item>
        </el-form>
    </div>
</template>
<script type="text/javascript">
  export default{
    name: 'TextCpEdit',
    props: { //父组件传入的参数
        content: Object,
        oStyle: Object,
        aIndex: Number,
        editPartShow:Boolean,
        styleShow:Boolean
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
              
          }
        }
    },
    methods:{
        setStyle(value,style){
            //根据上面传入的style属性，实时改变现有的值
            this.$set(this.oStyle,style,value);
        }
    }
  }
</script>