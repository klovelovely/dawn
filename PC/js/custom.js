$(function () {

    /**
     * focus demo - js
     */
    var focusContainer = $('#focus')
        , focusTrigger = focusContainer.find('.triggers a')
    focusContainer.switchable({
        triggers: focusTrigger,
        panels: 'li',
        easing: 'ease-in-out',
        effect: 'scrollLeft',
        duration: .5,
        interval: 3.5,
        pauseOnHover: true,
        prev: '',
        next: '',
        steps: 1,
        visible: 1, // important
        end2end: true,
        autoplay: true
    });

    /**
     * artDialog demo
     */
        // 普通对话框
    $('.artDialog1').on('click', function () {
        var d1 = dialog({
            title: '消息',
            content: $(this).text(),
            fixed: true,
            okValue: '确 定',
            ok: function () {

            },
            quickClose: true
        });
        d1.show();
    });

        //模态对话框
    $('.artDialog2').on('click', function () {
        var d2 = dialog({
            content: $(this).text(),
            quickClose: true
        });
        d2.showModal();
    });

        //气泡对话框
    $('.artDialog3').on('click', function () {
        var d = dialog({
            content: 'Hello World!',
            quickClose: true// 点击空白处快速关闭
        });
        d.show($('#quickref-bubble')[0]);
    });

});