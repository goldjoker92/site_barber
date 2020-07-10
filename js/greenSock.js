TweenMax.to("#arrow", 2, {
    delay:2.7,
    opacity:1,
    ease:Expo.easeInOut
})

TweenMax.to("#accueil h1", 1, {
    opacity:1,
    ease:Expo.easeInOut
})

TweenMax.to("#accueil h2", 3,{
    opacity:1,
    ease:Expo.easeInOut
})

TweenMax.to("#navigation", 1,{
    opacity:1,
    ease:Expo.easeInOut
})

TweenMax.from("#navigation", 1.5,{
    delay: -2,
    y: -40,
    ease:Expo.easeIn
})

/* Liens qui vont apparaitre les uns apres les autres */

TweenMax.from("#navigation a:nth-child(1)",2.5,{
    delay:1.2,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})

TweenMax.from("#navigation a:nth-child(2)",2.5,{
    delay:1.2,
    opacity:0,
    y:20,
    ease:Expo.easeIn
})

TweenMax.from("#navigation a:nth-child(3)",2.5,{
    delay:1.2,
    opacity:0,
    y:20,
    ease:Expo.easeIn
})

TweenMax.from("#navigation a:nth-child(4)",2.5,{
    delay:1.2,
    opacity:0,
    y:20,
    ease:Expo.easeIn
})