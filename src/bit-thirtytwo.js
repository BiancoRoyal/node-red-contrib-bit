/**
 Copyright (c) 2017-2024 Klaus Landsdorf (http://node-red.plus/)
 All rights reserved.
 node-red-contrib-bit

 @author <a href="mailto:klaus.landsdorf@bianco-royal.de">Klaus Landsdorf</a> (Bianco Royal)
 **/
/**
 * bit thirtytwo node.
 * @module BitThirtytwoContribNode
 *
 * @param RED
 */
module.exports = function (RED) {
  'use strict'
  const internalDebugLog = require('debug')('node_red_contrib_bit')

  function BitThirtytwoContribNode (config) {
    RED.nodes.createNode(this, config)

    this.name = config.name

    const node = this

    node.on('input', function (msg) {
      if (!(msg && Object.prototype.hasOwnProperty.call(msg, 'payload'))) return

      internalDebugLog(msg)

      node.send(buildMessage(msg.payload))
    })

    function buildMessage (thirtytwoBit) {
      return [
        { topic: 'bit1', payload: (thirtytwoBit & 1) !== 0 },
        { topic: 'bit2', payload: (thirtytwoBit & 2) !== 0 },
        { topic: 'bit3', payload: (thirtytwoBit & 4) !== 0 },
        { topic: 'bit4', payload: (thirtytwoBit & 8) !== 0 },
        { topic: 'bit5', payload: (thirtytwoBit & 16) !== 0 },
        { topic: 'bit6', payload: (thirtytwoBit & 32) !== 0 },
        { topic: 'bit7', payload: (thirtytwoBit & 64) !== 0 },
        { topic: 'bit8', payload: (thirtytwoBit & 128) !== 0 },
        { topic: 'bit9', payload: (thirtytwoBit & 256) !== 0 },
        { topic: 'bit10', payload: (thirtytwoBit & 512) !== 0 },
        { topic: 'bit11', payload: (thirtytwoBit & 1024) !== 0 },
        { topic: 'bit12', payload: (thirtytwoBit & 2048) !== 0 },
        { topic: 'bit13', payload: (thirtytwoBit & 4096) !== 0 },
        { topic: 'bit14', payload: (thirtytwoBit & 8192) !== 0 },
        { topic: 'bit15', payload: (thirtytwoBit & 16384) !== 0 },
        { topic: 'bit16', payload: (thirtytwoBit & 32768) !== 0 },
        { topic: 'bit17', payload: (thirtytwoBit & 65536) !== 0 },
        { topic: 'bit18', payload: (thirtytwoBit & 131072) !== 0 },
        { topic: 'bit19', payload: (thirtytwoBit & 262144) !== 0 },
        { topic: 'bit20', payload: (thirtytwoBit & 524288) !== 0 },
        { topic: 'bit21', payload: (thirtytwoBit & 1048576) !== 0 },
        { topic: 'bit22', payload: (thirtytwoBit & 2097152) !== 0 },
        { topic: 'bit23', payload: (thirtytwoBit & 4194304) !== 0 },
        { topic: 'bit24', payload: (thirtytwoBit & 8388608) !== 0 },
        { topic: 'bit25', payload: (thirtytwoBit & 16777216) !== 0 },
        { topic: 'bit26', payload: (thirtytwoBit & 33554432) !== 0 },
        { topic: 'bit27', payload: (thirtytwoBit & 67108864) !== 0 },
        { topic: 'bit28', payload: (thirtytwoBit & 134217728) !== 0 },
        { topic: 'bit29', payload: (thirtytwoBit & 268435456) !== 0 },
        { topic: 'bit30', payload: (thirtytwoBit & 536870912) !== 0 },
        { topic: 'bit31', payload: (thirtytwoBit & 1073741824) !== 0 },
        { topic: 'bit32', payload: (thirtytwoBit & 2147483648) !== 0 }
      ]
    }
  }

  RED.nodes.registerType('bit-thirtytwo', BitThirtytwoContribNode)
}
