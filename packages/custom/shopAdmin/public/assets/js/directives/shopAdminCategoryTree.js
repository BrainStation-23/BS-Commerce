'use strict';

angular.module('mean.shopAdmin').directive('shopAdminCategoryTree', ['Global', '$http',
    function(Global, $http) {
        return{
            replace: true,
            template: '<div id="category_jstree_div"></div>',
            link: function(scope, element, attrs){
                var catTree = [];
                $http.get('/api/categories').
                    success(function(data, status, headers, config) {
                        for(var i in data){
                            var item = {};
                            item.id = data[i]._id;
                            item.parent = '#';
                            item.text = data[i].name;
                            catTree.push(item);
                            for(var j in data[i].subCategories){
                                var subItem = {};
                                subItem.id = data[i].subCategories[j]._id;
                                subItem.parent = data[i]._id;
                                subItem.text = data[i].subCategories[j].name;
                                catTree.push(subItem);
                            }
                        }
                        element.jstree({ 'core' : {
                            'data' : catTree
                        } });
                    }).
                    error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
            }

        };
    }
]);