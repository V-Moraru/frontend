define([
    'jquery'
], function($){
    $.widget('mage.qty', {


        _create: function () {
            $qtyDown = $(this.element).find(".qty-down");
            $qtyUp = $(this.element).find(".qty-up");
            $qtyInput = $(this.element).find("input.qty");
            $defaultValue = 1;

            $qtyUp.click(function(e) {
                e.preventDefault();
                $value = parseInt($qtyInput.val());
                if (!isNaN($value)) {
                    $value++;
                    $qtyInput.val($value);
                } else {
                    $qtyInput.val($defaultValue);
                }
            });

            $qtyDown.click(function(e) {
                e.preventDefault();
                $value = parseInt($qtyInput.val());
                if (!isNaN($value) && $value > 1) {
                    $value--;
                    $qtyInput.val($value);
                } else {
                    $qtyInput.val($defaultValue);
                }
            });
        },
});

return $.mage.qty;
});
