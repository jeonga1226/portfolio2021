
(function($) {
    var url = window.location.href;
    var position = url.indexOf('projNm');
    var pageNm = url.substr(position+7);
    var projKrName = "";
    var projPeriod = "";
    var imgUrl="";
    var codeInfo = "";

    if(pageNm == "projdh")      {
        projKrName = "동화기업 물류창고 자동화";  
        projPeriod ="2020.8 - 2020.11"; 
        imgUrl="images/img_top_dh.png"; 
        codeInfo = "이적 > 제품 스캔 안내";
    } else if(pageNm == "projhw") { 
        projKrName = "한화생명 헬로";  
        projPeriod ="2019.10 ~ 2021.02"; 
        imgUrl="";
        codeInfo = "홈 > 챌린지";
    } else if(pageNm == "projjp") {
        projKrName = "조폐공사 지역상품권 CHAK 고도화";  
        projPeriod ="2019.06 ~ 2019.09"; 
        imgUrl="";
        codeInfo = "이용내역";
    } else { 
        projKrName = "푸르덴셜 모바일센터";  
        projPeriod ="2018.4 - 2018.6"; 
        imgUrl="";
        codeInfo = "자동이체 변경";
    }

    $('#header > h1').text(projKrName);
    $('#header > p').text(projPeriod);
    $('#spTopImg > img').attr('src', imgUrl);
    $('#pCodeInfo').text(codeInfo);

    $('#projCode').load(pageNm +'.html #codeCont');

})(jQuery);