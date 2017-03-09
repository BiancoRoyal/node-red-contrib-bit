/**
 Copyright 2016,2017 - Klaus Landsdorf (http://bianco-royal.de/)
 All rights reserved.
 node-red-contrib-bit

 @author <a href="mailto:klaus.landsdorf@bianco-royal.de">Klaus Landsdorf</a> (Bianco Royal)
 **/
/**
 * bit sixteen node.
 * @module BitSixteenContribNode
 *
 * @param RED
 */
module.exports = function (RED) {
  'use strict'
  let internalDebugLog = require('debug')('node_red_contrib_bit')

  function BitSixteenContribNode (config) {
    RED.nodes.createNode(this, config)

    this.name = config.name

    let node = this

    node.on('input', function (msg) {
      if (!(msg && msg.hasOwnProperty('payload'))) return

      internalDebugLog(msg)

      node.send(buildMessage(msg.payload))
    })

    function buildMessage (sixteenBit) {
      return [
        {payload: (sixteenBit & 1) !== 0},
        {payload: (sixteenBit & 2) !== 0},
        {payload: (sixteenBit & 4) !== 0},
        {payload: (sixteenBit & 8) !== 0},
        {payload: (sixteenBit & 16) !== 0},
        {payload: (sixteenBit & 32) !== 0},
        {payload: (sixteenBit & 64) !== 0},
        {payload: (sixteenBit & 128) !== 0},
        {payload: (sixteenBit & 256) !== 0},
        {payload: (sixteenBit & 512) !== 0},
        {payload: (sixteenBit & 1024) !== 0},
        {payload: (sixteenBit & 2048) !== 0},
        {payload: (sixteenBit & 4096) !== 0},
        {payload: (sixteenBit & 8192) !== 0},
        {payload: (sixteenBit & 16384) !== 0},
        {payload: (sixteenBit & 32768) !== 0}
      ]
    }
  }

  RED.nodes.registerType('bit-sixteen', BitSixteenContribNode)
}
