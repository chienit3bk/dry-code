// truncate function for truncate string
export function truncate(value, limit) {
  if (typeof value === 'string') {
    const totalCharacters = value.length;

    if (totalCharacters > limit) {
      const newValue = value.substring(0, limit);

      return `${newValue}...`;
    }
  }

  return value;
}

// debounced function for set time out (example: handle when input change)
export const debounced = (delay, fn) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
};
