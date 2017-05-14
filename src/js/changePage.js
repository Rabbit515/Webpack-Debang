 //翻页组件
    function createPage (json) {
        //nowNum为当前页，allNum为全部页
        var $Div = document.getElementById(json.id);
        var nowNum = json.nowNum;
        var allNum = json.allNum;
        //创建首页
        if(nowNum > 5 && allNum > 9){
            var $A = document.createElement('a');
            var $span = document.createElement('span');
            $A.href = '#1';
            $span.innerHTML = '首页';
            $A.appendChild($span);
            $Div.appendChild($A);
        }
        //创建上一页
        if(nowNum > 1){
            var $A = document.createElement('a');
            var $span = document.createElement('span');
            $A.href = '#' + (nowNum - 1);
            $span.innerHTML = '上一页';
            $A.appendChild($span);
            $Div.appendChild($A);
        }
        //除了点击的那个，其他页码有方括号
        if(allNum < 9){
            for(var i = 1; i <= allNum; i ++){
                var $A = document.createElement('a');
                var $span = document.createElement('span');
                $A.href = '#' + i;
                if(i === nowNum){
                    $span.innerHTML = i;
                    $($A).css({'background-color' : '#494e7b','color' : '#fff'});
                }else{
                    $span.innerHTML =   i  ;
                }
                $A.appendChild($span);
                $Div.appendChild($A);
            }
        }else{
            for(var i = 1; i <= 9; i ++){
                var $A = document.createElement('a');
                var $span = document.createElement('span');
                if(nowNum < 5){
                    $A.href = '#' + i;
                    if(i === nowNum){
                        $span.innerHTML = i;
                    }else{
                        $span.innerHTML =  i ;
                    }
                }
                //向两面扩散4个
                else if(allNum - nowNum < 4){
                    $A.href = '#' + (allNum - 9 + i);
                    if( (allNum - nowNum) === 0 && i === 9){
                        $span.innerHTML = allNum - 9 + i;
                    }else if((allNum - nowNum) === 1 && i === 8){
                        $span.innerHTML = allNum - 9 + i;
                    }else if( (allNum - nowNum) === 2 && i === 7){
                        $span.innerHTML = allNum - 9 + i;
                    }else if( (allNum - nowNum) === 3 && i === 6){
                        $span.innerHTML = allNum - 9 + i;
                    }else{
                        $span.innerHTML = (allNum - 9 + i) ;
                    }

                }
                else{
                    $A.href = "#" + (nowNum - 5 + i);
                    if(i === 5){
                        $span.innerHTML = (nowNum - 5 + i);
                    }else{
                        $span.innerHTML =  (nowNum - 5 + i);
                    }
                    
                }
                $A.appendChild($span);
                $Div.appendChild($A);
            }
        }
        //创建尾页
        if( (allNum - nowNum) > 5){
            var $A = document.createElement('a');
            var $span = document.createElement('span');
            $A.href = '#' + allNum;
            $span.innerHTML = '尾页';
            $A.appendChild($span);
            $Div.appendChild($A);
        }
        //创建下一页
        if( (allNum - nowNum) > 0){
            var $A = document.createElement('a');
            var $span = document.createElement('span');
            $A.href = '#' + (nowNum + 1);
            $span.innerHTML = '下一页';
            $A.appendChild($span);
            $Div.appendChild($A);
        }
        
        //点击事件
        var $ACollection = document.getElementsByTagName('a');
        for(var i = 0; i < $ACollection.length; i ++){
            $ACollection[i].onclick = function (){
                
                var nowNum = parseInt(this.getAttribute('href').substring(1));
                $Div.innerHTML = '';
                json.nowNum = nowNum;
                createPage(json);
            }
        }
        //回调函数
        json.callBack (nowNum, allNum);

    }
    

    createPage({
        id : 'page',
        nowNum : 1,
        allNum : 5, 
        // callBack :function (now, all) {
        // 	var num = now * 10 < changeData('pugong',0).length ? 10 : changeData('pugong', 0).length % 10;
        // 	// var $Ul = document.getElementById('ul1');
        // 	// var $LiCollection = document.getElementsByTagName('li');

        // }
    })