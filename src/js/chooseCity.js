//动态生成城市并通过选项卡改变
    $('.invitePosition').on('mouseenter', function () {
        $('.city-choose').css({'display' : 'block'});
        $('.dis-non').css({'display':'block'});
        $('.city-title li').removeClass('city-active');
        $('.city-hot').addClass('city-active');
        $('.city-detail').remove();
        var cityhot = $('<ul class="city-detail city-detail1"><li>石家庄</li><li>北京</li><li>上海</li><li>天津</li><li>重庆</li><li>广州</li><li>深圳</li><li>东莞</li><li>杭州</li><li>成都</li><li>沈阳</li><li>大连</li><li>南京</li><li>苏州</li><li>哈尔滨</li><li>郑州</li><li>济南</li><li>青岛</li><li>合肥</li><li>西安</li><li>武汉</li><li>长沙</li><li>不限</li></ul>');
        cityhot.appendTo('.city-choose');
    });
    $('.city-hot').on('mouseenter',function (){
        $('.city-title li').removeClass('city-active');
        $('.city-hot').addClass('city-active');
        $('.city-detail').remove();
        var cityhot = $('<ul class="city-detail city-detail1"><li>石家庄</li><li>北京</li><li>上海</li><li>天津</li><li>重庆</li><li>广州</li><li>深圳</li><li>东莞</li><li>杭州</li><li>成都</li><li>沈阳</li><li>大连</li><li>南京</li><li>苏州</li><li>哈尔滨</li><li>郑州</li><li>济南</li><li>青岛</li><li>合肥</li><li>西安</li><li>武汉</li><li>长沙</li><li>不限</li></ul>');
        cityhot.appendTo('.city-choose');
    });
    $('.city-title li:eq(1)').on('mouseenter', function () {
        $('.city-title li').removeClass('city-active');
        $('.citya').addClass('city-active');
        $('.city-detail').remove();
        var citya = $('<ul class="city-detail city-detail2"><li>鞍山</li><li>安康</li><li>安顺</li><li>安阳</li><li>巴中</li><li>白山</li><li>百色</li><li>蚌埠</li><li>保定</li><li>宝鸡</li><li>北京</li><li>本溪</li><li>毕节</li><li>滨州</li><li>沧州</li><li>常州</li><li>长春</li><li>长葛</li><li>潮州</li><li>成都</li><li>重庆</li></ul>');
        citya.appendTo('.city-choose');
    });	
    $('.city-title li:eq(2)').on('mouseenter', function () {
        $('.city-title li').removeClass('city-active');
        $('.cityd').addClass('city-active');
        $('.city-detail').remove();
        var cityd = $('<ul class="city-detail city-detail3"><li>大连</li><li>丹东</li><li>德清</li><li>德阳</li><li>德阳</li><li>德州</li><li>东营</li><li>鄂州</li><li>恩施</li><li>防城港</li><li>抚顺</li><li>抚州</li><li>阜阳</li><li>赣州</li><li>广州</li><li>桂林</li><li>贵港</li><li>贵阳</li></ul>');
        cityd.appendTo('.city-choose');
    });
    $('.city-title li:eq(3)').on('mouseenter', function () {
        $('.city-title li').removeClass('city-active');
        $('.cityh').addClass('city-active');
        $('.city-detail').remove();
        var cityh = $('<ul class="city-detail city-detail4"><li>哈尔滨</li><li>海口</li><li>海宁</li><li>邯郸</li><li>汉中</li><li>杭州</li><li>合肥</li><li>河池</li><li>贺州</li><li>衡水</li><li>衡阳</li><li>呼和浩特</li><li>葫芦岛</li><li>湖州</li><li>怀化</li><li>黄冈</li><li>黄石</li><li>吉安</li><li>吉林</li><li>济南</li><li>济宁</li><li>嘉善</li><li>嘉兴</li></ul>');
        cityh.appendTo('.city-choose');
    });
    $('.city-title li:eq(4)').on('mouseenter', function () {
        $('.city-title li').removeClass('city-active');
        $('.cityk').addClass('city-active');
        $('.city-detail').remove();
        var cityk = $('<ul class="city-detail city-detail5"><li>开封</li><li>昆明</li><li>来宾</li><li>兰州</li><li>廊坊</li><li>丽水</li><li>聊城</li><li>柳州</li><li>六盘水</li><li>娄底</li><li>眉山</li><li>南安</li><li>南昌</li><li>南充</li><li>南京</li><li>南宁</li><li>南平</li><li>南通</li><li>宁波</li><li>泸州</li><li>漯河</li></ul>');
        cityk.appendTo('.city-choose');
    });
    $('.city-title li:eq(5)').on('mouseenter', function () {
        $('.city-title li').removeClass('city-active');
        $('.cityp').addClass('city-active');
        $('.city-detail').remove();
        var cityp = $('<ul class="city-detail city-detail6"><li>内江</li><li>萍乡</li><li>平顶山</li><li>莆田</li><li>黔东南</li><li>黔南</li><li>黔西南</li><li>潜江</li><li>钦州</li><li>青岛</li><li>清徐</li><li>清远</li><li>泉州</li><li>日照</li><li>三亚</li><li>汕头</li><li>商洛</li><li>上饶</li><li>韶关</li><li>邵阳</li><li>沈阳</li><li>十堰</li><li>石家庄</li></ul>');
        cityp.appendTo('.city-choose');
    });
    $('.city-title li:eq(6)').on('mouseenter', function () {
        $('.city-title li').removeClass('city-active');
        $('.cityw').addClass('city-active');
        $('.city-detail').remove();
        var cityw = $('<ul class="city-detail city-detail7"><li>万宁</li><li>潍坊</li><li>温州</li><li>文昌</li><li>无锡</li><li>梧州</li><li>武汉</li><li>西安</li><li>西宁</li><li>厦门</li><li>咸阳</li><li>湘潭</li><li>孝感</li><li>新余</li><li>邢台</li><li>许昌</li><li>烟台</li><li>盐城</li><li>延安</li><li>延边</li><li>宜昌</li><li>营口</li><li>郑州</li></ul>');
        cityw.appendTo('.city-choose');
    });
    $('.city-choose').on('mouseleave',function () {
        $('.dis-non').css({'display':'none'});
        $('.city-choose').css({'display' : 'none'});
        $('.city-choose .city-detail1').detach();
        $('.city-choose .city-detail2').detach();
        $('.city-choose .city-detail3').detach();
        $('.city-choose .city-detail4').detach();
        $('.city-choose .city-detail5').detach();
        $('.city-choose .city-detail6').detach();
        $('.city-choose .city-detail7').detach();
    });
    
