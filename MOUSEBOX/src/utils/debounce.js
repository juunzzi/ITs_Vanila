export function debounce(callback, delay, setLoading) {
  let timer;

  return (event) => {
    setLoading(event);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(callback, delay, event);
  };
}
