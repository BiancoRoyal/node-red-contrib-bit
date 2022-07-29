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
var nodeUnderTest = require('../src/bit-simple-thirtytwo')

var helper = require('node-red-node-test-helper')
helper.init(require.resolve('node-red'))

describe('Bit Simple Thirty-Two node Testing', function () {
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
    it('bit-simple-thirtytwo should be loaded', function (done) {
      var flow = [
        {
          'id': 'a6c576bc6db10a14',
          'type': 'bit-simple-thirtytwo',
          'name': 'bit-simple-thirtytwo-node',
          'wires': [[]]
        }
      ]

      helper.load(nodeUnderTest, flow, function () {
        const bitNode = helper.getNode('a6c576bc6db10a14')
        bitNode.should.have.property('name', 'bit-simple-thirtytwo-node')
        done()
      })
    })
  })
})
