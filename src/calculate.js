import operate from './operate';
import isNumber from './isNumber'

function calculate(obj, value) {
  if (value === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(value)) {
    if (value === '0' && obj.next === '0') {
      return {};
    }
    if (obj.operation) {
      return { next: value };
    }
    if (obj.next) {
      return {
        next: obj.next + value,
        total: null,
      };
    }
    return {
      next: value,
      total: null,
    };
  }
  if (value === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {};
      }
      return { next: obj.next + '.' };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {
          total: obj.total
        };
      }
      return { total: obj.total + '.' };
    }
    return { total: '0.' };
  }

  if (value === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (value === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: value,
    };
  }
  if (!obj.next) {
    return { operation: value };
  }

  return {
    total: obj.next,
    next: null,
    operation: value,
  };
}
export default calculate;
