hexo.extend.generator.register('link', function(locals){
    return {
        path: 'links/index.html',
        data: locals.posts,
        layout: ['link', 'archive', 'index']
    }
});