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

        vm.brand.props = vm.brand.props.sort(function (a, b) {
            switch (a.available) {
                case 'yes':
                    return -1;
                case 'paid':
                    return 1;
                case 'no':
                    return 1;
                default:
                    return 1;
            }
        }).slice();
    });

}

function getBrandByName(brands, name) {
    return brands.filter(function (brand) {
        return brand.name === name;
    })[0];
}


