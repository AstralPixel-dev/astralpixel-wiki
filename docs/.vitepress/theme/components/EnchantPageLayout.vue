<template>
  <div class="enchant-page-wrapper">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// 使用简单的脚本添加类名到父元素
onMounted(() => {
  if (typeof window === 'undefined') return
  
  // 安全地获取父级文档元素
  const wrapper = document.querySelector('.enchant-page-wrapper')
  if (!wrapper) return
  
  let parent = wrapper
  while (parent && !parent.classList.contains('VPDoc')) {
    parent = parent.parentElement
  }
  
  // 找到文档容器后，添加自定义类名
  if (parent) {
    parent.classList.add('enchant-page-doc')
  }
})
</script>

<style>
/* 特定于附魔页面的样式 */
.enchant-page-wrapper {
  width: 100%;
  display: block;
}

/* 通过父级类名定位，更兼容的方式 */
.enchant-page-doc .aside {
  display: none !important;
}

.enchant-page-doc .container {
  grid-template-columns: 1fr !important;
}

.enchant-page-doc .content-container {
  max-width: 100% !important;
}
</style> 