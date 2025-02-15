<template>
  <div
    class="command-block"
    ref="commandBlockRef"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div v-if="tooltip" class="tooltip" :style="{ opacity: isHovered ? 1 : 0 }">
      {{ tooltip }}
    </div>

    <div class="command-content">
      <div class="command-text" :class="{ hovered: isHovered }">
        <span class="prompt">></span>
        <span class="slash">/</span>
        <slot />
      </div>

      <!-- Copy Button -->
      <button class="copy-button" @click="copyCommand">
        <span class="button-icon"><FontAwesomeIcon :icon="faCopy" /></span>
        <!-- This text is hidden by default, shown on hover -->
        <span class="button-text"><span class="shadow-text">复制</span></span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faCopy } from "@fortawesome/free-regular-svg-icons/faCopy"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import { ref, useSlots } from "vue"
import { useToast } from "vue-toastification"

const commandBlockRef = ref<InstanceType<typeof HTMLDivElement>>(null)

const props = defineProps({
  tooltip: String,
})

const isHovered = ref(false)

const slots = useSlots()

const copyCommand = () => {
  const toast = useToast()

  // const command = document
  //   .querySelector(".command-text")
  //   .textContent.replace(">", "")
  //   .trim()
  const slashIfPresent = commandBlockRef.value.classList.contains("no-slash")
    ? ""
    : "/"
  const command =
    slashIfPresent +
    slots
      .default([])
      .map((node: { el: { textContent: any } }) => node.el?.textContent)
      .filter((a: any) => a)
      .join("")

  navigator.clipboard
    .writeText(command)
    .then(() => {
      toast.success("已复制")
    })
    .catch((e) => {
      toast.error(`复制失败: ${e}`)
    })
}
</script>

<style scoped lang="less">
.shadow-text {
  // not affected by outer layout
  position: relative;
  width: 1000px;
  word-break: keep-all;
  text-wrap: nowrap;
}

/* Common Base Styles */
.command-block,
.command-text,
.copy-button,
.tooltip {
  font-family: "JetBrains Mono", "MiSans", monospace;
  transition: all 0.2s ease;

  user-select: none;
}

.command-block {
  position: relative;

  &:not(.borderless) {
    border-radius: 4px;
    border: 1px solid;
    padding: 2px;
  }
}

.command-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Command text area */
.command-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin-right: 8px; /* small gap before the button */
  transition: color 0.2s ease, text-shadow 0.3s ease;

  margin-right: 30px;
}

.command-text.hovered {
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.2); /* subtle modern glow effect */
}

.prompt {
  margin: 0 6px;
}

.command-block.borderless .prompt {
  margin-left: 0;
}

.slash {
  padding: 0 0.1ch;
}

.command-block.no-slash .slash {
  display: none;
}

/* Copy Button */
.copy-button {
  position: absolute;

  left: calc(100% - 20px);

  border-radius: 50%;
  cursor: pointer;
  padding: 0px 6px;
  margin-left: -4px;
  align-items: center;
  display: inline-flex;

  // background-color: rgba(128, 128, 128, 0.1);
  background: transparent;
}

.button-text {
  display: inline-block;

  width: 0;
  overflow: hidden;

  transition: width 0.2s ease;

  font-size: small;

  margin-left: 4px;
}

.copy-button:hover {
  border-radius: 4px;

  .button-text {
    display: inline-block;
    width: calc-size(auto, size);

    word-break: keep-all;
  }
}

/* Tooltip */
.tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  white-space: nowrap;
}

/* Tooltip arrow */
.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -4px;
  border-width: 4px;
  border-style: solid;
}

/* Light Mode */
html:not(.dark) {
  .command-block {
    &:not(.borderless) {
      background: #fafafa;
      border-color: #ccc;
    }
    color: #333;
  }
  .prompt {
    color: #007acc;
  }
  .slash {
    color: #3541b2;
  }
  .command-text.hovered {
    color: #111;
  }
  .copy-button {
    color: #333;
    border-color: #bbb;
  }
  .copy-button:hover {
    background: #f0f0f0;
    border-color: #aaa;
  }
  .tooltip {
    background: rgba(50, 50, 50, 0.8);
    color: #fff;
  }
  .tooltip::after {
    border-color: rgba(50, 50, 50, 0.8) transparent transparent transparent;
  }
}

/* Dark Mode */
html.dark {
  .command-block {
    &:not(.borderless) {
      background: #2a2a2a;
      border-color: #3a3a3a;
    }
    color: #d0d0d0;
  }
  .prompt {
    color: #5fff5f;
  }
  .slash {
    color: #a8b1ff;
  }
  .command-text.hovered {
    color: #fff;
  }
  .copy-button {
    color: #d0d0d0;
    border-color: #5a5a5a;
  }
  .copy-button:hover {
    background: #3a3a3a;
    border-color: #6a6a6a;
  }
  .tooltip {
    background: rgba(40, 40, 40, 0.8);
    color: #fff;
  }
  .tooltip::after {
    border-color: rgba(40, 40, 40, 0.8) transparent transparent transparent;
  }
}
</style>
