async function simDelay() {
  return await new Promise((resolve) => setTimeout(resolve, 3000));
}

export default simDelay;
