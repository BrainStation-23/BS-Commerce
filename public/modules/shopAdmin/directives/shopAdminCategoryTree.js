'use strict';


angular.module('shopAdmin').directive('shopAdminCategoryTree', ['Global', '$http', '$state',
    function (Global, $http, $state) {
        return {
            restrict:'AE',
            replace: true,
            template: '<div id="category_jstree_div"></div>',
            link: function (scope, element, attrs) {

                var catTree = [];

                var generateCategoriesForTree = function(getCategories, callback) {
                    var generatedCategories = [];

                    var generateCategoriesWithParent = function(categories, parentCategory) {
                        angular.forEach(categories, function(category) {

                            var item = {};
                            item.id = category._id;
                            item.parent = '#';
                            item.text = category.name;

                            if(category.parent) {
                                item.parent = category.parent;
                            }

                            generatedCategories.push(item);

                            if(category.subCategories) {
                                generateCategoriesWithParent(category.subCategories, category.name);
                            }
                        });
                    };
                    generateCategoriesWithParent(getCategories, null);

                    callback(generatedCategories);
                };

                $http.get('/api/categories').
                    success(function (data, status, headers, config) {

                        generateCategoriesForTree(data, function(categories) {
                            catTree = categories;
                        });

                        element.jstree({
                            'core': {
                                'data': catTree,
                                'dblclick_toggle': false
                            }
                        }).on('activate_node.jstree', function (e, data) {
                            $state.go('Category.Edit', {categoryId: data.node.id});
                        });

                    }).
                    error(function (data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
            }

        };
    }
]);


