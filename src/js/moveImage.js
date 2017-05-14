 //轮播图
    var oLi = $('.poster-main .poster-item');
    var index = 0;
    var timer = null;
    var flag = true;
    function init() {
        oLi.eq(0).css({'top' : '0', 'height' : '370px','width':'640px', 'left':'130px','opacity':'1','z-index':3});
        oLi.eq(1).css({'top' : '37px','height' : '296px','width':'512px', 'left':'301.333px','opacity':'1','z-index':2});
        oLi.eq(2).css({'top' : '66.6px','height' : '236px','width':'410px', 'left':'447.067px','opacity':'0.5','z-index':1});
        oLi.eq(3).css({'top' : '90.28px','height' : '190px','width':'328px', 'left':'572.32px','opacity':'0.33333','z-index':0});
        oLi.eq(4).css({'top' : '90px','height' : '190px','width':'328px', 'left':'0px','opacity':'0.3333','z-index':0});
        oLi.eq(5).css({'top' : '66.25px', 'height' : '238px','width':'410px', 'left':'43.3333px','opacity':'0.5','z-index':1});
        oLi.eq(6).css({'top' : '36.5625px','height' : '296px','width':'512px', 'left':'86.6667px','opacity':'1','z-index':2});

    }
    function rightMove () {
        if(flag){
            flag = false;
            oLi.eq(index  % 7).animate({
                'z-index' : 2,
            })
            oLi.eq((index + 1) % 7).animate({
                'z-index' : 3,
            })
            oLi.eq((index + 2) % 7).animate({
                'z-index' : 2,
            })
            oLi.eq((index + 3 ) % 7).animate({
                'z-index' : 1,
            })
            oLi.eq((index + 4 ) % 7).animate({
                'z-index' : 0,
            })
            oLi.eq((index + 5 ) % 7).animate({
                'z-index' : 0,
            })
            oLi.eq((index + 6 ) % 7).animate({
                'z-index' : 1,
            })

            oLi.eq( (index) % 7 ).animate({
                'left':'86.6667px',
                'width':'512px',
                'height':'296px',
                'opacity': 1,
                'top':'36.5625px',
            });
            oLi.eq( (index + 1) % 7).animate({
                'left':'130px',
                'width':'640px',
                'height':'370px',
                'opacity': 1,
                'top': '0px',
            });
            oLi.eq( (index + 2) % 7).animate({
                'left':'301.333px',
                'width':'512px',
                'height':'296px',
                'top' : '37px',
                'opacity': 1,
            });
            oLi.eq( (index + 3) % 7).animate({
                'left':'447.067px',
                'width':'410px',
                'height':'236px',
                'opacity': 0.5,
                'top':'66.6px',
            });
            oLi.eq( (index + 4) % 7 ).animate({
                'left':'572.32px',
                'width':'328px',
                'height':'190px',
                'opacity': 0.3333,
                'top':'90.28px',
            });
            oLi.eq( (index + 5) % 7 ).animate({
                'left':'0px',
                'width':'328px',
                'height':'190px',
                'opacity': 0.3333,
                'top':'90px',
            });
            oLi.eq( (index + 6) % 7 ).animate({
                'left':'43.3333px',
                'width':'410px',
                'height':'238px',
                'opacity': 0.5,
                'top':'66.25px',
            },function (){
                index ++;
                flag = true;
            });
            
        }
    }
    function leftMove () {
        if(flag){
            flag = false;
            oLi.eq((index - 1)  % 7).animate({
                'z-index' : 3,
            })
            oLi.eq(index  % 7).animate({
                'z-index' : 2,
            })
            oLi.eq((index + 1) % 7).animate({
                'z-index' : 1,
            })
            oLi.eq((index + 2 ) % 7).animate({
                'z-index' : 0,
            })
            oLi.eq((index + 3 ) % 7).animate({
                'z-index' : 0,
            })
            oLi.eq((index + 4 ) % 7).animate({
                'z-index' : 1,
            })
            oLi.eq((index + 5 ) % 7).animate({
                'z-index' : 2,
            })

            //最新出来的图片
            oLi.eq( (index - 1) % 7 ).animate({
                'left':'130px',
                'width':'640px',
                'height':'370px',
                'opacity': 1,
                'top': '0px',
            });
            oLi.eq( (index) % 7).animate({
                'left':'301.333px',
                'width':'512px',
                'height':'296px',
                'top' : '37px',
                'opacity': 1,
            });				
            oLi.eq( (index + 1) % 7).animate({
                'left':'447.067px',
                'width':'410px',
                'height':'236px',
                'opacity': 0.5,
                'top':'66.6px',
            });			
            oLi.eq( (index + 2) % 7).animate({
                'left':'572.32px',
                'width':'328px',
                'height':'190px',
                'opacity': 0.3333,
                'top':'90.28px',
            });				
            oLi.eq( (index + 3) % 7 ).animate({
                'left':'0px',
                'width':'328px',
                'height':'190px',
                'opacity': 0.3333,
                'top':'90px',
            });
            oLi.eq( (index + 4) % 7).animate({
                'left':'43.3333px',
                'width':'410px',
                'height':'238px',
                'opacity': 0.5,
                'top':'66.25px',
            });
            oLi.eq( (index + 5) % 7 ).animate({
                'left':'86.6667px',
                'width':'512px',
                'height':'296px',
                'opacity': 1,
                'top':'36.5625px',
            },function (){
                index --;
                flag = true;
                
            });
        }
    }
    init();
    $('.poster-prev-btn').on('click', function () {
        leftMove();
    }).on('mouseenter', function() {
        $(this).addClass('poster-next-btn-hover');
    }).on('mouseleave', function () {
        $(this).removeClass('poster-next-btn-hover');
    });
    $('.poster-next-btn').on('click', function () {
        rightMove();
    }).on('mouseenter', function () {
        $(this).addClass('poster-prev-btn-hover');
    }).on('mouseleave', function() {
        $(this).removeClass('poster-prev-btn-hover');
    });
    timer = setInterval(function () {
        leftMove();
    },2000);
    $('.poster-main').on('mouseenter',function () {
        clearInterval(timer);
    });
    $('.poster-main').on('mouseleave', function () {
        timer = setInterval(function () {
            leftMove();
        } ,500);
    })