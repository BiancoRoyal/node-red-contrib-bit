/**
 Copyright 2016,2017 - Klaus Landsdorf (http://bianco-royal.de/)
 All rights reserved.
 node-red-contrib-bit

 @author <a href="mailto:klaus.landsdorf@bianco-royal.de">Klaus Landsdorf</a> (Bianco Royal)
 **/
/**
 * Simple sixteen node.
 * @module BitSimpleSixteenContribNode
 *
 * @param RED
 */
module.exports = function (RED) {
  'use strict'
  let internalDebugLog = require('debug')('node_red_contrib_bit')

  function BitSimpleSixteenContribNode (config) {
    RED.nodes.createNode(this, config)

    this.name = config.name

    let node = this

    node.on('input', function (msg) {
      if (!(msg && msg.hasOwnProperty('payload'))) return

      internalDebugLog(msg)

      node.send(buildMessage(msg.payload))
    })

    function buildMessage (sixteenBit) {
      return {
        payload: [(sixteenBit & 1) !== 0,
          (sixteenBit & 2) !== 0,
          (sixteenBit & 4) !== 0,
          (sixteenBit & 8) !== 0,
          (sixteenBit & 16) !== 0,
          (sixteenBit & 32) !== 0,
          (sixteenBit & 64) !== 0,
          (sixteenBit & 128) !== 0,
          (sixteenBit & 256) !== 0,
          (sixteenBit & 512) !== 0,
          (sixteenBit & 1024) !== 0,
          (sixteenBit & 2048) !== 0,
          (sixteenBit & 4096) !== 0,
          (sixteenBit & 8192) !== 0,
          (sixteenBit & 16384) !== 0,
          (sixteenBit & 32768) !== 0
        ]
      }
    }
  }

  RED.nodes.registerType('bit-simple-sixteen', BitSimpleSixteenContribNode)
}
