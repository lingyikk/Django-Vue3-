import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      redirect: "/api/home"
    },
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('@/views/admin/login/login.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/admin/User',
      name: 'userlist',
      component: () => import('@/views/admin/User/index.vue'),
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/admin/admin',
      name: 'admin',
      component: () => import('@/views/admin/admin/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/admin/ScenicSpot',
      name: 'scenicspot',
      component: () => import('../../src/views/admin/ScenicSpot/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/admin/Hotel/',
      name: 'Hotel',
      component: () => import('@/views/admin/hotel/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/admin/product/',
      name: 'admin_product',
      component: () => import('@/views/admin/product/index.vue'),
      meta:{
        isTabbar: true
      }
    },    
    {
      path: '/admin/ProductOrder/',
      name: 'ProductOrder',
      component: () => import('@/views/admin/ProductOrder/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/admin/ScenicSpotOrder/',
      name: 'ScenicSpotOrder',
      component: () => import('@/views/admin/ScenicSpotOrder/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/admin/HotelOrder/',
      name: 'HotelOrder',
      component: () => import('@/views/admin/HotelOrder/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/home/',
      name: 'home',
      component: () => import('@/views/webs/home/index.vue'),
      meta:{
        isTabbar: false
      }
    },
    {
      path: '/api/order/',
      name: 'order',
      component: () => import('@/views/webs/order/index.vue'),
      meta:{
        isTabbar: false
      }
    },
    {
      path: '/api/profile/',
      name: 'profile',
      component: () => import('@/views/webs/profile/index.vue'),
      meta:{
        isTabbar: false
      }
    },
    {
      path: '/api/profile/userInfo',
      name: 'profile_userInfo',
      component: () => import('@/views/webs/profile/userInfo/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/profile/contact',
      name: 'profile_contact',
      component: () => import('@/views/webs/profile/contact/index.vue'),
      meta:{
        isTabbar: false
      }
    },
    {
      path: '/api/profile/contact/updata',
      name: 'profile_contact_updata',
      component: () => import('@/views/webs/profile/contact/updata/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/ScenicSpot/',
      name: 'ScenicSpot',
      component: () => import('@/views/webs/ScenicSpot/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/ScenicSpot/px/',
      name: 'ScenicSpot_px',
      component: () => import('@/views/webs/ScenicSpot/px/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/ScenicSpot/mys/',
      name: 'ScenicSpot_mys',
      component: () => import('@/views/webs/ScenicSpot/mys/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/ScenicSpot/ysm/',
      name: 'ScenicSpot_ysm',
      component: () => import('@/views/webs/ScenicSpot/ysm/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/ticket/',
      name: 'ticket',
      component: () => import('@/views/webs/ticket/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/ticket/px/',
      name: 'ticket_px',
      component: () => import('@/views/webs/ticket/px/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/ticket/mys/',
      name: 'ticket_mys',
      component: () => import('@/views/webs/ticket/mys/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/ticket/ysm/',
      name: 'ticket_ysm',
      component: () => import('@/views/webs/ticket/ysm/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/hotel',
      name: 'hotel',
      component: () => import('@/views/webs/hotel/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/product',
      name: 'product',
      component: () => import('@/views/webs/product/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    {
      path: '/api/login',
      name: 'api_login',
      component: () => import('@/views/webs/login/index.vue'),
      meta:{
        isTabbar: true
      }
    },
    // 添加与任何其他路径匹配的捕获所有路由，并将它们重定向到默认路由或显示未找到的页面。
    {
      path: '/:catchAll(.*)',
      redirect: '/api/home' 
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 检查用户是否登录
  const isLoggedInFrontend = localStorage.getItem('username');
  const isLoggedInBackend = localStorage.getItem('adminname');

  if (to.path.startsWith('/api') && !isLoggedInFrontend) {
    if (to.path !== '/api/login') {
      // 如果访问的是前台页面并且用户未登录，并且不是访问登录页，则重定向到前台登录页
      next('/api/login');
    } else {
      // 其他情况下，允许通过
      next();
    }
  } else if (to.path.startsWith('/admin') && !isLoggedInBackend) {
    if (to.path !== '/admin/login') {
      // 如果访问的是后台页面并且管理员未登录，并且不是访问登录页，则重定向到后台登录页
      next('/admin/login');
    } else {
      // 其他情况下，允许通过
      next();
    }
  } else {
    // 其他情况下，允许进入目标路由
    next();
  }
});

export default router