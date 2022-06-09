
/*
 * @Author: XunL
 * @Description: 全局组件类型注册
 */
import Icon from '@/components/Icon/index.vue'
import PageContainer from '@/components/PageContainer/index.vue'
import Card from '@/components/Card/index.vue'
import Pagination from './components/Pagination/index.vue'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        PageContainer:typeof PageContainer;
        AppPagination:typeof Pagination;
        AppCard:typeof Card;
        AppIcon: typeof Icon;
        RouterLink:typeof import('vue-router')['RouterLink']
        RouterView:typeof import('vue-router')['RouterView']
    }
}
