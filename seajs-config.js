~ function() {
    var base = '/';
    seajs.config({
        base: base,
        debug: false,
        map: [
            [/^(.*\.(?:css|js))(.*)$/i, '$1?v=20170206']
        ], // 时间戳
        alias: {}
    });
}();