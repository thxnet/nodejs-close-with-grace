'use strict'

const closeWithGrace = require('..')
const assert = require('node:assert')

assert.strictEqual(closeWithGrace.closing, false)
const { close } = closeWithGrace(async function ({ manual }) {
  assert.strictEqual(closeWithGrace.closing, true)
})

setTimeout(close, 500)
