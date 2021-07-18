/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.7.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/GatewayTimeout', 'model/GetAlliancesAllianceIdIconsNotFound', 'model/GetAlliancesAllianceIdIconsOk', 'model/GetAlliancesAllianceIdNotFound', 'model/GetAlliancesAllianceIdOk', 'model/InternalServerError', 'model/ServiceUnavailable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/GatewayTimeout'), require('../model/GetAlliancesAllianceIdIconsNotFound'), require('../model/GetAlliancesAllianceIdIconsOk'), require('../model/GetAlliancesAllianceIdNotFound'), require('../model/GetAlliancesAllianceIdOk'), require('../model/InternalServerError'), require('../model/ServiceUnavailable'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.AllianceApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetAlliancesAllianceIdIconsNotFound, root.EveSwaggerInterface.GetAlliancesAllianceIdIconsOk, root.EveSwaggerInterface.GetAlliancesAllianceIdNotFound, root.EveSwaggerInterface.GetAlliancesAllianceIdOk, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.ServiceUnavailable);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, GatewayTimeout, GetAlliancesAllianceIdIconsNotFound, GetAlliancesAllianceIdIconsOk, GetAlliancesAllianceIdNotFound, GetAlliancesAllianceIdOk, InternalServerError, ServiceUnavailable) {
  'use strict';

  /**
   * Alliance service.
   * @module api/AllianceApi
   * @version 1.7.2
   */

  /**
   * Constructs a new AllianceApi. 
   * @alias module:api/AllianceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAlliances operation.
     * @callback module:api/AllianceApi~getAlliancesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all alliances
     * List all active player alliances  --- Alternate route: `/dev/alliances/`  Alternate route: `/legacy/alliances/`  Alternate route: `/v1/alliances/`  Alternate route: `/v2/alliances/`  --- This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/AllianceApi~getAlliancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.getAlliances = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/alliances/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlliancesAllianceId operation.
     * @callback module:api/AllianceApi~getAlliancesAllianceIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAlliancesAllianceIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get alliance information
     * Public information about an alliance  --- Alternate route: `/dev/alliances/{alliance_id}/`  Alternate route: `/legacy/alliances/{alliance_id}/`  Alternate route: `/v3/alliances/{alliance_id}/`  Alternate route: `/v4/alliances/{alliance_id}/`  --- This route is cached for up to 3600 seconds
     * @param {Number} allianceId An EVE alliance ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/AllianceApi~getAlliancesAllianceIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAlliancesAllianceIdOk}
     */
    this.getAlliancesAllianceId = function(allianceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'allianceId' is set
      if (allianceId === undefined || allianceId === null) {
        throw new Error("Missing the required parameter 'allianceId' when calling getAlliancesAllianceId");
      }


      var pathParams = {
        'alliance_id': allianceId
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetAlliancesAllianceIdOk;

      return this.apiClient.callApi(
        '/alliances/{alliance_id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlliancesAllianceIdCorporations operation.
     * @callback module:api/AllianceApi~getAlliancesAllianceIdCorporationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List alliance's corporations
     * List all current member corporations of an alliance  --- Alternate route: `/dev/alliances/{alliance_id}/corporations/`  Alternate route: `/legacy/alliances/{alliance_id}/corporations/`  Alternate route: `/v1/alliances/{alliance_id}/corporations/`  Alternate route: `/v2/alliances/{alliance_id}/corporations/`  --- This route is cached for up to 3600 seconds
     * @param {Number} allianceId An EVE alliance ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/AllianceApi~getAlliancesAllianceIdCorporationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.getAlliancesAllianceIdCorporations = function(allianceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'allianceId' is set
      if (allianceId === undefined || allianceId === null) {
        throw new Error("Missing the required parameter 'allianceId' when calling getAlliancesAllianceIdCorporations");
      }


      var pathParams = {
        'alliance_id': allianceId
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/alliances/{alliance_id}/corporations/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlliancesAllianceIdIcons operation.
     * @callback module:api/AllianceApi~getAlliancesAllianceIdIconsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAlliancesAllianceIdIconsOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get alliance icon
     * Get the icon urls for a alliance  --- Alternate route: `/legacy/alliances/{alliance_id}/icons/`  Alternate route: `/v1/alliances/{alliance_id}/icons/`  --- This route expires daily at 11:05  --- [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/alliances/{alliance_id}/icons/)
     * @param {Number} allianceId An EVE alliance ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/AllianceApi~getAlliancesAllianceIdIconsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAlliancesAllianceIdIconsOk}
     */
    this.getAlliancesAllianceIdIcons = function(allianceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'allianceId' is set
      if (allianceId === undefined || allianceId === null) {
        throw new Error("Missing the required parameter 'allianceId' when calling getAlliancesAllianceIdIcons");
      }


      var pathParams = {
        'alliance_id': allianceId
      };
      var queryParams = {
        'datasource': opts['datasource'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetAlliancesAllianceIdIconsOk;

      return this.apiClient.callApi(
        '/alliances/{alliance_id}/icons/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
