$(".header").load("../html/header.html")
$(".footer").load("../html/footer.html")
var swiper1 = new Swiper('.swiper1', {
    autoplay: {
        delay: 1000,
        // 点击
        disableOnInteraction: false,
    },
    effect: 'fade',
    loop: true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },

});
//此方法为模拟的，hover到分页器的小圆点后自动触发其本身的click事件
$(".swiper-pagination-bullet").hover(function () {
    $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
}, function () {
    swiper1.autoplay.start(); //鼠标移出之后，自动轮播开启
})
// 鼠标移入移出
swiper1.el.onmouseover = function () {
    swiper1.autoplay.stop();
}
swiper1.el.onmouseleave = function () {
    swiper1.autoplay.start();
}

var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.next1',
        prevEl: '.prev1',
    },
});

$.get("../json/index.json", (data) => {
    $.each(data[0], function (i) {
        $.each(data[0][i], (x) => {
            $(`
            <li class="lun1">
            <div class="aimg">
                <img class="img" src="${data[0][i][x].img2}">
                <img class="himg" src="${data[0][i][x].img3}">
                <img style="width: 48px;height: 48px;" class="shuan" src="${data[0][i][x].img}">
                <div id="corol" style="background: url(${data[0][i][x].img4});">
                    <div class="prtit" style="background: url(${data[0][i][x].img5});">
                        <div class="anpai">
                            <div class="kun">${data[0][i][x].tit}</div>
                            <div class="bigge">${data[0][i][x].tit2}</div>
                        </div>
    
                    </div>
                    <div class="shengyu">${data[0][i][x].tit3}</div>
                </div>
    
            </div>
            <div class="mingzi">
                    <div class="reds">
                            <div class="red">
                            ${data[0][i][x].djg}
                            </div>
                        </div>
            <div class="tits">
                <div class="titd">${data[0][i][x].spm}</div>
            </div>
            <div class="jiagex">
                <span class="xianjia">${data[0][i][x].jiage}</span>
                <span class="yuanjia">${data[0][i][x].yuanjia}</span>
            </div>
        </div>
        </li>
            `).appendTo($(".bule").eq(i))
        })
// 人气推荐
        $(data[1][i]).each((index, item) => {
            console.log(index)
            $(".showContainer").eq(0).css("display", "block");
            $(".showContainer").eq(1).css("display", "none");
            if (index == 0) {
                $(`
               <div class="product-a">
               <img class="rq-img"
                   src="${item.img2}">
               <img style="width: 48px;height: 48px;" class="shuan"
                   src="${item.img}">
               <div id="probanner"
                   style="background: url(${item.img4});">
                   <div class="rqtit"
                       style="background-image: url(${item.img3});">
                       <div class="rqpai">
                           <div class="kun">${item.tit}</div>
                           <div class="bigge">${item.tit2}</div>
                       </div>

                   </div>
                   <div class="shengyu">${item.tit3}</div>
                   <div class="mingz">
                       <div class="rr">
                           <div class="redd">${item.djg}</div>
                       </div>
                       <div class="ctit">
                           <div class="xtit">${item.spm}</div>
                       </div>
                       <div class="pp">
                           <span class="xianjia">${item.jiage}</span>
                           <span class="yuanjia">${item.yuanjia}</span>
                       </div>
                   </div>
               </div>
           </div>
               `).appendTo($(".product1"))
            }
            else {
                $(`
               <div class="product-b">
               <div class="qwe">
                    <img class="rimg" src="${item.img2}">
                    <img style="width: 48px;height: 48px;" class="shuan" src="${item.img}">
                    <div id="corol" style="background: url(${item.img4}) repeat;width: 100%;">
                        <div class="ptit" style="background-image: url(${item.img3}");>
                            <div class="kun1">${item.tit}</div>
                            <div class="bigge1">${item.tit2}</div>
                            
                        </div>
                        <div class="qg">${item.tit3}</div>
                    </div>
                </div>
                <div class="zi">
                <div class="reds">
                    <div class="red">

                    </div>
                </div>
                <div class="tits">
                    <div class="zt">${item.spm}</div>
                </div>
                <div class="jiagex">
                    <span class="xianjia1">${item.jiage}</span>
                    <span class="yuanjia1">￥1149</span>
                </div>
             </div>
             </div>
               `).appendTo($(".showContainer"))
            }
        })
    })

})








