$(document).ready(function() {
    $(".reward_btn").click(function() {
        $reward_btn = $(this);
        //getting the next element
        $qr_code = $reward_btn.next();
        //open up the qr_code needed - toggle the slide- if visible, slide up, if not slidedown.
        $qr_code.slideToggle(500, function() {
            //execute this after slideToggle is done
            //change text of reward_btn based on visibility of qr_code div
            $reward_btn.text(function() {
                //change text based on condition
                return $qr_code.is(":visible") ? "点击收起" : "请喝咖啡";
            });
        });
    });
});
