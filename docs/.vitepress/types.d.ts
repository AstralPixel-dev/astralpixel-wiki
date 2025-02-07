declare module 'markdown-it-task-lists' {
  import { PluginSimple } from 'markdown-it'
  const _default: PluginSimple
  export default _default
}

declare module 'markdown-it-attribution' {
  import { PluginWithOptions } from 'markdown-it'
  export interface Options {
    classNameContainer?: string
    classNameAttribution?: string
    marker?: string
    removeMarker?: boolean
  }
  const _default: PluginWithOptions<Options>
  export default _default
}