// 福利社小轮播
var swiper3 = new Swiper('.swiper3', {
    autoplay: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
    },
})
// 限时购
function test(num) {
    if (num >= 10) {
        return num
    } else {
        return "0" + num;
    }
}
var timer = setInterval(times, 1000)
function times() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var second = date.getSeconds();
    var arr = [test(23 - hour), test(59 - min), test(60 - second)];
    $(arr).each(function (index, item) {
        $(".wcd").eq(index).html(arr[index])
    })
}
//  sharing
$.get("../json/index2.json", function (str) {
    $(str).each(function (index, item) {
        $(`
     <div class="cz">
      <div class="box6">
        <div class="m-commonHeader" style="height: 48px;margin-top: 0;">
           <div class="f-left">
              <a  style="padding:0">
                 <h3 style="font-size: 28px;">${this.title}</h3>
              </a>
           </div> 
           <div class="f-right">
              <div class="subCateList">
              </div>
              <a >更多制造商 ></a>
           </div>
        </div>
        <div class="slick">
           <div class="swiper-container swiper-container4">
              <div class="swiper-wrapper swiper-wrapperx">
              </div>
              <div class="swiper-button-prev prev4"></div>
              <div class="swiper-button-next next4"></div>
              <div class="swiper-pagination swiper-pagination4"></div>
           </div>
        </div>
        <div class="jbanner">
           <div class="jbanners">
           </div>
        </div> 
      </div>
     </div>
     `).insertBefore($(".bb"))
        var g_txt = str[index].txt;
        $(g_txt).each(function (index, item) {
            var thats = $(this).index()
            $(`
       <span>${this}</span>
       `).appendTo($(".subCateList").eq(thats))
        })
        var g_img = str[index].img;
        $(g_img).each(function (index, item) {
            $(`
         <div class="swiper-slide">
            <img src="${this}" alt="">
         </div>
      `).appendTo($(".swiper-wrapperx").last())
        })
        var g_list = str[index].list;
        $(g_list).each(function (v) {
            $(`
       <div class="lis">
                 <div class="hd">
                    <div class="hd_one">
                       <img src="${this.img}" alt="">
                    </div>
                    <div class="hd_two">
                       <img src="${this.img1}" alt="">
                    </div>
                    <img src="../image/logo.png" alt="" class="logo">
                    <div class="hd_three">
                       <div class="promTitle ${this.show}">
                          <div class="titles"><span>${this.txt}</span></div>
                          <div class="subTitles">
                             <span style="vertical-align: middle;display: inline-block;">${this.tit}</span>
                             <span style="font-weight: 400;font-size: 12px;display: inline-block;">${this.other}</span>
                          </div>
                       </div>
                       <div class="promContent">${this.txts}</div>
                    </div>
                 </div>
                 <div class="bd">
                    <div class="prdtTags">
                       <span class="m-itemTag ${this.id}">${this.title}</span>
                    </div>
                    <div class="cont" style="font-size: 13px;font-weight: 700;">${this.cen}</div>
                    <p class="pric">
                       <span style="display: inline-block;">${this.price}</span>
                       <span class="spans">${this.price1}</span>
                    </p>
                 </div>
              </div>
       `).appendTo($(".jbanners").last())
        })
    })
    var mySwiper4 = new Swiper('.swiper-container4', {
        loop: true,
        pagination: {
            el: '.swiper-pagination4',
            clickable: true,
        },
        navigation: {
            nextEl: '.next4',
            prevEl: '.prev4',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    })
})

// 大家说
$.get("../json/index3.json", (data) => {
    $(data).each((index, item) => {
        $(`
        <div class="swiper-slide lbo1">
        <div class="m-product">
            <div class="djhd">
                    <div style="width:100%;height:100%;" >
                        <img class="img-lazy"
                            src="${item.img}"
                             title="${item.title}""style="opacity: 1;"></div>
            </div>
            <div class="bd_comment" >
                <div class="m-comment">
                    <div class="bd_top" >
                        <span class="frontname">${item.people}</span>
                        <span class="date">${item.time}</span>
                    </div>
                    <div class="bd_middle" >
                        <span class="pname" >${item.title}</span>
                        <span class="price1" >
                            <span >¥</span>
                            <span >${item.price}</span>
                        </span>
                    </div>
                    <div class="comment-content">
                        <p>${item.content}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `).appendTo($(".swiper6"))
    })
    //   大家都在说轮播图
    var mySwiper6 = new Swiper('.swiper-container6', {
        autoplay: true,//可选选项，自动滑动
        loop: true,
        slidesPerView: 3,
        spaceBetween:0,
        navigation: {
            nextEl: '.next3',
            prevEl: '.prev3',
        }
    })
})


