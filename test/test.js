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

test('Test uppercase', (t) => {
    t.plan(3)

    t.equal(jovanotti('Sei'), 'Fei')
    t.equal(jovanotti('Sei6'), 'Fei6')
    t.equal(jovanotti('Zuzzurellone'), 'FFuffffurellone')
})

test('Test Zs', (t) => {
    t.plan(1)

    t.equal(jovanotti('federazione'), 'federaffione')
})
