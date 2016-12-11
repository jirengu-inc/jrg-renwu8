requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery.min'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main']);