define([
    'jquery'
], function($){
    $.widget('mage.qty', {


        _create: function () {
            $qtyDown = $(this.element).find(".qty-down");
            $qtyUp = $(this.element).find(".qty-up");
            $qtyInput = $(this.element).find("input.qty");

            $qtyUp.click(function(e) {
                e.preventDefault();
                $value = parseInt($qtyInput.val());
                $value++;
                $qtyInput.val($value);
            });

            $qtyDown.click(function(e) {
                e.preventDefault();
                $value = parseInt($qtyInput.val());
                if ($value > 1) {
                    $value--;
                    $qtyInput.val($value);
                }
            });
        },

});

return $.mage.qty;
});
