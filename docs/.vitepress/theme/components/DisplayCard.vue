<script setup lang="ts">
const props = defineProps<{
  title: string
  link: string
  target?: string
}>()
const defaultProps = {
  target: "_self",
}
</script>

<template>
  <ClientOnly>
    <div class="ncard">
      <a :href="props.link" :target="props.target || defaultProps.target">
        <div class="ncardBody">
          <div class="card-title">{{ props.title }}</div>
          <div class="card-text">
            <slot></slot>
          </div>
        </div>
      </a>
    </div>
  </ClientOnly>
</template>

<style scoped lang="less">
.ncard {
  border-radius: 8px;
  transition: all 200ms ease-out;
  margin-bottom: 2em;
  border: 1px solid #ebedf0;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  &:hover {
    border-color: var(--vp-c-brand);
    box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, 0.1);

    transform: scale(1.01);
  }

  .ncardBody {
    padding: 1.8em;
  }
}

a {
  color: var(--vp-c-text-1);
  text-decoration: none;

  &::after {
    content: none !important;
  }
}

.card-title {
  font-size: 1.5em;
  margin-bottom: 0.8em;
}

.card-text {
  font-size: 0.9em;
}

html:not(.dark) {
  .ncard {
    background: #fff;
    border-color: #ebedf0;
    color: #333;
  }
}

html.dark {
  .ncard {
    // background: #1e1e1e;
    border-color: #3a3a3a;
    color: #d0d0d0;
  }
  a {
    color: #d0d0d0;
  }
  .card-title {
    color: #fff;
  }
}
</style>
