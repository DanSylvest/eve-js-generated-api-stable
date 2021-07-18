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
    define(['ApiClient', 'model/GetKillmailsKillmailIdKillmailHashItemsItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetKillmailsKillmailIdKillmailHashItemsItem'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashItem = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashItemsItem);
  }
}(this, function(ApiClient, GetKillmailsKillmailIdKillmailHashItemsItem) {
  'use strict';

  /**
   * The GetKillmailsKillmailIdKillmailHashItem model module.
   * @module model/GetKillmailsKillmailIdKillmailHashItem
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetKillmailsKillmailIdKillmailHashItem</code>.
   * item object
   * @alias module:model/GetKillmailsKillmailIdKillmailHashItem
   * @class
   * @param flag {Number} Flag for the location of the item 
   * @param itemTypeId {Number} item_type_id integer
   * @param singleton {Number} singleton integer
   */
  var exports = function(flag, itemTypeId, singleton) {
    this.flag = flag;
    this.itemTypeId = itemTypeId;
    this.singleton = singleton;
  };

  /**
   * Constructs a <code>GetKillmailsKillmailIdKillmailHashItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetKillmailsKillmailIdKillmailHashItem} obj Optional instance to populate.
   * @return {module:model/GetKillmailsKillmailIdKillmailHashItem} The populated <code>GetKillmailsKillmailIdKillmailHashItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('flag'))
        obj.flag = ApiClient.convertToType(data['flag'], 'Number');
      if (data.hasOwnProperty('item_type_id'))
        obj.itemTypeId = ApiClient.convertToType(data['item_type_id'], 'Number');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [GetKillmailsKillmailIdKillmailHashItemsItem]);
      if (data.hasOwnProperty('quantity_destroyed'))
        obj.quantityDestroyed = ApiClient.convertToType(data['quantity_destroyed'], 'Number');
      if (data.hasOwnProperty('quantity_dropped'))
        obj.quantityDropped = ApiClient.convertToType(data['quantity_dropped'], 'Number');
      if (data.hasOwnProperty('singleton'))
        obj.singleton = ApiClient.convertToType(data['singleton'], 'Number');
    }
    return obj;
  }

  /**
   * Flag for the location of the item 
   * @member {Number} flag
   */
  exports.prototype.flag = undefined;

  /**
   * item_type_id integer
   * @member {Number} itemTypeId
   */
  exports.prototype.itemTypeId = undefined;

  /**
   * items array
   * @member {Array.<module:model/GetKillmailsKillmailIdKillmailHashItemsItem>} items
   */
  exports.prototype.items = undefined;

  /**
   * How many of the item were destroyed if any 
   * @member {Number} quantityDestroyed
   */
  exports.prototype.quantityDestroyed = undefined;

  /**
   * How many of the item were dropped if any 
   * @member {Number} quantityDropped
   */
  exports.prototype.quantityDropped = undefined;

  /**
   * singleton integer
   * @member {Number} singleton
   */
  exports.prototype.singleton = undefined;


  return exports;

}));
