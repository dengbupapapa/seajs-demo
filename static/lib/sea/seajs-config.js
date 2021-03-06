~ function() {
    var base = '/';
    seajs.config({
        base: base,
        debug: false,
        map: [
            [/^(.*\.(?:css|js))(.*)$/i, '$1?v=20170206']
        ], // 时间戳
        // 别名配置
        alias: {

        },

        // 路径配置
        paths: {
            '@components': '/static/components',
            '@lib': '/static/lib',
            '@public': '/static/public'
        }
    });
}();