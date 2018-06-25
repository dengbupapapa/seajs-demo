define(function(require, exports, module) {

    module.exports = require('./myIsDemoConponents.tpl');

    require('./myIsDemoConponents.css');

    $('body').on('click', '#myIsDemoConponents', function() {
        alert('myIsDemoConponents');
    })

})