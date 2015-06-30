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
        var artDialog1 = dialog({
            title: '消息',
            content: $(this).text(),
            fixed: true,
            okValue: '确 定',
            ok: function () {

            },
            quickClose: true
        });
        artDialog1.show();
    });

        //模态对话框
    $('.artDialog2').on('click', function () {
        var artDialog2 = dialog({
            content: $(this).text(),
            quickClose: true
        });
        artDialog2.showModal();
    });

        //气泡对话框
    $('.artDialog3').on('click', function () {
        var artDialog3 = dialog({
            content: $(this).text(),
            quickClose: true
        });
        artDialog3.show($('.artDialog3'));
    })

});