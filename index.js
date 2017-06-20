"use strict";

module.exports = function(payload) {
    if (!payload) { return '' }

    return payload
        .replace(/s/g, 'f')
        .replace(/z/g,'ff')
}
