import createApp from './app';

const { router, app } = createApp();

// router.onReady(() => {
    // router.beforeResolve((to, from, next) => {
    //     next();
    //     // const matched = router.getMatchedComponents(to);
    //     // const prevMatched = router.getMatchedComponents(from);
    //     // let diffed = false;
    //     // const activated = matched.filter((c, i) => {
    //     //     return diffed || (diffed = prevMatched[i] !== c);
    //     // });
    //     // const asyncDataHooks = activated
    //     //     .map((c) => c.asyncData)
    //     //     .filter((_) => _);
    //     // if (!asyncDataHooks.length) {
    //     //     return next();
    //     // }

    //     // bar.start();
    //     // Promise.all(asyncDataHooks.map((hook) => hook({ store, route: to })))
    //     //     .then(() => {
    //     //         bar.finish();
    //     //         next();
    //     //     })
    //     //     .catch(next);
    // });

    // actually mount to DOM
    // app.$mount('#app');
// });
