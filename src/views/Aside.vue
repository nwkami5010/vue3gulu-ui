<template>
  <transition name="slide">
    <aside v-show="menuVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>基础组件</h2>
      <ol>
        <li v-for="(item,index) in list1" :key="index">
          <router-link active-class='active' :to="item.url">{{item.name}}</router-link>
        </li>


      </ol>

    </aside>
  </transition>
</template>
<script lang="ts">
import { inject, Ref,reactive } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const list1 =reactive([
      { url: "/doc/switch", name: "Switch 开关" },
      { url: "/doc/button", name: "Button 按钮" },
      { url: "/doc/dialog", name: "Dialog 对话框" },
      { url: "/doc/tabs", name: "Tab 标签页" },
      { url: "/doc/input", name: "input 输入框" },

     // { url: "/doc/radio", name: "Radio  单选框"},
      { url: "/doc/message", name: "Message 提醒"},
      { url: "/doc/collapse", name: "collapse 折叠面板"},
    ])
    return { menuVisible ,list1};
  },
};
</script>
<style lang="scss">
$lightbgc: #fff9f9;
$deepbgc: #c67085;
$text: #6f2e6a;
aside {
  position: absolute;
  top: 0;
  left: 0;
  width: 285px;
  height: 110vh;
  // font-size: 18px;
  padding: 16px 0;
  padding-top: 80px;
  background: #fff;
  box-shadow: 5px 0 5px rgba(#333, 0.1);
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.68, 0.18, 0.53, 0.18) 0.1s;
  > h2 {
    margin-bottom: 4px;
    margin-top: 16px;
    padding: 0 40px;
  }
  > ol {
    line-height: 40px;
    > li {
      > a {
        position: relative;
        height: 40px;
        color: $text;
        display: block;
        padding: 4px 50px;
        text-decoration: none;
        &:hover {
          // color: #fff;
          background: $lightbgc;
          border-bottom: none;
        }
      }
      .router-link-active {
        background: $lightbgc;
        // color: #fff;
        border-right: 3px solid $deepbgc;
        @media (min-width: 500px) {
          border-right: none;
          &::after {
            content: "";
            display: block;
            animation: bdrolate 0.8s;
            position: absolute;
            top: 0;
            right: 0;
            width: 3px;
            height: 40px;
            background-color: $deepbgc;
          }
        }
      }
    }
  }

  @keyframes bdrolate {
    0% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
}
</style>
