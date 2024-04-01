export const checkEnvConfig = (...args: Array<string | undefined>): boolean =>
  args.some((arg) => {
    if (!arg || arg === "") {
      throw new Error("Invalid .env config");
    }
  });
