"use strict";

module.exports = function(payload) {
    if (!payload) { return '' }

    return payload
        .replace(/[sç]/g, 'f')
        .replace(/[SÇ]/g, 'F')
        .replace(/z/g,'ff')
        .replace(/Z/g,'FF')
}
