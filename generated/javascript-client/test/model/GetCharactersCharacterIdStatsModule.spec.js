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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetCharactersCharacterIdStatsModule', function() {
      beforeEach(function() {
        instance = new EveSwaggerInterface.GetCharactersCharacterIdStatsModule();
      });

      it('should create an instance of GetCharactersCharacterIdStatsModule', function() {
        // TODO: update the code to test GetCharactersCharacterIdStatsModule
        expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdStatsModule);
      });

      it('should have the property activationsArmorHardener (base name: "activations_armor_hardener")', function() {
        // TODO: update the code to test the property activationsArmorHardener
        expect(instance).to.have.property('activationsArmorHardener');
        // expect(instance.activationsArmorHardener).to.be(expectedValueLiteral);
      });

      it('should have the property activationsArmorRepairUnit (base name: "activations_armor_repair_unit")', function() {
        // TODO: update the code to test the property activationsArmorRepairUnit
        expect(instance).to.have.property('activationsArmorRepairUnit');
        // expect(instance.activationsArmorRepairUnit).to.be(expectedValueLiteral);
      });

      it('should have the property activationsArmorResistanceShiftHardener (base name: "activations_armor_resistance_shift_hardener")', function() {
        // TODO: update the code to test the property activationsArmorResistanceShiftHardener
        expect(instance).to.have.property('activationsArmorResistanceShiftHardener');
        // expect(instance.activationsArmorResistanceShiftHardener).to.be(expectedValueLiteral);
      });

      it('should have the property activationsAutomatedTargetingSystem (base name: "activations_automated_targeting_system")', function() {
        // TODO: update the code to test the property activationsAutomatedTargetingSystem
        expect(instance).to.have.property('activationsAutomatedTargetingSystem');
        // expect(instance.activationsAutomatedTargetingSystem).to.be(expectedValueLiteral);
      });

      it('should have the property activationsBastion (base name: "activations_bastion")', function() {
        // TODO: update the code to test the property activationsBastion
        expect(instance).to.have.property('activationsBastion');
        // expect(instance.activationsBastion).to.be(expectedValueLiteral);
      });

      it('should have the property activationsBombLauncher (base name: "activations_bomb_launcher")', function() {
        // TODO: update the code to test the property activationsBombLauncher
        expect(instance).to.have.property('activationsBombLauncher');
        // expect(instance.activationsBombLauncher).to.be(expectedValueLiteral);
      });

      it('should have the property activationsCapacitorBooster (base name: "activations_capacitor_booster")', function() {
        // TODO: update the code to test the property activationsCapacitorBooster
        expect(instance).to.have.property('activationsCapacitorBooster');
        // expect(instance.activationsCapacitorBooster).to.be(expectedValueLiteral);
      });

      it('should have the property activationsCargoScanner (base name: "activations_cargo_scanner")', function() {
        // TODO: update the code to test the property activationsCargoScanner
        expect(instance).to.have.property('activationsCargoScanner');
        // expect(instance.activationsCargoScanner).to.be(expectedValueLiteral);
      });

      it('should have the property activationsCloakingDevice (base name: "activations_cloaking_device")', function() {
        // TODO: update the code to test the property activationsCloakingDevice
        expect(instance).to.have.property('activationsCloakingDevice');
        // expect(instance.activationsCloakingDevice).to.be(expectedValueLiteral);
      });

      it('should have the property activationsCloneVatBay (base name: "activations_clone_vat_bay")', function() {
        // TODO: update the code to test the property activationsCloneVatBay
        expect(instance).to.have.property('activationsCloneVatBay');
        // expect(instance.activationsCloneVatBay).to.be(expectedValueLiteral);
      });

      it('should have the property activationsCynosuralField (base name: "activations_cynosural_field")', function() {
        // TODO: update the code to test the property activationsCynosuralField
        expect(instance).to.have.property('activationsCynosuralField');
        // expect(instance.activationsCynosuralField).to.be(expectedValueLiteral);
      });

      it('should have the property activationsDamageControl (base name: "activations_damage_control")', function() {
        // TODO: update the code to test the property activationsDamageControl
        expect(instance).to.have.property('activationsDamageControl');
        // expect(instance.activationsDamageControl).to.be(expectedValueLiteral);
      });

      it('should have the property activationsDataMiners (base name: "activations_data_miners")', function() {
        // TODO: update the code to test the property activationsDataMiners
        expect(instance).to.have.property('activationsDataMiners');
        // expect(instance.activationsDataMiners).to.be(expectedValueLiteral);
      });

      it('should have the property activationsDroneControlUnit (base name: "activations_drone_control_unit")', function() {
        // TODO: update the code to test the property activationsDroneControlUnit
        expect(instance).to.have.property('activationsDroneControlUnit');
        // expect(instance.activationsDroneControlUnit).to.be(expectedValueLiteral);
      });

      it('should have the property activationsDroneTrackingModules (base name: "activations_drone_tracking_modules")', function() {
        // TODO: update the code to test the property activationsDroneTrackingModules
        expect(instance).to.have.property('activationsDroneTrackingModules');
        // expect(instance.activationsDroneTrackingModules).to.be(expectedValueLiteral);
      });

      it('should have the property activationsEccm (base name: "activations_eccm")', function() {
        // TODO: update the code to test the property activationsEccm
        expect(instance).to.have.property('activationsEccm');
        // expect(instance.activationsEccm).to.be(expectedValueLiteral);
      });

      it('should have the property activationsEcm (base name: "activations_ecm")', function() {
        // TODO: update the code to test the property activationsEcm
        expect(instance).to.have.property('activationsEcm');
        // expect(instance.activationsEcm).to.be(expectedValueLiteral);
      });

      it('should have the property activationsEcmBurst (base name: "activations_ecm_burst")', function() {
        // TODO: update the code to test the property activationsEcmBurst
        expect(instance).to.have.property('activationsEcmBurst');
        // expect(instance.activationsEcmBurst).to.be(expectedValueLiteral);
      });

      it('should have the property activationsEnergyDestabilizer (base name: "activations_energy_destabilizer")', function() {
        // TODO: update the code to test the property activationsEnergyDestabilizer
        expect(instance).to.have.property('activationsEnergyDestabilizer');
        // expect(instance.activationsEnergyDestabilizer).to.be(expectedValueLiteral);
      });

      it('should have the property activationsEnergyVampire (base name: "activations_energy_vampire")', function() {
        // TODO: update the code to test the property activationsEnergyVampire
        expect(instance).to.have.property('activationsEnergyVampire');
        // expect(instance.activationsEnergyVampire).to.be(expectedValueLiteral);
      });

      it('should have the property activationsEnergyWeapon (base name: "activations_energy_weapon")', function() {
        // TODO: update the code to test the property activationsEnergyWeapon
        expect(instance).to.have.property('activationsEnergyWeapon');
        // expect(instance.activationsEnergyWeapon).to.be(expectedValueLiteral);
      });

      it('should have the property activationsFestivalLauncher (base name: "activations_festival_launcher")', function() {
        // TODO: update the code to test the property activationsFestivalLauncher
        expect(instance).to.have.property('activationsFestivalLauncher');
        // expect(instance.activationsFestivalLauncher).to.be(expectedValueLiteral);
      });

      it('should have the property activationsFrequencyMiningLaser (base name: "activations_frequency_mining_laser")', function() {
        // TODO: update the code to test the property activationsFrequencyMiningLaser
        expect(instance).to.have.property('activationsFrequencyMiningLaser');
        // expect(instance.activationsFrequencyMiningLaser).to.be(expectedValueLiteral);
      });

      it('should have the property activationsFueledArmorRepairer (base name: "activations_fueled_armor_repairer")', function() {
        // TODO: update the code to test the property activationsFueledArmorRepairer
        expect(instance).to.have.property('activationsFueledArmorRepairer');
        // expect(instance.activationsFueledArmorRepairer).to.be(expectedValueLiteral);
      });

      it('should have the property activationsFueledShieldBooster (base name: "activations_fueled_shield_booster")', function() {
        // TODO: update the code to test the property activationsFueledShieldBooster
        expect(instance).to.have.property('activationsFueledShieldBooster');
        // expect(instance.activationsFueledShieldBooster).to.be(expectedValueLiteral);
      });

      it('should have the property activationsGangCoordinator (base name: "activations_gang_coordinator")', function() {
        // TODO: update the code to test the property activationsGangCoordinator
        expect(instance).to.have.property('activationsGangCoordinator');
        // expect(instance.activationsGangCoordinator).to.be(expectedValueLiteral);
      });

      it('should have the property activationsGasCloudHarvester (base name: "activations_gas_cloud_harvester")', function() {
        // TODO: update the code to test the property activationsGasCloudHarvester
        expect(instance).to.have.property('activationsGasCloudHarvester');
        // expect(instance.activationsGasCloudHarvester).to.be(expectedValueLiteral);
      });

      it('should have the property activationsHullRepairUnit (base name: "activations_hull_repair_unit")', function() {
        // TODO: update the code to test the property activationsHullRepairUnit
        expect(instance).to.have.property('activationsHullRepairUnit');
        // expect(instance.activationsHullRepairUnit).to.be(expectedValueLiteral);
      });

      it('should have the property activationsHybridWeapon (base name: "activations_hybrid_weapon")', function() {
        // TODO: update the code to test the property activationsHybridWeapon
        expect(instance).to.have.property('activationsHybridWeapon');
        // expect(instance.activationsHybridWeapon).to.be(expectedValueLiteral);
      });

      it('should have the property activationsIndustrialCore (base name: "activations_industrial_core")', function() {
        // TODO: update the code to test the property activationsIndustrialCore
        expect(instance).to.have.property('activationsIndustrialCore');
        // expect(instance.activationsIndustrialCore).to.be(expectedValueLiteral);
      });

      it('should have the property activationsInterdictionSphereLauncher (base name: "activations_interdiction_sphere_launcher")', function() {
        // TODO: update the code to test the property activationsInterdictionSphereLauncher
        expect(instance).to.have.property('activationsInterdictionSphereLauncher');
        // expect(instance.activationsInterdictionSphereLauncher).to.be(expectedValueLiteral);
      });

      it('should have the property activationsMicroJumpDrive (base name: "activations_micro_jump_drive")', function() {
        // TODO: update the code to test the property activationsMicroJumpDrive
        expect(instance).to.have.property('activationsMicroJumpDrive');
        // expect(instance.activationsMicroJumpDrive).to.be(expectedValueLiteral);
      });

      it('should have the property activationsMiningLaser (base name: "activations_mining_laser")', function() {
        // TODO: update the code to test the property activationsMiningLaser
        expect(instance).to.have.property('activationsMiningLaser');
        // expect(instance.activationsMiningLaser).to.be(expectedValueLiteral);
      });

      it('should have the property activationsMissileLauncher (base name: "activations_missile_launcher")', function() {
        // TODO: update the code to test the property activationsMissileLauncher
        expect(instance).to.have.property('activationsMissileLauncher');
        // expect(instance.activationsMissileLauncher).to.be(expectedValueLiteral);
      });

      it('should have the property activationsPassiveTargetingSystem (base name: "activations_passive_targeting_system")', function() {
        // TODO: update the code to test the property activationsPassiveTargetingSystem
        expect(instance).to.have.property('activationsPassiveTargetingSystem');
        // expect(instance.activationsPassiveTargetingSystem).to.be(expectedValueLiteral);
      });

      it('should have the property activationsProbeLauncher (base name: "activations_probe_launcher")', function() {
        // TODO: update the code to test the property activationsProbeLauncher
        expect(instance).to.have.property('activationsProbeLauncher');
        // expect(instance.activationsProbeLauncher).to.be(expectedValueLiteral);
      });

      it('should have the property activationsProjectedEccm (base name: "activations_projected_eccm")', function() {
        // TODO: update the code to test the property activationsProjectedEccm
        expect(instance).to.have.property('activationsProjectedEccm');
        // expect(instance.activationsProjectedEccm).to.be(expectedValueLiteral);
      });

      it('should have the property activationsProjectileWeapon (base name: "activations_projectile_weapon")', function() {
        // TODO: update the code to test the property activationsProjectileWeapon
        expect(instance).to.have.property('activationsProjectileWeapon');
        // expect(instance.activationsProjectileWeapon).to.be(expectedValueLiteral);
      });

      it('should have the property activationsPropulsionModule (base name: "activations_propulsion_module")', function() {
        // TODO: update the code to test the property activationsPropulsionModule
        expect(instance).to.have.property('activationsPropulsionModule');
        // expect(instance.activationsPropulsionModule).to.be(expectedValueLiteral);
      });

      it('should have the property activationsRemoteArmorRepairer (base name: "activations_remote_armor_repairer")', function() {
        // TODO: update the code to test the property activationsRemoteArmorRepairer
        expect(instance).to.have.property('activationsRemoteArmorRepairer');
        // expect(instance.activationsRemoteArmorRepairer).to.be(expectedValueLiteral);
      });

      it('should have the property activationsRemoteCapacitorTransmitter (base name: "activations_remote_capacitor_transmitter")', function() {
        // TODO: update the code to test the property activationsRemoteCapacitorTransmitter
        expect(instance).to.have.property('activationsRemoteCapacitorTransmitter');
        // expect(instance.activationsRemoteCapacitorTransmitter).to.be(expectedValueLiteral);
      });

      it('should have the property activationsRemoteEcmBurst (base name: "activations_remote_ecm_burst")', function() {
        // TODO: update the code to test the property activationsRemoteEcmBurst
        expect(instance).to.have.property('activationsRemoteEcmBurst');
        // expect(instance.activationsRemoteEcmBurst).to.be(expectedValueLiteral);
      });

      it('should have the property activationsRemoteHullRepairer (base name: "activations_remote_hull_repairer")', function() {
        // TODO: update the code to test the property activationsRemoteHullRepairer
        expect(instance).to.have.property('activationsRemoteHullRepairer');
        // expect(instance.activationsRemoteHullRepairer).to.be(expectedValueLiteral);
      });

      it('should have the property activationsRemoteSensorBooster (base name: "activations_remote_sensor_booster")', function() {
        // TODO: update the code to test the property activationsRemoteSensorBooster
        expect(instance).to.have.property('activationsRemoteSensorBooster');
        // expect(instance.activationsRemoteSensorBooster).to.be(expectedValueLiteral);
      });

      it('should have the property activationsRemoteSensorDamper (base name: "activations_remote_sensor_damper")', function() {
        // TODO: update the code to test the property activationsRemoteSensorDamper
        expect(instance).to.have.property('activationsRemoteSensorDamper');
        // expect(instance.activationsRemoteSensorDamper).to.be(expectedValueLiteral);
      });

      it('should have the property activationsRemoteShieldBooster (base name: "activations_remote_shield_booster")', function() {
        // TODO: update the code to test the property activationsRemoteShieldBooster
        expect(instance).to.have.property('activationsRemoteShieldBooster');
        // expect(instance.activationsRemoteShieldBooster).to.be(expectedValueLiteral);
      });

      it('should have the property activationsRemoteTrackingComputer (base name: "activations_remote_tracking_computer")', function() {
        // TODO: update the code to test the property activationsRemoteTrackingComputer
        expect(instance).to.have.property('activationsRemoteTrackingComputer');
        // expect(instance.activationsRemoteTrackingComputer).to.be(expectedValueLiteral);
      });

      it('should have the property activationsSalvager (base name: "activations_salvager")', function() {
        // TODO: update the code to test the property activationsSalvager
        expect(instance).to.have.property('activationsSalvager');
        // expect(instance.activationsSalvager).to.be(expectedValueLiteral);
      });

      it('should have the property activationsSensorBooster (base name: "activations_sensor_booster")', function() {
        // TODO: update the code to test the property activationsSensorBooster
        expect(instance).to.have.property('activationsSensorBooster');
        // expect(instance.activationsSensorBooster).to.be(expectedValueLiteral);
      });

      it('should have the property activationsShieldBooster (base name: "activations_shield_booster")', function() {
        // TODO: update the code to test the property activationsShieldBooster
        expect(instance).to.have.property('activationsShieldBooster');
        // expect(instance.activationsShieldBooster).to.be(expectedValueLiteral);
      });

      it('should have the property activationsShieldHardener (base name: "activations_shield_hardener")', function() {
        // TODO: update the code to test the property activationsShieldHardener
        expect(instance).to.have.property('activationsShieldHardener');
        // expect(instance.activationsShieldHardener).to.be(expectedValueLiteral);
      });

      it('should have the property activationsShipScanner (base name: "activations_ship_scanner")', function() {
        // TODO: update the code to test the property activationsShipScanner
        expect(instance).to.have.property('activationsShipScanner');
        // expect(instance.activationsShipScanner).to.be(expectedValueLiteral);
      });

      it('should have the property activationsSiege (base name: "activations_siege")', function() {
        // TODO: update the code to test the property activationsSiege
        expect(instance).to.have.property('activationsSiege');
        // expect(instance.activationsSiege).to.be(expectedValueLiteral);
      });

      it('should have the property activationsSmartBomb (base name: "activations_smart_bomb")', function() {
        // TODO: update the code to test the property activationsSmartBomb
        expect(instance).to.have.property('activationsSmartBomb');
        // expect(instance.activationsSmartBomb).to.be(expectedValueLiteral);
      });

      it('should have the property activationsStasisWeb (base name: "activations_stasis_web")', function() {
        // TODO: update the code to test the property activationsStasisWeb
        expect(instance).to.have.property('activationsStasisWeb');
        // expect(instance.activationsStasisWeb).to.be(expectedValueLiteral);
      });

      it('should have the property activationsStripMiner (base name: "activations_strip_miner")', function() {
        // TODO: update the code to test the property activationsStripMiner
        expect(instance).to.have.property('activationsStripMiner');
        // expect(instance.activationsStripMiner).to.be(expectedValueLiteral);
      });

      it('should have the property activationsSuperWeapon (base name: "activations_super_weapon")', function() {
        // TODO: update the code to test the property activationsSuperWeapon
        expect(instance).to.have.property('activationsSuperWeapon');
        // expect(instance.activationsSuperWeapon).to.be(expectedValueLiteral);
      });

      it('should have the property activationsSurveyScanner (base name: "activations_survey_scanner")', function() {
        // TODO: update the code to test the property activationsSurveyScanner
        expect(instance).to.have.property('activationsSurveyScanner');
        // expect(instance.activationsSurveyScanner).to.be(expectedValueLiteral);
      });

      it('should have the property activationsTargetBreaker (base name: "activations_target_breaker")', function() {
        // TODO: update the code to test the property activationsTargetBreaker
        expect(instance).to.have.property('activationsTargetBreaker');
        // expect(instance.activationsTargetBreaker).to.be(expectedValueLiteral);
      });

      it('should have the property activationsTargetPainter (base name: "activations_target_painter")', function() {
        // TODO: update the code to test the property activationsTargetPainter
        expect(instance).to.have.property('activationsTargetPainter');
        // expect(instance.activationsTargetPainter).to.be(expectedValueLiteral);
      });

      it('should have the property activationsTrackingComputer (base name: "activations_tracking_computer")', function() {
        // TODO: update the code to test the property activationsTrackingComputer
        expect(instance).to.have.property('activationsTrackingComputer');
        // expect(instance.activationsTrackingComputer).to.be(expectedValueLiteral);
      });

      it('should have the property activationsTrackingDisruptor (base name: "activations_tracking_disruptor")', function() {
        // TODO: update the code to test the property activationsTrackingDisruptor
        expect(instance).to.have.property('activationsTrackingDisruptor');
        // expect(instance.activationsTrackingDisruptor).to.be(expectedValueLiteral);
      });

      it('should have the property activationsTractorBeam (base name: "activations_tractor_beam")', function() {
        // TODO: update the code to test the property activationsTractorBeam
        expect(instance).to.have.property('activationsTractorBeam');
        // expect(instance.activationsTractorBeam).to.be(expectedValueLiteral);
      });

      it('should have the property activationsTriage (base name: "activations_triage")', function() {
        // TODO: update the code to test the property activationsTriage
        expect(instance).to.have.property('activationsTriage');
        // expect(instance.activationsTriage).to.be(expectedValueLiteral);
      });

      it('should have the property activationsWarpDisruptFieldGenerator (base name: "activations_warp_disrupt_field_generator")', function() {
        // TODO: update the code to test the property activationsWarpDisruptFieldGenerator
        expect(instance).to.have.property('activationsWarpDisruptFieldGenerator');
        // expect(instance.activationsWarpDisruptFieldGenerator).to.be(expectedValueLiteral);
      });

      it('should have the property activationsWarpScrambler (base name: "activations_warp_scrambler")', function() {
        // TODO: update the code to test the property activationsWarpScrambler
        expect(instance).to.have.property('activationsWarpScrambler');
        // expect(instance.activationsWarpScrambler).to.be(expectedValueLiteral);
      });

      it('should have the property linkWeapons (base name: "link_weapons")', function() {
        // TODO: update the code to test the property linkWeapons
        expect(instance).to.have.property('linkWeapons');
        // expect(instance.linkWeapons).to.be(expectedValueLiteral);
      });

      it('should have the property overload (base name: "overload")', function() {
        // TODO: update the code to test the property overload
        expect(instance).to.have.property('overload');
        // expect(instance.overload).to.be(expectedValueLiteral);
      });

      it('should have the property repairs (base name: "repairs")', function() {
        // TODO: update the code to test the property repairs
        expect(instance).to.have.property('repairs');
        // expect(instance.repairs).to.be(expectedValueLiteral);
      });

    });
  });

}));
