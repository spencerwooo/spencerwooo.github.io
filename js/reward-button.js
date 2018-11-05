$(document).ready(function () {
    $(".post-qr-code-button").click(function () {
        $btn = $(this);
        $qr_code = $btn.next();
        $qr_code.slideToggle(500, function () {
            $btn.text(function () {
                return $qr_code.is(":visible") ? "点击收起" : "请喝咖啡";
            });
        });
    });
});