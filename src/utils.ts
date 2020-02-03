export const runCallbackIfExists = (callback?: () => void) => {
  if (callback) {
    callback();
  }
};
