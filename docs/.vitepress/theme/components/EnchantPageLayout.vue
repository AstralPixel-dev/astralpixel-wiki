<script setup>
// 在组件挂载后移除aside元素
import { onMounted, onUpdated } from 'vue'

const removeAside = () => {
  // 检查是否在客户端环境
  if (typeof window === 'undefined') return
  
  // 查找 aside 元素
  const asideElements = document.querySelectorAll('.aside')
  if (asideElements.length) {
    asideElements.forEach(el => {
      el.style.display = 'none'
      el.style.width = '0'
      el.style.maxWidth = '0'
      
      // 调整父元素的布局
      if (el.parentElement) {
        el.parentElement.style.gridTemplateColumns = '1fr'
      }
    })
    
    // 调整内容容器的宽度
    const contentContainers = document.querySelectorAll('.VPDoc.has-aside .content-container')
    contentContainers.forEach(el => {
      el.style.maxWidth = '100%'
    })
    
    console.log('已移除附魔页的aside元素')
  }
}

// 组件挂载后调用
onMounted(removeAside)

// 组件更新后调用，处理动态路由变化
onUpdated(removeAside)
</script>

<template>
  <div class="enchant-page-layout">
    <slot></slot>
  </div>
</template>

<style scoped>
.enchant-page-layout :deep(.VPDoc) {
  width: 100%;
  max-width: 100%;
}

.enchant-page-layout :deep(.VPDoc.has-aside .container) {
  display: block;
}

.enchant-page-layout :deep(.VPDoc.has-aside .content-container) {
  max-width: 100%;
}

.enchant-page-layout :deep(.aside) {
  display: none !important;
}
</style> 