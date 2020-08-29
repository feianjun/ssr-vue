import createApp from './app'


export default function(context){
    const { app, router } = createApp(context)
    
    return new Promise(function(resolve, reject){
        router.push(context.url)
        
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            console.log(matchedComponents.length)
            
            resolve(app)
        }, reject)
    })
}