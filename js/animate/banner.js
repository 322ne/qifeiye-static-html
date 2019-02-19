$(function(){
    let $oPicBox = $(".templet-banner-picBox"),
        $aPic = $(".templet-banner-pic"),
        $btnArrow = $(".templet-banner-arrow"),
        $banner = $(".templet-banner"),
        picW = $aPic.eq(0).width(),
        len = $aPic.length,
        lastIndex = 0;
    //切换函数
    function change(idx){
        //处理下标超出的问题
        if(idx > len - 4){
            idx = 0
        }
        if(idx < 0){
            idx = len - 4
        }
        //移动
        $oPicBox.animate({
            left:-picW*idx
        },300)
        lastIndex = idx
    }
    $btnArrow.eq(0).on("click",()=>{
        change(--lastIndex)
    })
    $btnArrow.eq(1).on("click",()=>{
        change(++lastIndex)
    })
    //轮播
    function callback(){
        change(++lastIndex)
    }
    //设置定时器
    timer = setInterval(callback,2000)
    //鼠标移入就不要轮播了，万一人家感兴趣要多看看呢
    $banner.hover(function(){
        clearInterval(timer)
    },function(){
        timer = setInterval(callback,2000)
    })
})