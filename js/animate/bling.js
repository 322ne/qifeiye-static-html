$(function(){
    let $fadeInSpan  = $(".createConunt-container-item-info span"),
        timer = null,
        count = 0,
        blingText = "做一个响应式网站,让世界更好地了解您",
        index = blingText.indexOf(","),
        arr = blingText.split(",").join("").split("");
        arr.splice(index,0,"<br>");
    timer = setInterval(bling,300,arr)
    function bling(arr){
        let len = arr.length;
        let ele = $fadeInSpan.eq(0);
        let str = "";
        count ++;
        for(let i = 0;i < count;i++){
            str += arr[i]
        }
        if(count == len){
            clearInterval(timer)
        }
        ele.html(str)
    }
})