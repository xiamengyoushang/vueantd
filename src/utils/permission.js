import router from "../router";

// npm install --save nprogress
import NProgress from "nprogress"
import 'nprogress/nprogress.css'

// 顶部进度条样式
NProgress.configure({
    showSpinner: false,
    speed: 800,
});

// 路由拦截
router.beforeEach((to,from,next)=>{
    NProgress.start();
    // 判断该路由是否需要登录权限 - 路由设置需要标记auth参数
    if (to.matched.some(record => record.meta.auth)) {
        const token = localStorage.getItem("token")
        // 判断当前的token是否存在 ； 登录存入的token
        if (token) {
            if (to.path === '/login') {
            } else {
                next()
            }
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }
});

router.afterEach(()=>{
    NProgress.done();
});
