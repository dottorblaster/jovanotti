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

test('Test long phrase', (t) => {
    t.plan(2)

    t.equal(jovanotti('io lo so che non sono solo anche quando sono solo'), 'io lo fo che non fono folo anche quando fono folo')
    t.equal(jovanotti('Mi dispererebbe se non ti trovassi a Sassari passando per Sassuolo'), 'Mi difpererebbe fe non ti trovaffi a Faffari paffando per Faffuolo')
})

test('Test German', (t) => {
    t.plan(1)

    t.equal(
        jovanotti('In German orthography, the grapheme ß, called Eszett or scharfes S, in English "sharp S", represents the [s] phoneme in Standard German'), 
        'In German orthography, the grapheme ff, called Efffett or fcharfef F, in Englifh "fharp F", reprefentf the [f] phoneme in Ftandard German'
    )
})

test('French phrase', (t) => {
    t.plan(1)

    t.equal(jovanotti('Salut! Ça va?'), 'Falut! Fa va?')
})
