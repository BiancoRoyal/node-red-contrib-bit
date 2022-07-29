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
var nodeUnderTest = require('../src/bit-simple-sixteen')

var helper = require('node-red-node-test-helper')
helper.init(require.resolve('node-red'))

describe('Bit Simple Sixteen node Testing', function () {
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
    it('bit-simple-sixteen should be loaded', function (done) {
      var flow = [
        {
          'id': '77504c95aa1ccbf3',
          'type': 'bit-simple-sixteen',
          'name': 'bit-simple-sixteen-node',
          'wires': [[]]
        }
      ]

      helper.load(nodeUnderTest, flow, function () {
        const bitNode = helper.getNode('77504c95aa1ccbf3')
        bitNode.should.have.property('name', 'bit-simple-sixteen-node')
        done()
      })
    })
  })
})
