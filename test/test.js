"use strict";

const jovanotti = require('../index.js')
const test = require('tape')

test('Test nasty inputs', (t) => {
    t.plan(2)

    t.equal(jovanotti(), '')
    t.equal(jovanotti(''), '')
})

test('Regular input', (t) => {
    t.plan(2)

    t.equal(jovanotti('sei'), 'fei')
    t.equal(jovanotti('sei6'), 'fei6')
})

test('test Zs', (t) => {
    t.plan(1)

    t.equal(jovanotti('federazione'), 'federaffione')
})
