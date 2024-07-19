/**
 Copyright (c) 2017-2024 Klaus Landsdorf (http://node-red.plus/)
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
  const internalDebugLog = require('debug')('node_red_contrib_bit')

  function BitSixteenContribNode (config) {
    RED.nodes.createNode(this, config)

    this.name = config.name

    const node = this

    node.on('input', function (msg) {
      if (!(msg && Object.prototype.hasOwnProperty.call(msg, 'payload'))) return

      internalDebugLog(msg)

      node.send(buildMessage(msg.payload))
    })

    function buildMessage (sixteenBit) {
      return [
        { topic: 'bit1', payload: (sixteenBit & 1) !== 0 },
        { topic: 'bit2', payload: (sixteenBit & 2) !== 0 },
        { topic: 'bit3', payload: (sixteenBit & 4) !== 0 },
        { topic: 'bit4', payload: (sixteenBit & 8) !== 0 },
        { topic: 'bit5', payload: (sixteenBit & 16) !== 0 },
        { topic: 'bit6', payload: (sixteenBit & 32) !== 0 },
        { topic: 'bit7', payload: (sixteenBit & 64) !== 0 },
        { topic: 'bit8', payload: (sixteenBit & 128) !== 0 },
        { topic: 'bit9', payload: (sixteenBit & 256) !== 0 },
        { topic: 'bit10', payload: (sixteenBit & 512) !== 0 },
        { topic: 'bit11', payload: (sixteenBit & 1024) !== 0 },
        { topic: 'bit12', payload: (sixteenBit & 2048) !== 0 },
        { topic: 'bit13', payload: (sixteenBit & 4096) !== 0 },
        { topic: 'bit14', payload: (sixteenBit & 8192) !== 0 },
        { topic: 'bit15', payload: (sixteenBit & 16384) !== 0 },
        { topic: 'bit16', payload: (sixteenBit & 32768) !== 0 }
      ]
    }
  }

  RED.nodes.registerType('bit-sixteen', BitSixteenContribNode)
}
