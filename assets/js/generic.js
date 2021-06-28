
(function($) {
    var url = window.location.href;
    var position = url.indexOf('projNm');
    var pageNm = url.substr(position+7);
    $('#projCode').load(pageNm +'.html #codeCont');

})(jQuery);