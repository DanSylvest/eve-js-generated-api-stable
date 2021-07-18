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
    define(['ApiClient', 'model/BadRequest', 'model/ErrorLimited', 'model/Forbidden', 'model/GatewayTimeout', 'model/GetCharactersCharacterIdKillmailsRecent200Ok', 'model/GetCorporationsCorporationIdKillmailsRecent200Ok', 'model/GetKillmailsKillmailIdKillmailHashOk', 'model/GetKillmailsKillmailIdKillmailHashUnprocessableEntity', 'model/InternalServerError', 'model/ServiceUnavailable', 'model/Unauthorized'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ErrorLimited'), require('../model/Forbidden'), require('../model/GatewayTimeout'), require('../model/GetCharactersCharacterIdKillmailsRecent200Ok'), require('../model/GetCorporationsCorporationIdKillmailsRecent200Ok'), require('../model/GetKillmailsKillmailIdKillmailHashOk'), require('../model/GetKillmailsKillmailIdKillmailHashUnprocessableEntity'), require('../model/InternalServerError'), require('../model/ServiceUnavailable'), require('../model/Unauthorized'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.KillmailsApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.BadRequest, root.EveSwaggerInterface.ErrorLimited, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GatewayTimeout, root.EveSwaggerInterface.GetCharactersCharacterIdKillmailsRecent200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdKillmailsRecent200Ok, root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashOk, root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashUnprocessableEntity, root.EveSwaggerInterface.InternalServerError, root.EveSwaggerInterface.ServiceUnavailable, root.EveSwaggerInterface.Unauthorized);
  }
}(this, function(ApiClient, BadRequest, ErrorLimited, Forbidden, GatewayTimeout, GetCharactersCharacterIdKillmailsRecent200Ok, GetCorporationsCorporationIdKillmailsRecent200Ok, GetKillmailsKillmailIdKillmailHashOk, GetKillmailsKillmailIdKillmailHashUnprocessableEntity, InternalServerError, ServiceUnavailable, Unauthorized) {
  'use strict';

  /**
   * Killmails service.
   * @module api/KillmailsApi
   * @version 1.7.2
   */

  /**
   * Constructs a new KillmailsApi. 
   * @alias module:api/KillmailsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdKillmailsRecent operation.
     * @callback module:api/KillmailsApi~getCharactersCharacterIdKillmailsRecentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdKillmailsRecent200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a character's recent kills and losses
     * Return a list of a character's kills and losses going back 90 days  --- Alternate route: `/dev/characters/{character_id}/killmails/recent/`  Alternate route: `/legacy/characters/{character_id}/killmails/recent/`  Alternate route: `/v1/characters/{character_id}/killmails/recent/`  --- This route is cached for up to 300 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/KillmailsApi~getCharactersCharacterIdKillmailsRecentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdKillmailsRecent200Ok>}
     */
    this.getCharactersCharacterIdKillmailsRecent = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdKillmailsRecent");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdKillmailsRecent200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/killmails/recent/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdKillmailsRecent operation.
     * @callback module:api/KillmailsApi~getCorporationsCorporationIdKillmailsRecentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdKillmailsRecent200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a corporation's recent kills and losses
     * Get a list of a corporation's kills and losses going back 90 days  --- Alternate route: `/dev/corporations/{corporation_id}/killmails/recent/`  Alternate route: `/legacy/corporations/{corporation_id}/killmails/recent/`  Alternate route: `/v1/corporations/{corporation_id}/killmails/recent/`  --- This route is cached for up to 300 seconds  --- Requires one of the following EVE corporation role(s): Director 
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {module:api/KillmailsApi~getCorporationsCorporationIdKillmailsRecentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdKillmailsRecent200Ok>}
     */
    this.getCorporationsCorporationIdKillmailsRecent = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdKillmailsRecent");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
        'token': opts['token'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-None-Match': opts['ifNoneMatch']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [GetCorporationsCorporationIdKillmailsRecent200Ok];

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/killmails/recent/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getKillmailsKillmailIdKillmailHash operation.
     * @callback module:api/KillmailsApi~getKillmailsKillmailIdKillmailHashCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetKillmailsKillmailIdKillmailHashOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single killmail
     * Return a single killmail from its ID and hash  --- Alternate route: `/dev/killmails/{killmail_id}/{killmail_hash}/`  Alternate route: `/legacy/killmails/{killmail_id}/{killmail_hash}/`  Alternate route: `/v1/killmails/{killmail_id}/{killmail_hash}/`  --- This route is cached for up to 30758400 seconds
     * @param {String} killmailHash The killmail hash for verification
     * @param {Number} killmailId The killmail ID to be queried
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.ifNoneMatch ETag from a previous request. A 304 will be returned if this matches the current ETag
     * @param {module:api/KillmailsApi~getKillmailsKillmailIdKillmailHashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetKillmailsKillmailIdKillmailHashOk}
     */
    this.getKillmailsKillmailIdKillmailHash = function(killmailHash, killmailId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'killmailHash' is set
      if (killmailHash === undefined || killmailHash === null) {
        throw new Error("Missing the required parameter 'killmailHash' when calling getKillmailsKillmailIdKillmailHash");
      }

      // verify the required parameter 'killmailId' is set
      if (killmailId === undefined || killmailId === null) {
        throw new Error("Missing the required parameter 'killmailId' when calling getKillmailsKillmailIdKillmailHash");
      }


      var pathParams = {
        'killmail_hash': killmailHash,
        'killmail_id': killmailId
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
      var returnType = GetKillmailsKillmailIdKillmailHashOk;

      return this.apiClient.callApi(
        '/killmails/{killmail_id}/{killmail_hash}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
