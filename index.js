"use strict";

module.exports = function(payload) {
    if (!payload) { return '' }

    return payload
        .split('')
        .map((x) => {
            if (x == 's') return 'f'
            if (x == 'z') return 'ff'
            return x
        })
        .join('')
}
