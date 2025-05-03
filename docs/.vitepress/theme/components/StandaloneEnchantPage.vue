<template>
  <div class="standalone-enchant-page">
    <h1 class="page-title">服务器新增附魔</h1>
    <div class="enchant-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// 在这里我们不需要任何复杂逻辑或DOM操作
// 这是一个完全独立的组件，不依赖VitePress的默认布局
</script>

<style>
/* 基础布局 */
.standalone-enchant-page {
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0 auto;
}

.page-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  display: none; /* 隐藏标题，因为markdown已有标题 */
}

.enchant-content {
  width: 100%;
  max-width: 100%;
  padding: 0;
}

/* 表格样式 */
.enchant-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  overflow: hidden;
  font-size: 14px;
}

.enchant-content th, 
.enchant-content td {
  padding: 0.8em 1em;
  border: 1px solid var(--vp-c-divider);
  line-height: 1.5;
  vertical-align: middle;
}

.enchant-content th {
  font-weight: 600;
  background-color: var(--vp-c-bg-soft);
  white-space: nowrap;
  text-align: center !important;
  border-bottom: 2px solid var(--vp-c-divider);
}

.enchant-content td {
  text-align: center;
  word-break: break-word;
}

/* 效果列左对齐 */
.enchant-content td:nth-child(4) {
  text-align: left;
}

/* 交替行颜色 */
.enchant-content tr:nth-child(even) {
  background-color: var(--vp-c-bg-soft);
}

.enchant-content tr:nth-child(odd) {
  background-color: var(--vp-c-bg);
}

/* 悬停效果 */
.enchant-content tr:hover {
  background-color: var(--vp-c-gray-soft);
}

/* 列宽设置 */
.enchant-content th:nth-child(1) { width: 12%; }
.enchant-content th:nth-child(2) { width: 8%; }
.enchant-content th:nth-child(3) { width: 15%; }
.enchant-content th:nth-child(4) { width: 40%; }
.enchant-content th:nth-child(5) { width: 25%; }

/* 响应式设计 */
@media (max-width: 768px) {
  .enchant-content th,
  .enchant-content td {
    padding: 0.6em;
    font-size: 13px;
  }
  
  .enchant-content table {
    display: block;
    overflow-x: auto;
  }
}
</style> 