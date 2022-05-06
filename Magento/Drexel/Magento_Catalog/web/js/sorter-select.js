define([
    'jquery',
    'selectize'
], function($){
    $.widget('mage.sorterSelect', {

        _create: function () {
            $('#sorter').selectize({
                create: true,
                sortField: "text",
            });
        },

    });

    return $.mage.sorterSelect;
});
