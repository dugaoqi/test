


$(function(){
    //Swiper轮播图
    
    // let imgs = null;
    
    
    
    // if (localStorage.getItem("imgs") != null) {
    
    //     imgs = JSON.parse(localStorage.getItem('imgs'))
    
    // } else {
    
    //     $.ajax({
    
    //         url: 'pc/banner/BannerPc',
    
    //         async: false,
    
    //         success: function (data) {
    
    //             imgs = data.data;
    
    //             localStorage.setItem('imgs', JSON.stringify(imgs));
    
    //         },
    
    //         error: function (data) {
    
    //             imgs = data.data;
    
    //             localStorage.setItem('imgs', JSON.stringify(imgs));
    
    //         }
    
    //     })
    
    // }
    
    
    // let tupian = "";
    
    // for (let i of imgs) {
    
    //     tupian += '<div class="swiper-slide"><a href="' + i.href + '"> <img src = "' + i.src +
    
    //         '"style="width:100%;"></a></div>';
    
    // };
    // $(".swiper-wrapper").html(tupian);
    
    // const mySwiper = new Swiper('.swiper-container', {
    
    //     autoplay: {
    
    //         delay: 5000,
    
    //     }, //自动滑动，1秒切换一次
    
    //     effect: 'slide', //滑动效果
    
    //     touchAngle: 30, //滑动的角度超过30度无效
    
    //     // 轮播图的方向，也可以是vertical方向
    
    //     direction: 'horizontal',
    //     //环形切换关闭
    
    //     loop: true,
    
    //     // 切换的速度
    
    //     speed: 800, //滑动或者自动换页时的速度
    
    //     // 如果需要分页器
    
    //     pagination: {
    
    //         el: '.swiper-pagination',
    
    //         clickable: true,
    
    //         type: 'bullets',
    
    //     },
    //     // 这样，即使我们滑动之后， 定时器也不会被清除
    
    //     autoplayDisableOnInteraction: true
    
    // });
    
    // mySwiper.pagination.bullets.css('background', 'white');
    
    // mySwiper.el.onmouseover = function () { //鼠标放上暂停轮播
    
    //     mySwiper.autoplay.stop();
    
    // };
    
    // mySwiper.el.onmouseleave = function () {
    
    //     mySwiper.autoplay.start();
    
    // };
    
    
    // main 选型卡切换
    
    $(".navigation-tab__item").click(function (){
        console.log('000')
    　　　　//获取点击的元素给其添加样式，讲其兄弟元素的样式移除
    　　　　$(this).addClass("active").siblings().removeClass("active");
    　　　　//获取选中元素的下标
    　　　　var index = $(this).index();
    　　　　$(this).parent().parent().siblings().children().eq(index).addClass("active").siblings().removeClass("active");
    　　});
    
    
    
    
    
    })