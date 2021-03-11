export const isObject = obj = !!obj && typeof obj === 'object' && !Array.isArray(obj);

export const clone = obj => JSON.parse(JSON.stringify(obj));

export const isEqual = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);