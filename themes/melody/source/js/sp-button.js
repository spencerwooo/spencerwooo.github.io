$(document).ready(function () {
    $(".jike_btn").click(function () {
        $jike_btn = $(this);
        $qr_code_img = $jike_btn.next();
        $qr_code_img.slideToggle(500, function () {
            $jike_btn.text(function () {
                return $qr_code_img.is(":visible") ? "点击收起" : "即刻关注";
            });
        });
    });
});