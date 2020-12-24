import Vue from 'vue'
import Router from 'vue-router'
import Nav from './views/Nav.vue'
import pepo from './components/Pepo.vue'
import Admin from './components/Admin.vue'

// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            // {
            //     path: '/cinema',
            //     component: () =>
            //         import ('./views/Mine.vue'),
            // },
            // {
            //     path: '/mine',
            //     component: () =>
            //         import ('./views/Cinema.vue'),
            // },
            {
                path: '/',
                redirect: '/nav'
            },
            {
                path: '/nav',
                component: () =>
                    import ('./views/Nav.vue'),
                children: [{
                        path: '/nav/souye',
                        component: () =>
                            import ('./components/Souye.vue')
                    },
                    {
                        path: '/nav/pepo',
                        component: () =>
                            import ('./components/Pepo.vue')
                    },
                    {
                        path: '/nav/admin',
                        component: () =>
                            import ('./components/Admin.vue')
                    },
                    {
                        path: '/nav/admin2',
                        component: () =>
                            import ('./components/Admin2.vue')
                    },

                    //重定向：当前路径为/movie时,重定向到/movie/nowPlaying路径
                    {
                        path: '/nav',
                        redirect: '/nav/souye'
                    }
                ],

            }

        ]


    })
    //