angular.module('pintree').directive('advancedSearchFilter', ['$compile', 'utilService',
    function ($compile, utilService) {
    return  {
        restrict: 'EA',
        replace: false,
        //require: 'ngModel',
        templateUrl:'partials/directive/advancedSearchFilter.html',
        scope: {
            //params: '=ngModel',
            onSubmit: '&'
        },
        compile: function compile(tElement, tAttrs, transclude) {

            return {
                pre: function(scope, element, iAttrs) {
                    scope.params = {};
                    scope.plantTypeOpts = ['全部', '乔木', '花卉（一、二年生及宿根）', '棕榈类', '灌木', '地被',
                        '爬藤', '观赏草及竹类'];
                    scope.climaticZoneOpts = ['寒温带', '中温带', '暖温带', '北亚热带', '中亚热带', '南亚热带',
                        '边缘热带', '中热带', '高原寒带', '高原温带'];
                    scope.massOpts = ['大', '中', '小'];
                    scope.evergreenOpts = ['常绿', '落叶', '半落叶'];
                    scope.treeFormOpts = ['圆球型', '垂枝型', '长椭圆形', '展开形', '伞形', '圆柱形', '锥形',
                        '塔形', '棕榈型', '多枝形', '匍匐形', '半球形', '拱枝形'];
                    scope.skinTextureOpts = ['中等', '粗糙', '细腻'];
                    scope.linellaeOpts = ['直线', '竖线', '曲线'];
                    scope.lightingConditionOpts = ['全日照', '半日照', '阴影', '任意'];
                    scope.mainOrnamentalOpts = ['观花', '观叶', '观枝', '观果', '香味'];
                    scope.leafColorOpts =[{k:'黄',v:'yellow'}, {k:'白',v:'#eee'}, {k:'绿',v:'green'}, {k:'橙',v:'orange'},
                        {k:'红',v:'red'}, {k:'紫',v:'purple'}, {k:'褐',v:'brown'}, {k:'蓝',v:'blue'}];
                    scope.flowerColorOpts = [{k:'红',v:'red'}, {k:'黄',v:'yellow'}, {k:'绿',v:'green'}, {k:'蓝',v:'blue'},
                        {k:'紫',v:'purple'}, {k:'白',v:'#eee'}, {k:'粉',v:'pink'}, {k:'青',v:'cyan'}, {k:'桃红',v:'#fd4e71'}, {k:'橙',v:'orange'}];
                    scope.florescenceOpts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

                    scope.togglePlantType = function(v){
                        if(scope.params.PlantType){
                            var index = $.inArray(v, scope.params.PlantType);
                            if(index > -1){
                                scope.params.PlantType.splice(index, 1);
                            } else {
                                scope.params.PlantType.push(v);
                            }
                        } else {
                            scope.params.PlantType = [v];
                        }
                    };
                    scope.toggleClimaticZone = function(v){
                        if(scope.params.ClimaticZone){
                            var index = $.inArray(v, scope.params.ClimaticZone);
                            if(index > -1){
                                scope.params.ClimaticZone.splice(index, 1);
                            } else {
                                scope.params.ClimaticZone.push(v);
                            }
                        } else {
                            scope.params.ClimaticZone = [v];
                        }
                    };
                    scope.toggleMass = function(v){
                        if(scope.params.Mass){
                            var index = $.inArray(v, scope.params.Mass);
                            if(index > -1){
                                scope.params.Mass.splice(index, 1);
                            } else {
                                scope.params.Mass.push(v);
                            }
                        } else {
                            scope.params.Mass = [v];
                        }
                    };
                    scope.toggleEvergreen = function(v){
                        if(scope.params.Evergreen){
                            var index = $.inArray(v, scope.params.Evergreen);
                            if(index > -1){
                                scope.params.Evergreen.splice(index, 1);
                            } else {
                                scope.params.Evergreen.push(v);
                            }
                        } else {
                            scope.params.Evergreen = [v];
                        }
                    };
                    scope.toggleTreeForm = function(v){
                        if(scope.params.TreeForm){
                            var index = $.inArray(v, scope.params.TreeForm);
                            if(index > -1){
                                scope.params.TreeForm.splice(index, 1);
                            } else {
                                scope.params.TreeForm.push(v);
                            }
                        } else {
                            scope.params.TreeForm = [v];
                        }
                    };
                    scope.toggleSkinTexture = function(v){
                        if(scope.params.SkinTexture){
                            var index = $.inArray(v, scope.params.SkinTexture);
                            if(index > -1){
                                scope.params.SkinTexture.splice(index, 1);
                            } else {
                                scope.params.SkinTexture.push(v);
                            }
                        } else {
                            scope.params.SkinTexture = [v];
                        }
                    };
                    scope.toggleLinellae = function(v){
                        if(scope.params.Linellae){
                            var index = $.inArray(v, scope.params.Linellae);
                            if(index > -1){
                                scope.params.Linellae.splice(index, 1);
                            } else {
                                scope.params.Linellae.push(v);
                            }
                        } else {
                            scope.params.Linellae = [v];
                        }
                    };
                    scope.toggleMainOrnamental = function(v){
                        if(scope.params.MainOrnamental){
                            var index = $.inArray(v, scope.params.MainOrnamental);
                            if(index > -1){
                                scope.params.MainOrnamental.splice(index, 1);
                            } else {
                                scope.params.MainOrnamental.push(v);
                            }
                        } else {
                            scope.params.MainOrnamental = [v];
                        }
                    };
                    scope.toggleLeafColor = function(v){
                        if(scope.params.LeafColor){
                            var index = $.inArray(v, scope.params.LeafColor);
                            if(index > -1){
                                scope.params.LeafColor.splice(index, 1);
                            } else {
                                scope.params.LeafColor.push(v);
                            }
                        } else {
                            scope.params.LeafColor = [v];
                        }
                    };
                    scope.toggleFlowerColor = function(v){
                        if(scope.params.FlowerColor){
                            var index = $.inArray(v, scope.params.FlowerColor);
                            if(index > -1){
                                scope.params.FlowerColor.splice(index, 1);
                            } else {
                                scope.params.FlowerColor.push(v);
                            }
                        } else {
                            scope.params.FlowerColor = [v];
                        }
                    };
                    scope.toggleFlorescence = function(v){
                        if(scope.params.Florescence){
                            var index = $.inArray(v, scope.params.Florescence);
                            if(index > -1){
                                scope.params.Florescence.splice(index, 1);
                            } else {
                                scope.params.Florescence.push(v);
                            }
                        } else {
                            scope.params.Florescence = [v];
                        }
                    };
                    scope.toggleLightingCondition = function(v){
                        if(scope.params.LightingCondition){
                            var index = $.inArray(v, scope.params.LightingCondition);
                            if(index > -1){
                                scope.params.LightingCondition.splice(index, 1);
                            } else {
                                scope.params.LightingCondition.push(v);
                            }
                        } else {
                            scope.params.LightingCondition = [v];
                        }
                    };
                    scope.$watch('showAdvanced', function(newValue, oldValue){
                        angular.element(document.body).toggleClass('modal-opened', newValue);
                    });
                    scope.showAdvanced = false;
                    scope.toggleStatus = function(v, k){
                        scope.showAdvanced = !scope.showAdvanced;
                    };
                    scope.ok = function(v, k){
                        scope.showAdvanced = false;
                        scope.onSubmit({params:scope.params});
                        //scope.$emit("advancedsearch", {params: scope.params});
                    };
                    scope.cancel = function(){
                        scope.showAdvanced = false;
                    };
                },

                post: function(scope, element, iAttrs, controller) {

                }
            };
        }
    };
}]);
