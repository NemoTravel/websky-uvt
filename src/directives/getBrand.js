var app = angular.module('app');

app.directive('getBrand', function () {
    return {
        scope: false,
        controllerAs: 'getBrand',
        bindScopeToController: true,
        controller: 'getBrandController'
    }
});

app.controller('getBrandController', ['$scope', 'backend', getBrandController]);


function getBrandController($scope, backend) {
    var vm = $scope.vm;

    backend.ready.then(function () {
        vm.brand = _.assign({}, getBrandByName(backend.getBrandConfig(), vm.brandName));
    });

}

function isLuggageOrCarryon(prop) {
    return (prop.code === 'luggage' || prop.code === 'carryon') ? 1 : 0;
}

function compareProps(prop1, prop2) {
    var prop1Available = prop1.available;
    var prop2Available = prop2.available;
}

function getBrandByName(brands, name) {
    return brands.filter(function (brand) {
        return brand.name === name;
    })[0];
}


