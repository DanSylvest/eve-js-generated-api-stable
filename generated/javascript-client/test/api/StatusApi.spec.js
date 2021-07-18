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

  beforeEach(function() {
    instance = new EveSwaggerInterface.StatusApi();
  });

  describe('(package)', function() {
    describe('StatusApi', function() {
      describe('getStatus', function() {
        it('should call getStatus successfully', function(done) {
          // TODO: uncomment, update parameter values for getStatus call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.ifNoneMatch = "ifNoneMatch_example";

          instance.getStatus(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveSwaggerInterface.GetStatusOk);
            expect(data.players).to.be.a('number');
            expect(data.players).to.be(0);
            expect(data.serverVersion).to.be.a('string');
            expect(data.serverVersion).to.be("");
            expect(data.startTime).to.be.a(Date);
            expect(data.startTime).to.be(new Date());
            expect(data.vip).to.be.a('boolean');
            expect(data.vip).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
