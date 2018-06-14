require.config({
    baseUrl: '/js/',
    paths: {
        jquery: 'lib/jquery-2.1.1.min',
        index: 'index/index',
        flexbile: 'lib/flexible',
        handlebars: 'lib/handlebars-v4.0.11',
        message: 'message/index'
    }
});
require(['flexbile']);