const isNumberRegex = new RegExp(/^\d+$/);
const isTellphoneRegex = new RegExp(/^\(\d{2}\)\s?\d{5}-\d{4}$/);
const isCPFRegex = new RegExp(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/);
const isCNPJRegex = new RegExp(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/);
const isEmailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const isPasswordRegex = new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/);

export function isString(data: string) {
  if (!data || data.length < 2 || typeof (data) !== 'string') {
    return false;
  }
  return true;
}

export function stringIsNumeric(data: string) {
  if (data.length !== 0 || !isNumberRegex.test(data)) {
    return false;
  }
  return true;
}

export function isTellPhone(data: string) {
  if (!isNumberRegex.test(data) || data.length !== 11) {
    return false;
  }
  return true;
}

export function isBrazilTellPhoneFormat(data: string) {
  if (!isTellphoneRegex.test(data)) {
    return false;
  }
  return true;
}

export function isBetween(value: number, min: number, max: number) {
  if (value > min && value < max) {
    return true
  }
  return false;
}

export function isOfGreater(bornDate: string, min: number = 18) {
  const bornDateInMiliseconds = new Date(bornDate).setMilliseconds(0);
  const totalAge = Math.floor((Date.now() - bornDateInMiliseconds) / 31557600000);
  return totalAge >= min;
}

export function isCPF(data: string) {
  return isCPFRegex.test(data);
}

export function isCNPJ(data: string) {
  return isCNPJRegex.test(data);
}

export function isEmail(data: string) {
  return isEmailRegex.test(data);
}

export function isPassword(data: string) {
  if (!isPasswordRegex.test(data) && data.length < 8) {
    return false
  }
  return true;
}
