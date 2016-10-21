// Modifications Copyright 2017 Nike, Inc. (https://www.nike.com)
// Copyright 2013 LinkedIn Corp.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

require('should');
var cache = require('../lib/sepia/src/cache');
var sinon = require('sinon');
var fs = require('fs');

describe('cache.js', function() {

  describe('#writeRequestFile', function() {

    before(function() {
      sinon.stub(fs, 'writeFileSync');
    });

    var requestData = {
      data: 'data'
    };

    it('should write the request to the file', function() {
      cache.internal.writeRequestFile(requestData, 'myrequest');
      fs.writeFileSync.called.should.equal(true);
      fs.writeFileSync.calledWith('myrequest.request',
        JSON.stringify(requestData, null, 2)).should.equal(true);
    });

    after(function() {
      fs.writeFileSync.restore();
    });

  });
});
