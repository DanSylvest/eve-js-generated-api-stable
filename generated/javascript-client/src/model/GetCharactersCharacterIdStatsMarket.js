/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.7.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdStatsMarket = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdStatsMarket model module.
   * @module model/GetCharactersCharacterIdStatsMarket
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdStatsMarket</code>.
   * market object
   * @alias module:model/GetCharactersCharacterIdStatsMarket
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdStatsMarket</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdStatsMarket} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdStatsMarket} The populated <code>GetCharactersCharacterIdStatsMarket</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accept_contracts_courier'))
        obj.acceptContractsCourier = ApiClient.convertToType(data['accept_contracts_courier'], 'Number');
      if (data.hasOwnProperty('accept_contracts_item_exchange'))
        obj.acceptContractsItemExchange = ApiClient.convertToType(data['accept_contracts_item_exchange'], 'Number');
      if (data.hasOwnProperty('buy_orders_placed'))
        obj.buyOrdersPlaced = ApiClient.convertToType(data['buy_orders_placed'], 'Number');
      if (data.hasOwnProperty('cancel_market_order'))
        obj.cancelMarketOrder = ApiClient.convertToType(data['cancel_market_order'], 'Number');
      if (data.hasOwnProperty('create_contracts_auction'))
        obj.createContractsAuction = ApiClient.convertToType(data['create_contracts_auction'], 'Number');
      if (data.hasOwnProperty('create_contracts_courier'))
        obj.createContractsCourier = ApiClient.convertToType(data['create_contracts_courier'], 'Number');
      if (data.hasOwnProperty('create_contracts_item_exchange'))
        obj.createContractsItemExchange = ApiClient.convertToType(data['create_contracts_item_exchange'], 'Number');
      if (data.hasOwnProperty('deliver_courier_contract'))
        obj.deliverCourierContract = ApiClient.convertToType(data['deliver_courier_contract'], 'Number');
      if (data.hasOwnProperty('isk_gained'))
        obj.iskGained = ApiClient.convertToType(data['isk_gained'], 'Number');
      if (data.hasOwnProperty('isk_spent'))
        obj.iskSpent = ApiClient.convertToType(data['isk_spent'], 'Number');
      if (data.hasOwnProperty('modify_market_order'))
        obj.modifyMarketOrder = ApiClient.convertToType(data['modify_market_order'], 'Number');
      if (data.hasOwnProperty('search_contracts'))
        obj.searchContracts = ApiClient.convertToType(data['search_contracts'], 'Number');
      if (data.hasOwnProperty('sell_orders_placed'))
        obj.sellOrdersPlaced = ApiClient.convertToType(data['sell_orders_placed'], 'Number');
    }
    return obj;
  }

  /**
   * accept_contracts_courier integer
   * @member {Number} acceptContractsCourier
   */
  exports.prototype.acceptContractsCourier = undefined;

  /**
   * accept_contracts_item_exchange integer
   * @member {Number} acceptContractsItemExchange
   */
  exports.prototype.acceptContractsItemExchange = undefined;

  /**
   * buy_orders_placed integer
   * @member {Number} buyOrdersPlaced
   */
  exports.prototype.buyOrdersPlaced = undefined;

  /**
   * cancel_market_order integer
   * @member {Number} cancelMarketOrder
   */
  exports.prototype.cancelMarketOrder = undefined;

  /**
   * create_contracts_auction integer
   * @member {Number} createContractsAuction
   */
  exports.prototype.createContractsAuction = undefined;

  /**
   * create_contracts_courier integer
   * @member {Number} createContractsCourier
   */
  exports.prototype.createContractsCourier = undefined;

  /**
   * create_contracts_item_exchange integer
   * @member {Number} createContractsItemExchange
   */
  exports.prototype.createContractsItemExchange = undefined;

  /**
   * deliver_courier_contract integer
   * @member {Number} deliverCourierContract
   */
  exports.prototype.deliverCourierContract = undefined;

  /**
   * isk_gained integer
   * @member {Number} iskGained
   */
  exports.prototype.iskGained = undefined;

  /**
   * isk_spent integer
   * @member {Number} iskSpent
   */
  exports.prototype.iskSpent = undefined;

  /**
   * modify_market_order integer
   * @member {Number} modifyMarketOrder
   */
  exports.prototype.modifyMarketOrder = undefined;

  /**
   * search_contracts integer
   * @member {Number} searchContracts
   */
  exports.prototype.searchContracts = undefined;

  /**
   * sell_orders_placed integer
   * @member {Number} sellOrdersPlaced
   */
  exports.prototype.sellOrdersPlaced = undefined;

  return exports;

}));
