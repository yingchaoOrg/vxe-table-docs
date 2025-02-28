<template>
  <div>
    <p class="tip">
      通过调用 <table-api-link prop="validate"/> 函数校验数据，<table-api-link prop="edit-rules"/> 校验规则配置，如果第一个参数为 true 则全量校验<br>
      <span class="red">（如果不指定数据，则默认只校验临时变动的数据，例如新增或修改...等）</span>
    </p>

    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="insertEvent">新增</vxe-button>
        <vxe-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>
        <vxe-button @click="validEvent">快速校验</vxe-button>
        <vxe-button @click="fullValidEvent">完整快速校验</vxe-button>
        <vxe-button @click="validAllEvent">全量数据校验</vxe-button>
        <vxe-button @click="selectValidEvent">选中行校验</vxe-button>
        <vxe-button @click="getSelectEvent">获取选中</vxe-button>
        <vxe-button @click="getInsertEvent">获取新增</vxe-button>
        <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
        <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-overflow
      keep-source
      height="500"
      ref="xTable"
      :data="tableData"
      :edit-rules="validRules"
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-colgroup title="分组1">
        <vxe-column field="name" title="Name" :edit-render="{}">
          <template #edit="scope">
            <vxe-input v-model="scope.row.name" type="text" @change="$refs.xTable.updateStatus(scope)"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="role" title="Role" :edit-render="{}">
          <template #edit="scope">
            <vxe-input v-model="scope.row.role" type="text" @change="$refs.xTable.updateStatus(scope)"></vxe-input>
          </template>
        </vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="分组2">
        <vxe-colgroup title="分组21">
          <vxe-column field="sex" title="Sex" :edit-render="{}">
            <template #edit="scope">
              <vxe-input v-model="scope.row.sex" type="text" @change="$refs.xTable.updateStatus(scope)"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="age" title="Age" :edit-render="{}">
            <template #edit="scope">
              <vxe-input v-model="scope.row.age" type="integer" @change="$refs.xTable.updateStatus(scope)"></vxe-input>
            </template>
          </vxe-column>
          <vxe-column field="date" title="Date" :edit-render="{}">
            <template #edit="scope">
              <vxe-input v-model="scope.row.date" type="date" transfer @change="$refs.xTable.updateStatus(scope)"></vxe-input>
            </template>
          </vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="javascript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script>
import VXETable from 'vxe-table'

