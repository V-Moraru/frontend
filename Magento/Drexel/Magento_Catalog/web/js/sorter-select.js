define([
    'jquery',
    'niceSelect',
    'domReady!'
], function($){
    $.widget('mage.sorterSelect', {

        _create: function () {
            $(this.element).niceSelect();
        },
    });

    return $.mage.sorterSelect;
});
