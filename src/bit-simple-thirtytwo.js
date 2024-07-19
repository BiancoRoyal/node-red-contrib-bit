/**
 Copyright (c) 2017-2024 Klaus Landsdorf (http://node-red.plus/)
 All rights reserved.
 node-red-contrib-bit

 @author <a href="mailto:klaus.landsdorf@bianco-royal.de">Klaus Landsdorf</a> (Bianco Royal)
 **/
/**
 * Simple thirtytwo node.
 * @module BitSimpleThirtytwoContribNode
 *
 * @param RED
 */
module.exports = function (RED) {
  'use strict'
  const internalDebugLog = require('debug')('node_red_contrib_bit')

  function BitSimpleThirtytwoContribNode (config) {
    RED.nodes.createNode(this, config)

    this.name = config.name

    const node = this

    node.on('input', function (msg) {
      if (!(msg && Object.prototype.hasOwnProperty.call(msg, 'payload'))) return

      internalDebugLog(msg)

      node.send(buildMessage(msg.payload))
    })

    function buildMessage (thirtytwoBit) {
      return {
        topic: 'bits',
        payload: [
          (thirtytwoBit & 1) !== 0,
          (thirtytwoBit & 2) !== 0,
          (thirtytwoBit & 4) !== 0,
          (thirtytwoBit & 8) !== 0,
          (thirtytwoBit & 16) !== 0,
          (thirtytwoBit & 32) !== 0,
          (thirtytwoBit & 64) !== 0,
          (thirtytwoBit & 128) !== 0,
          (thirtytwoBit & 256) !== 0,
          (thirtytwoBit & 512) !== 0,
          (thirtytwoBit & 1024) !== 0,
          (thirtytwoBit & 2048) !== 0,
          (thirtytwoBit & 4096) !== 0,
          (thirtytwoBit & 8192) !== 0,
          (thirtytwoBit & 16384) !== 0,
          (thirtytwoBit & 32768) !== 0,
          (thirtytwoBit & 65536) !== 0,
          (thirtytwoBit & 131072) !== 0,
          (thirtytwoBit & 262144) !== 0,
          (thirtytwoBit & 524288) !== 0,
          (thirtytwoBit & 1048576) !== 0,
          (thirtytwoBit & 2097152) !== 0,
          (thirtytwoBit & 4194304) !== 0,
          (thirtytwoBit & 8388608) !== 0,
          (thirtytwoBit & 16777216) !== 0,
          (thirtytwoBit & 33554432) !== 0,
          (thirtytwoBit & 67108864) !== 0,
          (thirtytwoBit & 134217728) !== 0,
          (thirtytwoBit & 268435456) !== 0,
          (thirtytwoBit & 536870912) !== 0,
          (thirtytwoBit & 1073741824) !== 0,
          (thirtytwoBit & 2147483648) !== 0]
      }
    }
  }

  RED.nodes.registerType('bit-simple-thirtytwo', BitSimpleThirtytwoContribNode)
}
