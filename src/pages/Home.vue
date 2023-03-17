<template>
  <!-- 灯笼 -->
  <div class="light-box" v-show="!LightFlag">
    <div class="deng-box2">
      <div class="deng">
        <div class="xian"></div>
        <div class="deng-a">
          <div class="deng-b">
            <div class="deng-t">年</div>
          </div>
        </div>
        <div class="shui shui-a">
          <div class="shui-c"></div>
          <div class="shui-b"></div>
        </div>
      </div>
    </div>
    <div class="deng-box3">
      <div class="deng">
        <div class="xian"></div>
        <div class="deng-a">
          <div class="deng-b">
            <div class="deng-t">新</div>
          </div>
        </div>
        <div class="shui shui-a">
          <div class="shui-c"></div>
          <div class="shui-b"></div>
        </div>
      </div>
    </div>
    <div class="deng-box1">
      <div class="deng">
        <div class="xian"></div>
        <div class="deng-a">
          <div class="deng-b">
            <div class="deng-t">乐</div>
          </div>
        </div>
        <div class="shui shui-a">
          <div class="shui-c"></div>
          <div class="shui-b"></div>
        </div>
      </div>
    </div>
    <div class="deng-box">
      <div class="deng">
        <div class="xian"></div>
        <div class="deng-a">
          <div class="deng-b">
            <div class="deng-t">快</div>
          </div>
        </div>
        <div class="shui shui-a">
          <div class="shui-c"></div>
          <div class="shui-b"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 顶部导航 -->
  <div class="navigation" :class="{ active: !LightFlag }">
    <div class="nav-titleBox co zz">
      <!-- 占位符 -->
      <div class="co-left"></div>

      <!-- 主页标题 -->
      <div class="co-right" v-show="$route.fullPath == '/home/index'">
        <span class="titleBox-tag">HI MY NEW FRIEND!</span>
        <h1>
          Hello <br />
          I`m WangXiaoMing
        </h1>
        <a class="buttom navbtn" href="#next-one">了解一下 </a>
      </div>
      <!-- 项目页标题 -->
      <div class="co-right" v-show="$route.fullPath == '/home/project'">
        <span class="titleBox-tag">PORTFOLIO!</span>
        <h1>Don’t let the past steal your present</h1>
        <a class="buttom navbtn" href="#next-one">了解一下这些项目吧 </a>
      </div>

      <!-- 经验页 -->
    </div>
  </div>
  <div class="header borderafter">
    <!-- 返回按钮 -->
    <a style="position: absolute; left: 50px" href="javascript:history.back()">
      <svg
        t="1649246285004"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3737"
        width="20"
        height="20"
      >
        <path
          d="M98 468.9l322.8-322.8v184.4C743.6 376.7 881.9 607.3 928 837.8 812.7 676.4 651.3 602.6 420.8 602.6v189.1L98 468.9z"
          p-id="3738"
          fill="#254665"
        ></path>
      </svg>
    </a>

    <div class="col">
      <span>个人简历</span>
      <!-- 右边操作栏 -->
      <div class="header-right">
        <!-- 按钮 -->
        <div
          class="min_menu-wrap"
          :class="menuActive ? 'active' : ''"
          id="minmenu"
          @click="menuClick"
        >
          <span class="min_menu"></span>
        </div>
        <!-- 列表 -->
        <div class="menu_list" :class="menuActive ? 'active' : ''">
          <!-- 栏目 -->
          <ul class="header-nav">
            <li v-for="nav in navList" :class="{ active: activeId === nav.id }">
              <router-link @click="changeId(nav.id)" :to="nav.path">{{
                nav.name
              }}</router-link>
            </li>
          </ul>

          <div class="toggle-bar">
            <div class="moon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path
                  fill="currentColor"
                  d="M12 21Q8.25 21 5.625 18.375Q3 15.75 3 12Q3 8.25 5.625 5.625Q8.25 3 12 3Q12.35 3 12.688 3.025Q13.025 3.05 13.35 3.1Q12.325 3.825 11.713 4.987Q11.1 6.15 11.1 7.5Q11.1 9.75 12.675 11.325Q14.25 12.9 16.5 12.9Q17.875 12.9 19.025 12.287Q20.175 11.675 20.9 10.65Q20.95 10.975 20.975 11.312Q21 11.65 21 12Q21 15.75 18.375 18.375Q15.75 21 12 21ZM12 19Q14.2 19 15.95 17.788Q17.7 16.575 18.5 14.625Q18 14.75 17.5 14.825Q17 14.9 16.5 14.9Q13.425 14.9 11.262 12.738Q9.1 10.575 9.1 7.5Q9.1 7 9.175 6.5Q9.25 6 9.375 5.5Q7.425 6.3 6.213 8.05Q5 9.8 5 12Q5 14.9 7.05 16.95Q9.1 19 12 19ZM11.75 12.25Q11.75 12.25 11.75 12.25Q11.75 12.25 11.75 12.25Q11.75 12.25 11.75 12.25Q11.75 12.25 11.75 12.25Q11.75 12.25 11.75 12.25Q11.75 12.25 11.75 12.25Q11.75 12.25 11.75 12.25Q11.75 12.25 11.75 12.25Q11.75 12.25 11.75 12.25Q11.75 12.25 11.75 12.25Q11.75 12.25 11.75 12.25Q11.75 12.25 11.75 12.25Z"
                />
              </svg>
            </div>
            <a-switch :checked="LightFlag" @click="changeBlack" />
            <div class="sun-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path
                  fill="currentColor"
                  d="M12 5Q11.575 5 11.288 4.712Q11 4.425 11 4V2Q11 1.575 11.288 1.287Q11.575 1 12 1Q12.425 1 12.713 1.287Q13 1.575 13 2V4Q13 4.425 12.713 4.712Q12.425 5 12 5ZM16.95 7.05Q16.675 6.775 16.675 6.362Q16.675 5.95 16.95 5.65L18.35 4.225Q18.65 3.925 19.062 3.925Q19.475 3.925 19.775 4.225Q20.05 4.5 20.05 4.925Q20.05 5.35 19.775 5.625L18.35 7.05Q18.075 7.325 17.65 7.325Q17.225 7.325 16.95 7.05ZM20 13Q19.575 13 19.288 12.712Q19 12.425 19 12Q19 11.575 19.288 11.287Q19.575 11 20 11H22Q22.425 11 22.712 11.287Q23 11.575 23 12Q23 12.425 22.712 12.712Q22.425 13 22 13ZM12 23Q11.575 23 11.288 22.712Q11 22.425 11 22V20Q11 19.575 11.288 19.288Q11.575 19 12 19Q12.425 19 12.713 19.288Q13 19.575 13 20V22Q13 22.425 12.713 22.712Q12.425 23 12 23ZM5.65 7.05 4.225 5.65Q3.925 5.35 3.925 4.925Q3.925 4.5 4.225 4.225Q4.5 3.95 4.925 3.95Q5.35 3.95 5.625 4.225L7.05 5.65Q7.325 5.925 7.325 6.35Q7.325 6.775 7.05 7.05Q6.75 7.325 6.35 7.325Q5.95 7.325 5.65 7.05ZM18.35 19.775 16.95 18.35Q16.675 18.05 16.675 17.638Q16.675 17.225 16.95 16.95Q17.225 16.675 17.638 16.675Q18.05 16.675 18.35 16.95L19.775 18.35Q20.075 18.625 20.062 19.05Q20.05 19.475 19.775 19.775Q19.475 20.075 19.05 20.075Q18.625 20.075 18.35 19.775ZM2 13Q1.575 13 1.288 12.712Q1 12.425 1 12Q1 11.575 1.288 11.287Q1.575 11 2 11H4Q4.425 11 4.713 11.287Q5 11.575 5 12Q5 12.425 4.713 12.712Q4.425 13 4 13ZM4.225 19.775Q3.95 19.5 3.95 19.075Q3.95 18.65 4.225 18.375L5.65 16.95Q5.925 16.675 6.338 16.675Q6.75 16.675 7.05 16.95Q7.35 17.25 7.35 17.663Q7.35 18.075 7.05 18.375L5.65 19.775Q5.35 20.075 4.925 20.075Q4.5 20.075 4.225 19.775ZM12 18Q9.5 18 7.75 16.25Q6 14.5 6 12Q6 9.5 7.75 7.75Q9.5 6 12 6Q14.5 6 16.25 7.75Q18 9.5 18 12Q18 14.5 16.25 16.25Q14.5 18 12 18ZM12 16Q13.65 16 14.825 14.825Q16 13.65 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>

<script setup>
import { addColor } from "@/hooks/addColor";
import { defineComponent, onMounted, ref } from "vue";
import { SettingFilled } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(() => {
  LightFlag.value = localStorage.getItem("theme") == "black" ? false : true;
  initId();
});
// 主题切换
const isBlack = ref(true);
const LightFlag = ref();
const ToggleBtnClass = ref(["toggle-left"]);
const changeBlack = () => {
  LightFlag.value = !LightFlag.value;
  addColor(false);
  console.log(LightFlag.value);
};

const navList = [
  { id: "01", name: "主页", path: "/home/index", titleTag: "" },
  { id: "02", name: "项目", path: "/home/project" },
  { id: "03", name: "经验", path: "/home/experience" },
  { id: "04", name: "联系", path: "/home/contact" },
  { id: "05", name: "博客", path: "/blog" },
];

let activeId = ref("00");
const changeId = (id) => {
  activeId = id;
};
const initId = () => {
  console.log(router.currentRoute.value.path);
  let currentNav = navList.find((item) => {
    return item.path == router.currentRoute.value.path;
  });
  activeId = currentNav.id;
};

// 响应式遮罩层
let menuActive = ref(false);
const menuClick = () => {
  menuActive.value = !menuActive.value;
  console.log();
};
</script>

<style scoped>
@import "./css/home.css";

#myRadio {
  margin-left: 5px;
  margin-top: 3px;
}
.col {
  z-index: 999;
}
</style>

<style lang="less" scoped>
.ant-switch {
  margin: 0 5px;
  background: #fff;
}

.ant-switch-checked {
  background-color: var(--SwitchBgColor);
}

/deep/ .ant-switch-handle::before {
  background-color: var(--SwitchBtnColor);
}
</style>