"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPassword = exports.isEmail = exports.isCNPJ = exports.isCPF = exports.isOfGreater = exports.isBetween = exports.isBrazilTellPhoneFormat = exports.isTellPhone = exports.stringIsNumeric = exports.isString = void 0;
const isNumberRegex = new RegExp(/^\d+$/);
const isTellphoneRegex = new RegExp(/^\(\d{2}\)\s?\d{5}-\d{4}$/);
const isCPFRegex = new RegExp(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/);
const isCNPJRegex = new RegExp(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/);
const isEmailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const isPasswordRegex = new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/);
function isString(data) {
    if (!data || data.length < 2 || typeof (data) !== 'string') {
        return false;
    }
    return true;
}
exports.isString = isString;
function stringIsNumeric(data) {
    if (data.length !== 0 || !isNumberRegex.test(data)) {
        return false;
    }
    return true;
}
exports.stringIsNumeric = stringIsNumeric;
function isTellPhone(data) {
    if (!isNumberRegex.test(data) || data.length !== 11) {
        return false;
    }
    return true;
}
exports.isTellPhone = isTellPhone;
function isBrazilTellPhoneFormat(data) {
    if (!isTellphoneRegex.test(data)) {
        return false;
    }
    return true;
}
exports.isBrazilTellPhoneFormat = isBrazilTellPhoneFormat;
function isBetween(value, min, max) {
    if (value > min && value < max) {
        return true;
    }
    return false;
}
exports.isBetween = isBetween;
function isOfGreater(bornDate, min = 18) {
    const bornDateInMiliseconds = new Date(bornDate).setMilliseconds(0);
    const totalAge = Math.floor((Date.now() - bornDateInMiliseconds) / 31557600000);
    return totalAge >= min;
}
exports.isOfGreater = isOfGreater;
function isCPF(data) {
    return isCPFRegex.test(data);
}
exports.isCPF = isCPF;
function isCNPJ(data) {
    return isCNPJRegex.test(data);
}
exports.isCNPJ = isCNPJ;
function isEmail(data) {
    return isEmailRegex.test(data);
}
exports.isEmail = isEmail;
function isPassword(data) {
    if (!isPasswordRegex.test(data) && data.length < 8) {
        return false;
    }
    return true;
}
exports.isPassword = isPassword;
//# sourceMappingURL=index.js.map