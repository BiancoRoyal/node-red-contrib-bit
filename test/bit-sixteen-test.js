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
var nodeUnderTest = require('../src/bit-sixteen')

var helper = require('node-red-node-test-helper')
helper.init(require.resolve('node-red'))

describe('Bit Sixteen node Testing', function () {
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
    it('bit-sixteen should be loaded', function (done) {
      var flow = [
        {
          'id': '29726390b8387760',
          'type': 'bit-sixteen',
          'name': 'bit-sixteen-node',
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
            []
          ]
        }
      ]

      helper.load(nodeUnderTest, flow, function () {
        const bitNode = helper.getNode('29726390b8387760')
        bitNode.should.have.property('name', 'bit-sixteen-node')
        done()
      })
    })
  })
})
