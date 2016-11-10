module app.common {
    interface IDataAccessService {
        getProductResource(): ng.resource.IResourceClass<IProductResource>;
    }

    interface IProductResource
        extends ng.resource.IResource<app.domain.IProduct> {

    }

    export class DataAccessService
        implements IDataAccessService {

        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {

        }

        getProductResource(): ng.resource.IResourceClass<IProductResource> {
            var response = this.$resource('/api/products/:productId');
            return response;
        }

    }

    angular.module('common.service')
        .service('dataAccessService', DataAccessService);
}   