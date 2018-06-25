define(function(require, exports, module) {

    console.log('index');

    function demoFn() {

        var myIsDemoConponents = require('@components/myIsDemoConponents/myIsDemoConponents.js');
        var template = require('@lib/art-template/art-template.js');

        $('#app').html(template.render(myIsDemoConponents, {
            data: 12345678
        }));

    }

    (function main() {
        demoFn();
    })();

});