/*廣告看板 heropage 的輪播按鈕 */
$(function () {
    //在圖片之後產生 .after(指定區塊給它) 注意單引號包雙引號!!
    $(".heroPageImg").cycle({
        fx:'turnLeft', //往左翻頁
        pager: ".heroPageNav",  //它會自動找裡面有多少張圖片
        pause: true,    //啟動暫停的功能
        delay: -2000,
        speed: 2000,
    })
}); 