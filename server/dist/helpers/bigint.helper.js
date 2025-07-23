"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBigIntToString = convertBigIntToString;
function convertBigIntToString(obj) {
    if (Array.isArray(obj)) {
        return obj.map(convertBigIntToString);
    }
    else if (obj && typeof obj === 'object') {
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => [
            key,
            typeof value === 'bigint' ? value.toString() : convertBigIntToString(value),
        ]));
    }
    return obj;
}
