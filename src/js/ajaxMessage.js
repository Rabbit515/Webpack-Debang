//传入数据
function changeData (type, index){
    $.ajax({
        method: 'GET',
        url : '/mock/work.txt',
        async : true,
        success : function getData(data) {
            var message = JSON.parse(data)[type];
            // console.log(message);
            var len = message.length;
            var rlen = len / 10 == 0 ? len / 10 : len / 10 + 1;
            var iType = type;
            for(var i = 1; i < 11 ; i ++){
                $('.content-list').append($('<ul/>'));
                for(var j = 0; j < 6; j ++){
                    var li = $('.content-list ul').eq(i).append($('<li/>'));
                    if(j == 0){
                        $('.content-list ul').eq(i).find('li:eq(0)').addClass('spl').html(message[i-1][0]);
                    }else if(j == 1){
                        $('.content-list ul').eq(i).find('li:eq(1)').addClass('spl1').html(message[i-1][1]);
                    }else if(j == 2){
                        $('.content-list ul').eq(i).find('li:eq(2)').addClass('splm').html(message[i - 1][2]);
                    }else if(j == 3){
                        $('.content-list ul').eq(i).find('li:eq(3)').addClass('splw').html(message[i - 1][3]);
                    }else if(j == 4){
                        $('.content-list ul').eq(i).find('li:eq(4)').addClass('spls').html(message[i - 1][4]);
                    }else{
                        $('.content-list ul').eq(i).find('li:eq(5)').addClass('date').html(message[i - 1][5]);
                    }
                }
                $('.content-list ul').eq(i).find('li:eq(0)').append($('<a href="#"></a>'));
            }
            // $('.content-list ul').eq(i).find('li:eq(0)').append($('<a href="#"></a>'));					
        }
    })
}	 
changeData('pugong', 0);

var p = $('<p/>').appendTo('.content-list');
p.html('附近城市相似工作 : 大庆  齐齐哈尔  牡丹江').addClass('near-city');

//选项卡
$('li a').on('click', function () {
    $('.bg-head').removeClass();
    $(this).parent().addClass('bg-head');
    
    if( $(this).html() === '普工/技工') {
    
        changeData('pugong',0);

    }else if( $(this).html() === '快递员') {

        changeData('kuaidi',0);
    }else if ( $(this).html() === '司机') {
        changeData('siji',0);
    }else if ( $(this).html() === '文职/实习生') {
        changeData('wenzhi',0);
    }else {
        changeData('qita',0);				
    }
                
    return false;
})