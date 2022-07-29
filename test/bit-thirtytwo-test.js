/**
 * Original Work Copyright 2014 IBM Corp.
 * node-red
 *
 * Copyright (c) 2022 Klaus Landsdorf (http://node-red.plus/)
 * All rights reserved.
 * node-red-contrib-bit - The BSD 3-Clause License
 *
 **/

'use strict'

var injectNode = require('@node-red/nodes/core/common/20-inject.js')
var nodeUnderTest = require('../src/bit-thirtytwo')

var helper = require('node-red-node-test-helper')
helper.init(require.resolve('node-red'))

describe('Bit Thirty-Two node Testing', function () {
  beforeEach(function (done) {
    helper.startServer(function () {
      done()
    })
  })

  afterEach(function (done) {
    helper.unload().then(function () {
      helper.stopServer(function () {
        done()
      })
    }).catch(function () {
      helper.stopServer(function () {
        done()
      })
    })
  })

  describe('Node', function () {
    it('bit-thirtytwo should be loaded', function (done) {
      var flow = [
        {
          'id': 'ad3cb3485fa2ecdb',
          'type': 'bit-thirtytwo',
          'name': 'bit-thirtytwo-node',
          'wires': [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
          ]
        }
      ]

      helper.load(nodeUnderTest, flow, function () {
        const bitNode = helper.getNode('ad3cb3485fa2ecdb')
        bitNode.should.have.property('name', 'bit-thirtytwo-node')
        done()
      })
    })
  })
})
