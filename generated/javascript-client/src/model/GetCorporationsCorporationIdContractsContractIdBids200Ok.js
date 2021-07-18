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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCorporationsCorporationIdContractsContractIdBids200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCorporationsCorporationIdContractsContractIdBids200Ok model module.
   * @module model/GetCorporationsCorporationIdContractsContractIdBids200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdContractsContractIdBids200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdContractsContractIdBids200Ok
   * @class
   * @param amount {Number} The amount bid, in ISK
   * @param bidId {Number} Unique ID for the bid
   * @param bidderId {Number} Character ID of the bidder
   * @param dateBid {Date} Datetime when the bid was placed
   */
  var exports = function(amount, bidId, bidderId, dateBid) {
    this.amount = amount;
    this.bidId = bidId;
    this.bidderId = bidderId;
    this.dateBid = dateBid;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdContractsContractIdBids200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdContractsContractIdBids200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdContractsContractIdBids200Ok} The populated <code>GetCorporationsCorporationIdContractsContractIdBids200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('bid_id'))
        obj.bidId = ApiClient.convertToType(data['bid_id'], 'Number');
      if (data.hasOwnProperty('bidder_id'))
        obj.bidderId = ApiClient.convertToType(data['bidder_id'], 'Number');
      if (data.hasOwnProperty('date_bid'))
        obj.dateBid = ApiClient.convertToType(data['date_bid'], 'Date');
    }
    return obj;
  }

  /**
   * The amount bid, in ISK
   * @member {Number} amount
   */
  exports.prototype.amount = undefined;

  /**
   * Unique ID for the bid
   * @member {Number} bidId
   */
  exports.prototype.bidId = undefined;

  /**
   * Character ID of the bidder
   * @member {Number} bidderId
   */
  exports.prototype.bidderId = undefined;

  /**
   * Datetime when the bid was placed
   * @member {Date} dateBid
   */
  exports.prototype.dateBid = undefined;


  return exports;

}));
