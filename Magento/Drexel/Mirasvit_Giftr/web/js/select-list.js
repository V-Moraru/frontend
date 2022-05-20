define([
    'jquery',
    'niceSelect',
    'domReady!'
], function($){
    $.widget('mage.selectList', {
        _create: function () {
            $(this.element).niceSelect();
        },
    });

    return $.mage.selectList;
});
