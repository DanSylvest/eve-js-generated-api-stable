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
    root.EveSwaggerInterface.GetAlliancesAllianceIdContacts200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetAlliancesAllianceIdContacts200Ok model module.
   * @module model/GetAlliancesAllianceIdContacts200Ok
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetAlliancesAllianceIdContacts200Ok</code>.
   * 200 ok object
   * @alias module:model/GetAlliancesAllianceIdContacts200Ok
   * @class
   * @param contactId {Number} contact_id integer
   * @param contactType {module:model/GetAlliancesAllianceIdContacts200Ok.ContactTypeEnum} contact_type string
   * @param standing {Number} Standing of the contact
   */
  var exports = function(contactId, contactType, standing) {
    this.contactId = contactId;
    this.contactType = contactType;
    this.standing = standing;
  };

  /**
   * Constructs a <code>GetAlliancesAllianceIdContacts200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAlliancesAllianceIdContacts200Ok} obj Optional instance to populate.
   * @return {module:model/GetAlliancesAllianceIdContacts200Ok} The populated <code>GetAlliancesAllianceIdContacts200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('contact_id'))
        obj.contactId = ApiClient.convertToType(data['contact_id'], 'Number');
      if (data.hasOwnProperty('contact_type'))
        obj.contactType = ApiClient.convertToType(data['contact_type'], 'String');
      if (data.hasOwnProperty('label_ids'))
        obj.labelIds = ApiClient.convertToType(data['label_ids'], ['Number']);
      if (data.hasOwnProperty('standing'))
        obj.standing = ApiClient.convertToType(data['standing'], 'Number');
    }
    return obj;
  }

  /**
   * contact_id integer
   * @member {Number} contactId
   */
  exports.prototype.contactId = undefined;

  /**
   * contact_type string
   * @member {module:model/GetAlliancesAllianceIdContacts200Ok.ContactTypeEnum} contactType
   */
  exports.prototype.contactType = undefined;

  /**
   * label_ids array
   * @member {Array.<Number>} labelIds
   */
  exports.prototype.labelIds = undefined;

  /**
   * Standing of the contact
   * @member {Number} standing
   */
  exports.prototype.standing = undefined;



  /**
   * Allowed values for the <code>contactType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ContactTypeEnum = {
    /**
     * value: "character"
     * @const
     */
    character: "character",

    /**
     * value: "corporation"
     * @const
     */
    corporation: "corporation",

    /**
     * value: "alliance"
     * @const
     */
    alliance: "alliance",

    /**
     * value: "faction"
     * @const
     */
    faction: "faction"
  };

  return exports;

}));