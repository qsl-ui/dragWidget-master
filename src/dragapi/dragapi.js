//侧边栏数据配置
const dragApi = {
  type:"drag",
  name:"moye drag",
  configList:[
    {
      type:"layout",
      title:"布局",
      content:[
        {
          type:"Single",
          dragShow:true,
          title:"单栏",
          class:"icon-single"
        }
      ]
    },
    {
      type:"component",
      title:"组件",
      content:[
        {
          type:"Btn",
          dragShow:true,
          title:"按钮",
          class:"icon-btn"
        },
        {
          type:"TextCp",
          dragShow:true,
          title:"文字",
          class:"icon-txt"
        }
      ]
    }
  ]
}


export default dragApi
  