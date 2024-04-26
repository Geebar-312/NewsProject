<template>
    <el-header>
        <div class="left">
            <el-icon @click="handleCollapsed">
                <Menu />
            </el-icon>
            <span style="margin-left: 10px;">企业门户网站管理系统</span>
        </div>
        <div class="right">
            <span>欢迎 {{$store.state.userInfo.username}} 回来 </span>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon :size="30" color="white">
                        <User />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="handleLoginout">退出登录</el-dropdown-item>

                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>









    </el-header>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router"
import { Menu,User } from '@element-plus/icons-vue'

const store = useStore();
const router =useRouter();

const handleCollapsed = () => {
    store.commit("changeCollapsed")
}
const handleCenter = ()=>{
    router.push("/center")
}
const handleLoginout = ()=>{
    localStorage.removeItem("token")
    store.commit("clearUserInfo")
    router.push("/login")
}

</script>

<style lang="scss" scoped>
.el-header{
    background: #2d3a4b;
    color:white;
    height: 60px;
    width:100%;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left,.right{
    display: flex;
}
.left{
    i{
        margin: auto;
        cursor: pointer;
    }
}
.right{
    .el-dropdown{
        margin: auto;
    }
}
.el-dropdown-link{
    margin-left: 20px;
    margin-right: 8px;
}



</style>