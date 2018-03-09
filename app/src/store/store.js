import Vue from 'vue'
import Vuex from 'vuex'
import list from '../data/data.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    userInfo:{
      username:'qq',
      password:'123456',
      re_password:'123456'
    },
    tableData: [{
        id: '01',
        name: '王小虎',
        position: '董事长',
        age:'3年',
        performance:'优秀',
        other:'...',
        birthday:'1978.02.09',
        address:'西二旗附近',
        phone:'12323454567',
        email:'48349574@qq.com',
        education:'本科',
        time:'2015.02.08',
        wages:'22k',
        duties:'组织讨论和决定公司的发展规划、经营方针和投资方案。组织讨论和决定公司的年度经营目标和利润指标。',
        src:'../static/8.jpg'

      }, {
        id: '02',
        name: '王梦',
        position: '总经理',
        age:'2年',
        performance:'良好',
        other:'...',
        birthday:'1988.02.09',
        address:'西二旗附近',
        phone:'12556678977',
        email:'4865574@qq.com',
        education:'本科',
        time:'2016.02.07',
        wages:'18k',
        duties:'根据工作实际进展状况，不断完善内部管理和运作的机制，加强对各岗位人员的阶段性工作检查考证和年中、年末的考核，加强政治思想工作，提升业务能力。定期向董事报告担保业务运行情况及财务收支情况。 ',
        src:'../static/10.jpg'
      }, {
        id: '03',
        name: '张明',
        position: '会计',
        age:'3年',
        performance:'优秀',
        other:'...',
        birthday:'1980.07.09',
        address:'西二旗附近',
        phone:'17656756788',
        email:'43349574@qq.com',
        education:'本科',
        time:'2015.07.08',
        wages:'15k',
        duties:'对主管部门和审计、财政、税务等部门依照法律和有关规定进行的监督，不得拒绝、隐匿、谎报。',
        src:'../static/6.jpg'
      }, {
        id: '04',
        name: '刘艳茹',
        position: '库管',
        age:'1年',
        performance:'良好',
        other:'...',
        birthday:'1978.05.05',
        address:'西二旗附近',
        phone:'12323454567',
        email:'54679574@qq.com',
        education:'本科',
        time:'2017.02.08',
        wages:'9k',
        duties:'商品的分离；商品质量、数量；对商品整理、清查、防治偷窃 注意防火 库房的使用安全情况',
        src:'../static/5.jpg'
      },{
        id: '05',
        name: '董洁',
        position: '人力',
        age:'3年',
        performance:'优秀',
        other:'...',
        birthday:'1988.011.09',
        address:'西二旗附近',
        phone:'12335675654',
        email:'7869574@qq.com',
        education:'本科',
        time:'2015.07.08',
        wages:'13k',
        duties:'制订和实施人力资源部年度工作目标和工作计划，按月做出预算及工作计划。每年度根据公司的经营目标及公司的人员需求计划审核公司的人员编制，对公司人员的档案进行统一的管理。',
        src:'../static/9.jpg'
      }, {
        id: '06',
        name: '李红',
        position: '秘书',
        age:'1年',
        performance:'良好',
        other:'...',
        birthday:'1998.02.09',
        address:'西二旗附近',
        phone:'156445675455',
        email:'32349574@qq.com',
        education:'本科',
        time:'2017.02.08',
        wages:'9k',
        duties:'负责组织部召开的各种会议的会务工作，做好会议记录，起草会议纪要、简报，协助督促各单位贯彻落实各项工作任务的情况',
        src:'../static/3.jpg'
      }, {
        id: '07',
        name: '王江',
        position: '采购',
        age:'2年',
        performance:'良好',
        other:'...',
        birthday:'1987.02.09',
        address:'西二旗附近',
        phone:'15645673456',
        email:'6649574@qq.com',
        education:'本科',
        time:'2016.02.08',
        wages:'7k',
        duties:'编制采购计划。负责根据生产、总务、设备及检验等各部室物品需求计划，编制与之相配套的采购计划，并组织具体的实施，保证经营过程中的物资供应。',
        src:'../static/1.jpg'
      }, {
        id: '08',
        name: '李小冉',
        position: '后勤',
        age:'1年',
        performance:'良好',
        other:'...',
        birthday:'1978.02.09',
        address:'西二旗附近',
        phone:'16545673454',
        email:'22349574@qq.com',
        education:'本科',
        time:'2017.02.08',
        wages:'8k',
        duties:'会议室及其设备的管理;负责外来客人的接待安排工作；完成公司领导交办的相关工作。',
        src:'../static/7.jpg'
      }, {
        id: '09',
        name: '张杰',
        position: '工程师',
        age:'3年',
        performance:'优秀',
        other:'...',
        birthday:'1989.02.09',
        address:'西二旗附近',
        phone:'1245434567',
        email:'229574@qq.com',
        education:'本科',
        time:'2015.02.08',
        wages:'19k',
        duties:'负责公司的核心技术',
        src:'../static/4.jpg'
      }, {
        id: '10',
        name: '王晓玲',
        position: '文员',
        age:'2年',
        performance:'良好',
        other:'...',
        birthday:'1988.02.09',
        address:'西二旗附近',
        phone:'12323454567',
        email:'48349574@qq.com',
        education:'本科',
        time:'2015.02.08',
        wages:'9k',
        duties:'文字处理、文档整理、复印文件、接听电话及处理办公室日常事务',
        src:'../static/2.jpg'
      }],
    logined:false,
  },
  getters:{

  },
  mutations:{
    login_btn(){
      this.$router.push({
        path:'/login'
      });
    },
    editLogined(state,bool){
      state.logined = bool;
    },

  }
})
