<!--
 * @Author: Geebar_312 3399457143@qq.com
 * @Date: 2024-04-15 15:19:46
 * @LastEditors: Geebar_312 3399457143@qq.com
 * @LastEditTime: 2024-04-24 15:27:39
 * @FilePath: \newsproject\admin\src\views\home\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <el-page-header content="首页" icon="" title="企业门户管理系统" />
        <el-card class="box-card">
            <el-row>
                <el-col :span="4">
                    <el-avatar :size="100" :src="avatarUrl" />
                </el-col>
                <el-col :span="20">
                    <h3 style="line-height: 100px;">欢迎{{store.state.userInfo.username}}回来,{{ welcomeText }}</h3>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>公司产品</span>
                </div>

            </template>
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 text="2xl" justify="center">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>

        </el-card>



    </div>
</template>

<script setup>
// import axios from 'axios'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
console.log(store.state)

const welcomeText =computed(()=>new Date().getHours()<12?'要开心每一天':'喝杯咖啡提提神吧')

const avatarUrl = computed(() => store.state.userInfo.avatar ? store.state.userInfo.avatar : `https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`)
</script>
<style lang="scss" scoped>
.box-card {
    margin-top: 50px;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>