(function(){
    var app = angular.module('shelf', []);

    app.controller('ShelfController', function(){
	this.books = books;
    });
    
    var books = [
	{
	    isbn: 9784101171319,
	    type: '文庫',
	    title: '旅のラゴス',
	    author: '筒井康隆',
	    price: 490,
	    publish: '新潮社',
	    year: '1994',
	    status: '読書中',
	    tags: ['旅', 'SF'],
	    impressions: '旅に出たくなるような気持ちにさせられる。一見ただのファンタジーとも捉えられるんだけど、妙に現実感を帯びている。'
	},
	{
	    isbn: 9784062577953,
	    type: '新書',
	    title: 'シャノンの情報理論入門',
	    author: '高岡詠子',
	    price: 800,
	    publish: '講談社',
	    year: '2012',
	    status: '読書中',
	    tags: ['情報理論', 'BLUE BACKS'],
	    impressions: '寅市先生の講義でシャノンの標本化定理を聞いて感動した。あれからさっぱり知識は抜け落ちてしまったけれど、たまにはこういう本で学生時代の感動に相まみえたい。'
	}
    ];

})();
