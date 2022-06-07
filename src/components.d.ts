/*
 * @Author: XunL
 * @Description: 全局组件类型注册
 */
import Icon from '@/components/Icon/index.vue'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        AppIcon: typeof Icon;
        RouterLink:typeof import('vue-router')['RouterLink']
        RouterView:typeof import('vue-router')['RouterView']
    }
}

export {}