export default {
  data () {
    const nameValid = ({ cellValue }) => {
      // 模拟服务端校验
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (cellValue && (cellValue.length < 3 || cellValue.length > 50)) {
            reject(new Error('名称长度在 3 到 50 个字符之间'))
          } else {
            resolve()
          }
        }, 100)
      })
    }
    const roleValid = ({ cellValue }) => {
      if (cellValue && !['Develop', 'Test', 'Designer', 'PM'].includes(cellValue)) {
        return new Error('角色输入不正确')
      }
    }
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
      ],
      validRules: {
        name: [
          { required: true, message: 'app.body.valid.rName' },
          { validator: nameValid }
        ],
        role: [
          { validator: roleValid }
        ],
        sex: [
          { required: true, message: '性别必须填写' },
          { pattern: /^[0,1]{1}$/, message: '格式不正确' }
        ],
        age: [
          { pattern: '^[0-9]{0,3}$', message: '格式不正确' }
        ]
      },
      demoCodes: [
        `
        <vxe-toolbar>
          <template #buttons>
            <vxe-button @click="insertEvent">新增</vxe-button>
            <vxe-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>
            <vxe-button @click="validEvent">快速校验</vxe-button>
            <vxe-button @click="fullValidEvent">完整快速校验</vxe-button>
            <vxe-button @click="validAllEvent">全量数据校验</vxe-button>
            <vxe-button @click="selectValidEvent">选中行校验</vxe-button>
            <vxe-button @click="getSelectEvent">获取选中</vxe-button>
            <vxe-button @click="getInsertEvent">获取新增</vxe-button>
            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          border
          show-overflow
          keep-source
          height="500"
          ref="xTable"
          :data="tableData"
          :edit-rules="validRules"
          :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}">
          <vxe-column type="checkbox" width="60"></vxe-column>
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-colgroup title="分组1">
            <vxe-column field="name" title="Name" :edit-render="{}">
              <template #edit="scope">
                <vxe-input v-model="scope.row.name" type="text" @change="$refs.xTable.updateStatus(scope)"></vxe-input>
              </template>
            </vxe-column>
            <vxe-column field="role" title="Role" :edit-render="{}">
              <template #edit="scope">
                <vxe-input v-model="scope.row.role" type="text" @change="$refs.xTable.updateStatus(scope)"></vxe-input>
              </template>
            </vxe-column>
          </vxe-colgroup>
          <vxe-colgroup title="分组2">
            <vxe-colgroup title="分组21">
              <vxe-column field="sex" title="Sex" :edit-render="{}">
                <template #edit="scope">
                  <vxe-input v-model="scope.row.sex" type="text" @change="$refs.xTable.updateStatus(scope)"></vxe-input>
                </template>
              </vxe-column>
              <vxe-column field="age" title="Age" :edit-render="{}">
                <template #edit="scope">
                  <vxe-input v-model="scope.row.age" type="integer" @change="$refs.xTable.updateStatus(scope)"></vxe-input>
                </template>
              </vxe-column>
              <vxe-column field="date" title="Date" :edit-render="{}">
                <template #edit="scope">
                  <vxe-input v-model="scope.row.date" type="date" transfer @change="$refs.xTable.updateStatus(scope)"></vxe-input>
                </template>
              </vxe-column>
            </vxe-colgroup>
          </vxe-colgroup>
        </vxe-table>
        `,
        `
        import VXETable from 'vxe-table'
        
        export default {
          data () {
            const nameValid = ({ cellValue }) => {
              // 模拟服务端校验
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (cellValue && (cellValue.length < 3 || cellValue.length > 50)) {
                    reject(new Error('名称长度在 3 到 50 个字符之间'))
                  } else {
                    resolve()
                  }
                }, 100)
              })
            }
            const roleValid = ({ cellValue }) => {
              if (cellValue && !['Develop', 'Test', 'Designer', 'PM'].includes(cellValue)) {
                return new Error('角色输入不正确')
              }
            }
            return {
              tableData: [
                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
              ],
              validRules: {
                name: [
                  { required: true, message: 'app.body.valid.rName' },
                  { validator: nameValid }
                ],
                role: [
                  { validator: roleValid }
                ],
                sex: [
                  { required: true, message: '性别必须填写' },
                  { pattern: /^[0,1]{1}$/, message: '格式不正确' }
                ],
                age: [
                  { pattern: '^[0-9]{0,3}$', message: '格式不正确' }
                ]
              }
            }
          },
          methods: {
            async validEvent () {
              const $table = this.$refs.xTable
              const errMap = await $table.validate().catch(errMap => errMap)
              if (errMap) {
                VXETable.modal.message({ status: 'error', content: '校验不通过！' })
              } else {
                VXETable.modal.message({ status: 'success', content: '校验成功！' })
              }
            },
            async fullValidEvent () {
              const $table = this.$refs.xTable
              const errMap = await $table.fullValidate().catch(errMap => errMap)
              if (errMap) {
                const msgList = []
                Object.values(errMap).forEach(errList => {
                  errList.forEach(params => {
                    const { rowIndex, column, rules } = params
                    rules.forEach(rule => {
                      msgList.push(\`第 \${rowIndex + 1} 行 \${column.title} 校验错误：\${rule.message}\`)
                    })
                  })
                })
                VXETable.modal.message({
                  status: 'error',
                  slots: {
                    default () {
                      return [
                        <div class="red" style="max-height: 400px;overflow: auto;">
                          {
                            msgList.map(msg => <div>{ msg }</div>)
                          }
                        </div>
                      ]
                    }
                  }
                })
              } else {
                VXETable.modal.message({ status: 'success', content: '校验成功！' })
              }
            },
            async validAllEvent () {
              const $table = this.$refs.xTable
              const errMap = await $table.validate(true).catch(errMap => errMap)
              if (errMap) {
                VXETable.modal.message({ status: 'error', content: '校验不通过！' })
              } else {
                VXETable.modal.message({ status: 'success', content: '校验成功！' })
              }
            },
            async selectValidEvent () {
              const $table = this.$refs.xTable
              const selectRecords = $table.getCheckboxRecords()
              if (selectRecords.length > 0) {
                const errMap = await $table.validate(selectRecords).catch(errMap => errMap)
                if (errMap) {
                  VXETable.modal.message({ status: 'error', content: '校验不通过！' })
                } else {
                  VXETable.modal.message({ status: 'success', content: '校验成功！' })
                }
              } else {
                VXETable.modal.message({ status: 'warning', content: '未选中数据！' })
              }
            },
            async insertEvent () {
              const $table = this.$refs.xTable
              const { row: newRow } = await $table.insert()
              // 插入一条数据并触发校验
              const errMap = await $table.validate(newRow).catch(errMap => errMap)
              if (errMap) {
                // 校验不通过
              }
            },
            getSelectEvent () {
              const $table = this.$refs.xTable
              const selectRecords = $table.getCheckboxRecords()
              VXETable.modal.alert(selectRecords.length)
            },
            getInsertEvent () {
              const $table = this.$refs.xTable
              const insertRecords = $table.getInsertRecords()
              VXETable.modal.alert(insertRecords.length)
            },
            getRemoveEvent () {
              const $table = this.$refs.xTable
              const removeRecords = $table.getRemoveRecords()
              VXETable.modal.alert(removeRecords.length)
            },
            getUpdateEvent () {
              const $table = this.$refs.xTable
              const updateRecords = $table.getUpdateRecords()
              VXETable.modal.alert(updateRecords.length)
            }
          }
        }
        `
      ]
    }
  },
  methods: {
    async validEvent () {
      const $table = this.$refs.xTable
      const errMap = await $table.validate().catch(errMap => errMap)
      if (errMap) {
        VXETable.modal.message({ status: 'error', content: '校验不通过！' })
      } else {
        VXETable.modal.message({ status: 'success', content: '校验成功！' })
      }
    },
    async fullValidEvent () {
      const $table = this.$refs.xTable
      const errMap = await $table.fullValidate().catch(errMap => errMap)
      if (errMap) {
        const msgList = []
        Object.values(errMap).forEach(errList => {
          errList.forEach(params => {
            const { rowIndex, column, rules } = params
            rules.forEach(rule => {
              msgList.push(`第 ${rowIndex + 1} 行 ${column.title} 校验错误：${rule.message}`)
            })
          })
        })
        VXETable.modal.message({
          status: 'error',
          slots: {
            default () {
              return [
                <div class="red" style="max-height: 400px;overflow: auto;">
                  {
                    msgList.map(msg => <div>{ msg }</div>)
                  }
                </div>
              ]
            }
          }
        })
      } else {
        VXETable.modal.message({ status: 'success', content: '校验成功！' })
      }
    },
    async validAllEvent () {
      const $table = this.$refs.xTable
      const errMap = await $table.validate(true).catch(errMap => errMap)
      if (errMap) {
        VXETable.modal.message({ status: 'error', content: '校验不通过！' })
      } else {
        VXETable.modal.message({ status: 'success', content: '校验成功！' })
      }
    },
    async selectValidEvent () {
      const $table = this.$refs.xTable
      const selectRecords = $table.getCheckboxRecords()
      if (selectRecords.length > 0) {
        const errMap = await $table.validate(selectRecords).catch(errMap => errMap)
        if (errMap) {
          VXETable.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VXETable.modal.message({ status: 'success', content: '校验成功！' })
        }
      } else {
        VXETable.modal.message({ status: 'warning', content: '未选中数据！' })
      }
    },
    async insertEvent () {
      const $table = this.$refs.xTable
      const { row: newRow } = await $table.insert()
      // 插入一条数据并触发校验
      const errMap = await $table.validate(newRow).catch(errMap => errMap)
      if (errMap) {
        // 校验不通过
      }
    },
    getSelectEvent () {
      const $table = this.$refs.xTable
      const selectRecords = $table.getCheckboxRecords()
      VXETable.modal.alert(selectRecords.length)
    },
    getInsertEvent () {
      const $table = this.$refs.xTable
      const insertRecords = $table.getInsertRecords()
      VXETable.modal.alert(insertRecords.length)
    },
    getRemoveEvent () {
      const $table = this.$refs.xTable
      const removeRecords = $table.getRemoveRecords()
      VXETable.modal.alert(removeRecords.length)
    },
    getUpdateEvent () {
      const $table = this.$refs.xTable
      const updateRecords = $table.getUpdateRecords()
      VXETable.modal.alert(updateRecords.length)
    }
  }
}
</script>
