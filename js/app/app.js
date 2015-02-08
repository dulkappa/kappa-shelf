(function(){
    var app = angular.module('shelf', []);

    app.controller('ShelfController', function(){
	this.books = books;
    });

    var books = [
	{
	    type: '文庫',
	    title: '旅のラゴス',
	    author: '筒井康隆',
	    price: 490,
	    publish: '新潮社',
	    year: '1994',
	    status: '読書中',
	    tags: ['旅', 'SF'],
	    impressions: '旅に出たくなるような気持ちにさせられる。一見ただのファンタジーとも捉えられるんだけど、妙に現実感を帯びている。'

	}
    ];

})();
