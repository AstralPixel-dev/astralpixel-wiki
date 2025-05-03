/**
 * 自定义脚本 - 处理附魔页aside元素
 */

// 检测当前页面是否是附魔页
function isEnchantPage() {
  // 检查URL是否包含enchants
  if (window.location.pathname.includes('/guide/enchants')) {
    return true;
  }
  
  // 检查页面内容是否包含enchant-table
  return document.querySelector('.enchant-table') !== null;
}

// 移除aside元素
function removeAside() {
  const asideElements = document.querySelectorAll('.aside');
  
  if (asideElements.length) {
    // 移除所有aside元素
    asideElements.forEach(el => {
      el.style.display = 'none';
      el.style.width = '0';
      el.parentNode.style.gridTemplateColumns = '1fr';
    });
    
    // 设置内容容器宽度为100%
    const contentContainers = document.querySelectorAll('.content-container');
    contentContainers.forEach(el => {
      el.style.maxWidth = '100%';
    });
    
    console.log('附魔页aside元素已移除');
  }
}

// 等待DOM加载完成
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    if (isEnchantPage()) {
      // 首次加载时移除
      removeAside();
      
      // 处理SPA导航，监视URL变化
      const observer = new MutationObserver(() => {
        if (isEnchantPage()) {
          removeAside();
        }
      });
      
      // 监视DOM变化
      observer.observe(document.body, { childList: true, subtree: true });
      
      // 兜底方案：定时检查
      setInterval(() => {
        if (isEnchantPage()) {
          removeAside();
        }
      }, 1000);
    }
  });
} 