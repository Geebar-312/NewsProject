<!--
 * @Author: Geebar_312 3399457143@qq.com
 * @Date: 2024-04-15 15:18:36
 * @LastEditors: Geebar_312 3399457143@qq.com
 * @LastEditTime: 2024-04-26 10:02:07
 * @FilePath: \newsproject\admin\src\views\center\Center.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <el-page-header content="个人中心" icon="" title="企业门户网站管理系统" />
        <el-row :gutter="20" class="el-row">
            <el-col :span="8">
                <el-card class="box-card">
                    <el-avatar :size="100" :src="avatarUrl" />
                    <h3>{{ store.state.userInfo.username }}</h3>
                    <h3>{{ store.state.userInfo.role === 1 ? '管理员' : '编辑' }}</h3>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>个人信息</span>
                        </div>

                    </template>

                    <el-form ref="userFormRef" :model="userForm" :rules="userFormRules" label-width="120px"
                        class="demo-ruleForm">
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model="userForm.username" />
                        </el-form-item>

                        <el-form-item label="性别" prop="gender">
                            <el-select v-model="value" placeholder="Select" style="width: 240px">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </el-form-item>








                    </el-form>
                </el-card>

            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref, reactive } from 'vue'

const store = useStore()

const avatarUrl = computed(() => store.state.userInfo.avatar ? store.state.userInfo.avatar : `https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`)

const {username,gender,introduction,avatar} =store.state.userInfo
const userFormRef = ref()
const userForm = reactive({
    username,
    gender,
    introduction,
    avatar
})

const userFormRules =reactive({
    username: [
        { required: true, message: '请输入名字', trigger: 'blur' }, 
    ],
    gender: [
        { required: true, message: '请选择性别', trigger: 'blur' },
    ], 
    introduction: [
        { required: true, message: '请输入介绍', trigger: 'blur' },
    ], 
    avatar: [
        { required: true, message: '请上传头像', trigger: 'blur' },
    ], 


})




</script>

<style lang="scss" scoped>
.el-row {
    margin-top: 20px;

    .box-card {
        text-align: center;

    }
}
</style>