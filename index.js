"use strict";

module.exports = function(payload) {
    if (!payload) { return '' }

    return payload
        .replace(/s/g, 'f')
        .replace(/S/g, 'F')
        .replace(/z/g,'ff')
        .replace(/Z/g,'FF')
}
