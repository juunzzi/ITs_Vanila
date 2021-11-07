export function debounce(callback, delay) {
  let timer;

  return (event) => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimeout(callback, delay, event);
  };
}
