window.onload=function(){
    // var section=$(".section");
    // var jump=$(".jump")[0];
    // var list=$("li",jump);
    // document.documentElement.scrollTop=1;
    // var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    // var now=0;
    // window.onscroll=function(){
    //     for(var i=0;i<section.length;i++){
    //         if(obj.scrollTop>=section[i].offsetTop){
    //             now=i;
    //             for(var j=0;j<list.length;j++){
    //                 list[j].style.color="orangered";
    //             }
    //             list[i].style.color="yellow";
    //         }
    //     }
    // }
    // for(var i=0;i<list.length;i++) {
    //     list[i].name = i;
    //     list[i].onclick = function () {
    //         animate(obj, {scrollTop: section[this.name].offsetTop},1000)
    //     }
    // }
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition:"right",
            navigationTooltips: ['首页', '关于我', '作品', '技能','联系我'],
        })

    $('textarea')
        .typetype('超越自我，勇往直前')
        .delay(500)
        .typetype('\n\n自信前行')

}