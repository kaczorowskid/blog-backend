export const checkEnvConfig = (...args: Array<string | undefined>): void => {
  args.some((arg) => {
    if (!arg || arg === "") {
      throw new Error("Invalid .env config");
    }
  });
};
