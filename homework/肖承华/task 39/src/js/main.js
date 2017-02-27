
requirejs.config({
    baseUrl: 'src/js',
    paths: {
        'jquery': 'lib/jquery/jquery.min'
     }
});

requirejs(['app/index']);