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
    root.EveSwaggerInterface.GetCharactersCharacterIdStatsTravel = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdStatsTravel model module.
   * @module model/GetCharactersCharacterIdStatsTravel
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdStatsTravel</code>.
   * travel object
   * @alias module:model/GetCharactersCharacterIdStatsTravel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdStatsTravel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdStatsTravel} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdStatsTravel} The populated <code>GetCharactersCharacterIdStatsTravel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('acceleration_gate_activations'))
        obj.accelerationGateActivations = ApiClient.convertToType(data['acceleration_gate_activations'], 'Number');
      if (data.hasOwnProperty('align_to'))
        obj.alignTo = ApiClient.convertToType(data['align_to'], 'Number');
      if (data.hasOwnProperty('distance_warped_high_sec'))
        obj.distanceWarpedHighSec = ApiClient.convertToType(data['distance_warped_high_sec'], 'Number');
      if (data.hasOwnProperty('distance_warped_low_sec'))
        obj.distanceWarpedLowSec = ApiClient.convertToType(data['distance_warped_low_sec'], 'Number');
      if (data.hasOwnProperty('distance_warped_null_sec'))
        obj.distanceWarpedNullSec = ApiClient.convertToType(data['distance_warped_null_sec'], 'Number');
      if (data.hasOwnProperty('distance_warped_wormhole'))
        obj.distanceWarpedWormhole = ApiClient.convertToType(data['distance_warped_wormhole'], 'Number');
      if (data.hasOwnProperty('docks_high_sec'))
        obj.docksHighSec = ApiClient.convertToType(data['docks_high_sec'], 'Number');
      if (data.hasOwnProperty('docks_low_sec'))
        obj.docksLowSec = ApiClient.convertToType(data['docks_low_sec'], 'Number');
      if (data.hasOwnProperty('docks_null_sec'))
        obj.docksNullSec = ApiClient.convertToType(data['docks_null_sec'], 'Number');
      if (data.hasOwnProperty('jumps_stargate_high_sec'))
        obj.jumpsStargateHighSec = ApiClient.convertToType(data['jumps_stargate_high_sec'], 'Number');
      if (data.hasOwnProperty('jumps_stargate_low_sec'))
        obj.jumpsStargateLowSec = ApiClient.convertToType(data['jumps_stargate_low_sec'], 'Number');
      if (data.hasOwnProperty('jumps_stargate_null_sec'))
        obj.jumpsStargateNullSec = ApiClient.convertToType(data['jumps_stargate_null_sec'], 'Number');
      if (data.hasOwnProperty('jumps_wormhole'))
        obj.jumpsWormhole = ApiClient.convertToType(data['jumps_wormhole'], 'Number');
      if (data.hasOwnProperty('warps_high_sec'))
        obj.warpsHighSec = ApiClient.convertToType(data['warps_high_sec'], 'Number');
      if (data.hasOwnProperty('warps_low_sec'))
        obj.warpsLowSec = ApiClient.convertToType(data['warps_low_sec'], 'Number');
      if (data.hasOwnProperty('warps_null_sec'))
        obj.warpsNullSec = ApiClient.convertToType(data['warps_null_sec'], 'Number');
      if (data.hasOwnProperty('warps_to_bookmark'))
        obj.warpsToBookmark = ApiClient.convertToType(data['warps_to_bookmark'], 'Number');
      if (data.hasOwnProperty('warps_to_celestial'))
        obj.warpsToCelestial = ApiClient.convertToType(data['warps_to_celestial'], 'Number');
      if (data.hasOwnProperty('warps_to_fleet_member'))
        obj.warpsToFleetMember = ApiClient.convertToType(data['warps_to_fleet_member'], 'Number');
      if (data.hasOwnProperty('warps_to_scan_result'))
        obj.warpsToScanResult = ApiClient.convertToType(data['warps_to_scan_result'], 'Number');
      if (data.hasOwnProperty('warps_wormhole'))
        obj.warpsWormhole = ApiClient.convertToType(data['warps_wormhole'], 'Number');
    }
    return obj;
  }

  /**
   * acceleration_gate_activations integer
   * @member {Number} accelerationGateActivations
   */
  exports.prototype.accelerationGateActivations = undefined;

  /**
   * align_to integer
   * @member {Number} alignTo
   */
  exports.prototype.alignTo = undefined;

  /**
   * distance_warped_high_sec integer
   * @member {Number} distanceWarpedHighSec
   */
  exports.prototype.distanceWarpedHighSec = undefined;

  /**
   * distance_warped_low_sec integer
   * @member {Number} distanceWarpedLowSec
   */
  exports.prototype.distanceWarpedLowSec = undefined;

  /**
   * distance_warped_null_sec integer
   * @member {Number} distanceWarpedNullSec
   */
  exports.prototype.distanceWarpedNullSec = undefined;

  /**
   * distance_warped_wormhole integer
   * @member {Number} distanceWarpedWormhole
   */
  exports.prototype.distanceWarpedWormhole = undefined;

  /**
   * docks_high_sec integer
   * @member {Number} docksHighSec
   */
  exports.prototype.docksHighSec = undefined;

  /**
   * docks_low_sec integer
   * @member {Number} docksLowSec
   */
  exports.prototype.docksLowSec = undefined;

  /**
   * docks_null_sec integer
   * @member {Number} docksNullSec
   */
  exports.prototype.docksNullSec = undefined;

  /**
   * jumps_stargate_high_sec integer
   * @member {Number} jumpsStargateHighSec
   */
  exports.prototype.jumpsStargateHighSec = undefined;

  /**
   * jumps_stargate_low_sec integer
   * @member {Number} jumpsStargateLowSec
   */
  exports.prototype.jumpsStargateLowSec = undefined;

  /**
   * jumps_stargate_null_sec integer
   * @member {Number} jumpsStargateNullSec
   */
  exports.prototype.jumpsStargateNullSec = undefined;

  /**
   * jumps_wormhole integer
   * @member {Number} jumpsWormhole
   */
  exports.prototype.jumpsWormhole = undefined;

  /**
   * warps_high_sec integer
   * @member {Number} warpsHighSec
   */
  exports.prototype.warpsHighSec = undefined;

  /**
   * warps_low_sec integer
   * @member {Number} warpsLowSec
   */
  exports.prototype.warpsLowSec = undefined;

  /**
   * warps_null_sec integer
   * @member {Number} warpsNullSec
   */
  exports.prototype.warpsNullSec = undefined;

  /**
   * warps_to_bookmark integer
   * @member {Number} warpsToBookmark
   */
  exports.prototype.warpsToBookmark = undefined;

  /**
   * warps_to_celestial integer
   * @member {Number} warpsToCelestial
   */
  exports.prototype.warpsToCelestial = undefined;

  /**
   * warps_to_fleet_member integer
   * @member {Number} warpsToFleetMember
   */
  exports.prototype.warpsToFleetMember = undefined;

  /**
   * warps_to_scan_result integer
   * @member {Number} warpsToScanResult
   */
  exports.prototype.warpsToScanResult = undefined;

  /**
   * warps_wormhole integer
   * @member {Number} warpsWormhole
   */
  exports.prototype.warpsWormhole = undefined;

  return exports;

}));
