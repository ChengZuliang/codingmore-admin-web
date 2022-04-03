import Vue from 'vue'
import Router from 'vue-router'
import mainFrame from '@/layout'
import articles from '../views/content-management/article-management'
// import columns from '../views/content-management/column-management'
import articleEdit from '../views/content-management/article-editing'
import users from '../views/system-management/users-management'
import roles from '../views/system-management/roles-management'
import menus from '../views/system-management/menu-management'
import sourceCategories from '../views/system-management/source-category-management'
import sources from '../views/system-management/source-management'
import siteConfig from '../views/system-management/site-configuration'
import page404 from '../views/error-pages/404'
import page500 from '../views/error-pages/500'
import pageLogin from '../views/login'

Vue.use(Router)

// 定义路由数组，暂时前端写死，之后加入权限管理之后，读取权限之后要进行过滤

// 要展示在导航栏上的菜单数组
export const pageRouters = [
  {
    path: '/content',
    redirect: '/content/articles',
    name: 'content-management',
    component: mainFrame,
    icon: 'el-icon-s-help', // el-icon-s-help
    meta: {
      title: '内容管理'
    },
    children: [
      {
        path: 'article-editing',
        name: 'article-editing',
        icon: 'el-icon-edit-outline',
        component: articleEdit,
        meta: {
          title: '创建文章'
        }
      },
      {
        path: 'articles',
        name: 'article-management',
        icon: 'el-icon-notebook-2',
        component: articles,
        meta: {
          title: '文章列表'
        }
      }
      // {
      //   path: 'columns',
      //   name: 'column-management',
      //   icon: 'el-icon-s-grid',
      //   component: columns,
      //   meta: {
      //     title: '专栏管理'
      //   }
      // }
    ]
  },
  {
    path: '/system',
    redirect: '/system/site',
    name: 'system-management',
    component: mainFrame,
    icon: 'el-icon-s-operation',
    meta: {
      title: '系统管理'
    },
    children: [
      {
        path: 'site',
        name: 'site-configuration',
        component: siteConfig,
        icon: 'el-icon-set-up',
        meta: {
          title: '站点配置'
        }
      },
      {
        path: 'users',
        name: 'users-management',
        component: users,
        icon: 'el-icon-user',
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'roles',
        name: 'roles-management',
        component: roles,
        icon: 'el-icon-user',
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'menus',
        name: 'menus',
        component: menus,
        icon: 'el-icon-menu',
        meta: {
          title: '菜单管理'
        }
      },
      {
        path: 'sources',
        name: 'sources',
        component: sources,
        icon: 'el-icon-coin',
        meta: {
          title: '资源管理'
        }
      },
      {
        path: 'source-categories',
        name: 'source-categories-management',
        component: sourceCategories,
        icon: 'el-icon-coin',
        meta: {
          title: '资源分类管理'
        }
      }
      // {
      //   path: 'log',
      //   name: 'log-management',
      //   component: log,
      //   meta: {
      //     title: '日志管理'
      //   }
      // }
    ]
  }
]

// 不展示在菜单栏上，但是系统要使用到的数组
const systemRouters = [
  {
    path: '/404',
    name: 'error-page404',
    component: page404
  },
  {
    path: '/500',
    name: 'error-page500',
    component: page500
  },
  {
    path: '/login',
    name: 'login',
    component: pageLogin
  },
  // {
  //   path: '/content/article-editing',
  //   name: 'article-editing',
  //   component: articleEdit
  // },
  {
    path: '/',
    name: 'root',
    redirect: '/content/articles'
  },
  {
    path: '*',
    name: 'root',
    redirect: '/'
  }
]

export default new Router({
  routes: [...pageRouters, ...systemRouters]
})
