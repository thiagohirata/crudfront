"use strict";
exports.__esModule = true;
exports.maskValue = exports.unmaskValue = void 0;
function unmaskValue(value, mask) {
    if (!value || !mask) {
        return value;
    }
    return value.replace(/\W/g, '');
}
exports.unmaskValue = unmaskValue;
function maskValue(value, mask, inputSelection) {
    if (!value || !mask) {
        return value;
    }
    var clear = unmaskValue(value, mask);
    var _selectionAddedValue = 0;
    for (var i = 0; i < clear.length; i++) {
        if (mask.length <= i) {
            clear = clear.substring(0, i);
            break;
        }
        else if (mask[i] === '9') {
            var c = clear[i];
            if (!(c >= '0' && c <= '9')) {
                clear = [clear.slice(0, i), clear.slice(i + 1)].join('');
                i--;
                continue;
            }
        }
        else if (mask[i] === 'A') {
            var c = clear[i];
            if (c >= 'a' && c <= 'z') {
                clear = [clear.slice(0, i), c.toUpperCase(), clear.slice(i + 1)].join('');
                continue;
            }
            else if (!(c >= 'A' && c <= 'Z')) {
                clear = [clear.slice(0, i), clear.slice(i + 1)].join('');
                i--;
                continue;
            }
        }
        else if (mask[i] === '_') {
        }
        else {
            clear = [clear.slice(0, i), mask[i], clear.slice(i)].join('');
            if (inputSelection && inputSelection[0] + _selectionAddedValue === i + 1) {
                _selectionAddedValue++;
            }
        }
    }
    if (inputSelection && _selectionAddedValue) {
        inputSelection[0] = inputSelection[0] + _selectionAddedValue;
        inputSelection[1] = inputSelection[1] + _selectionAddedValue;
    }
    return clear;
}
exports.maskValue = maskValue;
