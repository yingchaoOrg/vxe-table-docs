(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-251f907e"],{"99af":function(e,t,a){"use strict";var n=a("23e7"),r=a("da84"),d=a("d039"),l=a("e8b5"),i=a("861d"),o=a("7b0b"),s=a("07fa"),c=a("8418"),h=a("65f0"),u=a("1dde"),g=a("b622"),p=a("2d00"),m=g("isConcatSpreadable"),f=9007199254740991,b="Maximum allowed index exceeded",v=r.TypeError,x=p>=51||!d((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),k=u("concat"),R=function(e){if(!i(e))return!1;var t=e[m];return void 0!==t?!!t:l(e)},A=!x||!k;n({target:"Array",proto:!0,forced:A},{concat:function(e){var t,a,n,r,d,l=o(this),i=h(l,0),u=0;for(t=-1,n=arguments.length;t<n;t++)if(d=-1===t?l:arguments[t],R(d)){if(r=s(d),u+r>f)throw v(b);for(a=0;a<r;a++,u++)a in d&&c(i,u,d[a])}else{if(u>=f)throw v(b);c(i,u++,d)}return i.length=u,i}})},ce3a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("vxe-grid",{ref:"xGrid",attrs:{border:"","show-overflow":"","keep-source":"",height:"460",loading:e.loading,data:e.tableData,columns:e.tableColumn,"toolbar-config":e.tableToolbar,"edit-config":{trigger:"click",mode:"row"}},on:{"checkbox-change":e.checkboxChangeEvent,"checkbox-all":e.checkboxChangeEvent},scopedSlots:e._u([{key:"top",fn:function(){return[a("a-alert",{attrs:{type:"warning",message:"已选择 "+e.selectRecords.length+" 项",banner:""}})]},proxy:!0},{key:"toolbar_buttons",fn:function(){return[a("el-button",{on:{click:e.insertEvent}},[e._v("新增")]),a("el-button",{on:{click:e.saveEvent}},[e._v("保存")])]},proxy:!0}])}),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"tip"},[e._v(" 具体兼容请查看 "),a("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table-plugin-antd/tree/v2",target:"_blank"}},[e._v("vxe-table-plugin-antd")]),e._v(" 插件的 API"),a("br"),a("span",{staticClass:"red"},[e._v("（注：该示例仅供参考，具体逻辑请自行实现）")])])}],d=(a("99af"),a("4de4"),a("d3b7"),{data:function(){return{loading:!1,tableData:[],selectRecords:[],tableColumn:[{type:"checkbox",width:60},{type:"seq",title:"Number",width:80},{field:"name",title:"AInput",minWidth:140,editRender:{name:"AInput"}},{field:"role",title:"AAutoComplete",width:160,editRender:{name:"AAutoComplete",props:{dataSource:[]},events:{search:this.roleSearchEvent}}},{field:"age",title:"AInputNumber",width:160,editRender:{name:"AInputNumber",props:{max:35,min:18}}},{field:"sex",title:"ASelect",width:140,editRender:{name:"ASelect",options:[]}},{field:"sex1",title:"ASelect（不建议放在单元格）",width:260,editRender:{name:"ASelect",options:[],props:{mode:"multiple"}}},{field:"sex2",title:"ASelect",width:140,editRender:{name:"ASelect",optionGroups:[]}},{field:"region",title:"ACascader",width:200,editRender:{name:"ACascader",props:{options:[]}}},{field:"date7",title:"ADatePicker",width:140,editRender:{name:"ADatePicker",props:{type:"date",format:"YYYY/MM/DD"}}},{field:"date8",title:"AMonthPicker",width:140,editRender:{name:"AMonthPicker"}},{field:"date9",title:"AWeekPicker",width:140,editRender:{name:"AWeekPicker"}},{field:"date11",title:"ARangePicker",width:260,editRender:{name:"ARangePicker"}},{field:"date10",title:"ATimePicker",width:140,editRender:{name:"ATimePicker"}},{field:"attr1",title:"ATreeSelect",width:140,editRender:{name:"ATreeSelect",props:{treeData:[]}}},{field:"attr2",title:"ATreeSelect（不建议放在单元格）",width:300,editRender:{name:"ATreeSelect",props:{treeData:[],treeCheckable:!0}}},{field:"flag",title:"ASwitch",width:100,cellRender:{name:"ASwitch"}},{field:"rate",title:"ARate",width:200,cellRender:{name:"ARate"}}],sexList:[{label:"",value:""},{label:"男",value:"1"},{label:"女",value:"0"}],regionList:[{label:"北京",value:1,children:[{value:3,label:"东城区"},{value:4,label:"西城区"}]},{label:"上海",value:21,children:[{value:23,label:"黄浦区"},{value:24,label:"卢湾区"}]},{label:"广东",value:42,children:[{value:43,label:"广州市"},{value:67,label:"深圳市"}]}],tableToolbar:{slots:{buttons:"toolbar_buttons"}},restaurants:["前端","后端","开发","测试"],demoCodes:['\n        <vxe-grid\n          border\n          show-overflow\n          keep-source\n          ref="xGrid"\n          height="460"\n          :loading="loading"\n          :data="tableData"\n          :columns="tableColumn"\n          :toolbar-config="tableToolbar"\n          :edit-config="{trigger: \'click\', mode: \'row\'}"\n          @checkbox-change="checkboxChangeEvent"\n          @checkbox-all="checkboxChangeEvent">\n          <template #top>\n            <a-alert type="warning" :message="`已选择 ${selectRecords.length} 项`" banner></a-alert>\n          </template>\n          <template #toolbar_buttons>\n            <el-button @click="insertEvent">新增</el-button>\n            <el-button @click="saveEvent">保存</el-button>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              selectRecords: [],\n              tableColumn: [\n                { type: 'checkbox', width: 60 },\n                { type: 'seq', title: 'Number', width: 80 },\n                { field: 'name', title: 'AInput', minWidth: 140, editRender: { name: 'AInput' } },\n                { field: 'role', title: 'AAutoComplete', width: 160, editRender: { name: 'AAutoComplete', props: { dataSource: [] }, events: { search: this.roleSearchEvent } } },\n                { field: 'age', title: 'AInputNumber', width: 160, editRender: { name: 'AInputNumber', props: { max: 35, min: 18 } } },\n                { field: 'sex', title: 'ASelect', width: 140, editRender: { name: 'ASelect', options: [] } },\n                { field: 'sex1', title: 'ASelect（不建议放在单元格）', width: 260, editRender: { name: 'ASelect', options: [], props: { mode: 'multiple' } } },\n                { field: 'sex2', title: 'ASelect', width: 140, editRender: { name: 'ASelect', optionGroups: [] } },\n                { field: 'region', title: 'ACascader', width: 200, editRender: { name: 'ACascader', props: { options: [] } } },\n                { field: 'date7', title: 'ADatePicker', width: 140, editRender: { name: 'ADatePicker', props: { type: 'date', format: 'YYYY/MM/DD' } } },\n                { field: 'date8', title: 'AMonthPicker', width: 140, editRender: { name: 'AMonthPicker' } },\n                { field: 'date9', title: 'AWeekPicker', width: 140, editRender: { name: 'AWeekPicker' } },\n                { field: 'date11', title: 'ARangePicker', width: 260, editRender: { name: 'ARangePicker' } },\n                { field: 'date10', title: 'ATimePicker', width: 140, editRender: { name: 'ATimePicker' } },\n                { field: 'attr1', title: 'ATreeSelect', width: 140, editRender: { name: 'ATreeSelect', props: { treeData: [] } } },\n                { field: 'attr2', title: 'ATreeSelect（不建议放在单元格）', width: 300, editRender: { name: 'ATreeSelect', props: { treeData: [], treeCheckable: true } } },\n                { field: 'flag', title: 'ASwitch', width: 100, cellRender: { name: 'ASwitch' } },\n                { field: 'rate', title: 'ARate', width: 200, cellRender: { name: 'ARate' } }\n              ],\n              sexList: [\n                { label: '', value: '' },\n                { label: '男', value: '1' },\n                { label: '女', value: '0' }\n              ],\n              regionList: [\n                {\n                  label: '北京',\n                  value: 1,\n                  children: [\n                    { value: 3, label: '东城区' },\n                    { value: 4, label: '西城区' }\n                  ]\n                },\n                {\n                  label: '上海',\n                  value: 21,\n                  children: [\n                    { value: 23, label: '黄浦区' },\n                    { value: 24, label: '卢湾区' }\n                  ]\n                },\n                {\n                  label: '广东',\n                  value: 42,\n                  children: [\n                    { value: 43, label: '广州市' },\n                    { value: 67, label: '深圳市' }\n                  ]\n                }\n              ],\n              tableToolbar: {\n                slots: {\n                  buttons: 'toolbar_buttons'\n                }\n              },\n              restaurants: ['前端', '后端', '开发', '测试']\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.tableData = [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex1: [], region: [], age: 28, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 5, rate1: 59, flag: false, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '1', sex1: [], region: [], age: 22, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 22, flag: false, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '0', sex1: [], region: [], age: 32, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 12, flag: false, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', sex1: ['1', '0'], region: [], age: 23, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 33, rate1: 4, flag: true, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex1: ['1', '0'], region: [], age: 30, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 0, rate1: 15, flag: true, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', sex1: [], region: [], age: 21, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 73, flag: false, address: 'Shenzhen' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', sex1: ['1'], region: [], age: 29, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 0, rate1: 0, flag: true, address: 'Guangzhou' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', sex1: [], region: [], age: 35, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 14, flag: false, address: 'Shenzhen' },\n                { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: '1', sex1: ['0'], region: [], age: 24, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 52, flag: false, address: 'Shenzhen' },\n                { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '1', sex1: [], region: [], age: 20, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 4, rate1: 83, flag: false, address: 'Guangzhou' }\n              ]\n              this.loading = false\n            }, 500)\n            this.tableColumn[5].editRender.options = this.sexList\n            this.tableColumn[6].editRender.options = this.sexList\n            this.tableColumn[8].editRender.props.options = this.regionList\n            this.findSexGroupList()\n            this.findTreeSelectList()\n          },\n          methods: {\n            findSexGroupList () {\n              let sexGroupList = [\n                {\n                  label: '分组1',\n                  options: [\n                    {\n                      label: '男',\n                      value: '1'\n                    }\n                  ]\n                },\n                {\n                  label: '分组2',\n                  options: [\n                    {\n                      label: '女',\n                      value: '0'\n                    }\n                  ]\n                }\n              ]\n              this.tableColumn[7].editRender.optionGroups = sexGroupList\n            },\n            findTreeSelectList () {\n              let treeData = [{\n                title: 'Node1',\n                value: '0-0',\n                key: '0-0',\n                children: [{\n                  title: 'Child Node1',\n                  value: '0-0-0',\n                  key: '0-0-0'\n                }]\n              }, {\n                title: 'Node2',\n                value: '0-1',\n                key: '0-1',\n                children: [{\n                  title: 'Child Node3',\n                  value: '0-1-0',\n                  key: '0-1-0',\n                  disabled: true\n                }, {\n                  title: 'Child Node4',\n                  value: '0-1-1',\n                  key: '0-1-1'\n                }, {\n                  title: 'Child Node5',\n                  value: '0-1-2',\n                  key: '0-1-2'\n                }]\n              }]\n              this.tableColumn[14].editRender.props.treeData = treeData\n              this.tableColumn[15].editRender.props.treeData = treeData\n            },\n            insertEvent () {\n              let xGrid = this.$refs.xGrid\n              let record = {\n                role: '',\n                age: 18,\n                sex1: [],\n                region: [],\n                flag: false,\n                rate: 2\n              }\n              xGrid.insert(record).then(({ row }) => xGrid.setActiveRow(row))\n            },\n            saveEvent () {\n              let { insertRecords, removeRecords, updateRecords } = this.$refs.xGrid.getRecordset()\n              if (insertRecords.length || removeRecords.length || updateRecords.length) {\n                this.$alert(`insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`)\n              } else {\n                this.$alert('数据未改动！')\n              }\n            },\n            roleSearchEvent ({ row }, value) {\n              let dataSource = this.restaurants.filter(option => option.toUpperCase().indexOf((value || '').toUpperCase()) !== -1)\n              this.tableColumn[3].editRender.props.dataSource = dataSource\n            },\n            checkboxChangeEvent () {\n              this.selectRecords = this.$refs.xGrid.getCheckboxRecords()\n            }\n          }\n        }\n        "]}},created:function(){var e=this;this.loading=!0,setTimeout((function(){e.tableData=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex1:[],region:[],age:28,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:5,rate1:59,flag:!1,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"1",sex1:[],region:[],age:22,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:22,flag:!1,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"0",sex1:[],region:[],age:32,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:12,flag:!1,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",sex1:["1","0"],region:[],age:23,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:33,rate1:4,flag:!0,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",sex1:["1","0"],region:[],age:30,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:0,rate1:15,flag:!0,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"0",sex1:[],region:[],age:21,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:73,flag:!1,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"1",sex1:["1"],region:[],age:29,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:0,rate1:0,flag:!0,address:"Guangzhou"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"1",sex1:[],region:[],age:35,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:14,flag:!1,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Test",sex:"1",sex1:["0"],region:[],age:24,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:52,flag:!1,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"1",sex1:[],region:[],age:20,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:4,rate1:83,flag:!1,address:"Guangzhou"}],e.loading=!1}),500),this.tableColumn[5].editRender.options=this.sexList,this.tableColumn[6].editRender.options=this.sexList,this.tableColumn[8].editRender.props.options=this.regionList,this.findSexGroupList(),this.findTreeSelectList()},methods:{findSexGroupList:function(){var e=[{label:"分组1",options:[{label:"男",value:"1"}]},{label:"分组2",options:[{label:"女",value:"0"}]}];this.tableColumn[7].editRender.optionGroups=e},findTreeSelectList:function(){var e=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node3",value:"0-1-0",key:"0-1-0",disabled:!0},{title:"Child Node4",value:"0-1-1",key:"0-1-1"},{title:"Child Node5",value:"0-1-2",key:"0-1-2"}]}];this.tableColumn[14].editRender.props.treeData=e,this.tableColumn[15].editRender.props.treeData=e},insertEvent:function(){var e=this.$refs.xGrid,t={role:"",age:18,sex1:[],region:[],flag:!1,rate:2};e.insert(t).then((function(t){var a=t.row;return e.setActiveRow(a)}))},saveEvent:function(){var e=this.$refs.xGrid.getRecordset(),t=e.insertRecords,a=e.removeRecords,n=e.updateRecords;t.length||a.length||n.length?this.$alert("insertRecords=".concat(t.length,"; removeRecords=").concat(a.length,"; updateRecords=").concat(n.length)):this.$alert("数据未改动！")},roleSearchEvent:function(e,t){var a=this.restaurants.filter((function(e){return-1!==e.toUpperCase().indexOf((t||"").toUpperCase())}));this.tableColumn[3].editRender.props.dataSource=a},checkboxChangeEvent:function(){this.selectRecords=this.$refs.xGrid.getCheckboxRecords()}}}),l=d,i=a("2877"),o=Object(i["a"])(l,n,r,!1,null,null,null);t["default"]=o.exports}}]);