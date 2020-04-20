/**
 Copyright 2016,2017 - Klaus Landsdorf (http://bianco-royal.de/)
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
      if (!(msg && {}.hasOwnProperty.call(msg, 'payload'))) return

      internalDebugLog(msg)

      node.send(buildMessage(msg.payload))
    })

    function buildMessage (thirtytwoBit) {
      return [
        { payload: (thirtytwoBit & 1) !== 0 },
        { payload: (thirtytwoBit & 2) !== 0 },
        { payload: (thirtytwoBit & 4) !== 0 },
        { payload: (thirtytwoBit & 8) !== 0 },
        { payload: (thirtytwoBit & 16) !== 0 },
        { payload: (thirtytwoBit & 32) !== 0 },
        { payload: (thirtytwoBit & 64) !== 0 },
        { payload: (thirtytwoBit & 128) !== 0 },
        { payload: (thirtytwoBit & 256) !== 0 },
        { payload: (thirtytwoBit & 512) !== 0 },
        { payload: (thirtytwoBit & 1024) !== 0 },
        { payload: (thirtytwoBit & 2048) !== 0 },
        { payload: (thirtytwoBit & 4096) !== 0 },
        { payload: (thirtytwoBit & 8192) !== 0 },
        { payload: (thirtytwoBit & 16384) !== 0 },
        { payload: (thirtytwoBit & 32768) !== 0 },
        { payload: (thirtytwoBit & 65536) !== 0 },
        { payload: (thirtytwoBit & 131072) !== 0 },
        { payload: (thirtytwoBit & 262144) !== 0 },
        { payload: (thirtytwoBit & 524288) !== 0 },
        { payload: (thirtytwoBit & 1048576) !== 0 },
        { payload: (thirtytwoBit & 2097152) !== 0 },
        { payload: (thirtytwoBit & 4194304) !== 0 },
        { payload: (thirtytwoBit & 8388608) !== 0 },
        { payload: (thirtytwoBit & 16777216) !== 0 },
        { payload: (thirtytwoBit & 33554432) !== 0 },
        { payload: (thirtytwoBit & 67108864) !== 0 },
        { payload: (thirtytwoBit & 134217728) !== 0 },
        { payload: (thirtytwoBit & 268435456) !== 0 },
        { payload: (thirtytwoBit & 536870912) !== 0 },
        { payload: (thirtytwoBit & 1073741824) !== 0 },
        { payload: (thirtytwoBit & 2147483648) !== 0 }
      ]
    }
  }

  RED.nodes.registerType('bit-thirtytwo', BitThirtytwoContribNode)
}
