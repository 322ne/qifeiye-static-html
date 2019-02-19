$(function(){
    let $fadeIndesc = $(".fadeIn"),
        $aPart = $("#main > div"),
        $nav = $("#nav"),
        lastScrollTop = 0,
        bool = true;
    let scrollTop = $(document).scrollTop();
    //刷新要是停在某一个视口，视口里有淡入元素，也给我淡入了
    eleFadeIn(scrollTop,$aPart)
    $(window).scroll(function(){
        scrollTop = $(document).scrollTop();
        lastScrollTop = scrollTop;
        //随滚动导航栏 也要移动
        if(scrollTop >= 70&&bool == true){
            $nav
                .css({
                    position:"fixed",
                    opacity:0,
                    top:-70
                })
                .animate({
                    top:0,
                    opacity:1
                },1000);
            bool = !bool
        }else if(scrollTop == 0){
            $nav.css({
                position:"absolute",
                top:0
            })
            bool = !bool;
        }
        //随滚动事件元素淡入
        eleFadeIn(scrollTop,$aPart)
    })
})
function eleFadeIn(scrollTop,$aPart){
    //随滚动事件元素淡入
    for(let i = 0,len = $aPart.length;i<len;i++){
        if( scrollTop < $aPart.eq(i).offset().top){
            let $elFade = $aPart.eq(i).find(".fadeIn")
            //只要存在就淡入，不存在就告辞
            $elFade&&$elFade.animate({
                top:0,
                left:0,
                opacity:1
            },1000);
            break;
        }
    }
}