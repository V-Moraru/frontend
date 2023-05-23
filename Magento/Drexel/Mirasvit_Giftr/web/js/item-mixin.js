define([
    'jquery',
    'uiComponent',
    'underscore',
    'Magento_Customer/js/customer-data',
    'mage/translate',
    "Magento_Ui/js/modal/modal"
], function($, Component, _, customerData, $t, modal) {
    'use strict';


    var mixin = {

        defineBehaviour: function(data, event) {
            this.initRegistries();

            if (!this.isLoggedIn()) {
                event.stopPropagation();
                window.location.href=this.loginUrl; // redirect to login page
            } else if (this.registries().length == 1) {
                event.stopPropagation();
                this.addProduct();
            }
        },

        getData: function() {
            var data = $('#product_addtocart_form').serializeArray();
            var selectedItem = $("select[name=\"listGiftr\"] option:selected"); // read value from select

            data.push({name: 'registries', value: selectedItem.val()});

            return data;
        },

        addProduct: function() {
            if (!$('#product_addtocart_form').valid()) {
                return false;
            }

            $.ajax({
                url: this.url,
                method: 'POST',
                data: this.getData(),
                dataType: 'json',
                showLoader: true,
                success: function (response) {
                    $('#giftr-modal').modal('closeModal'); // close modal window
                    if (response.status == this.login) {
                        setLocation(response.message);
                    }
                }
            });
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});
