import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  const localeHeader = (await headers()).get("X-NEXT-INTL-LOCALE");
  return {
    messages: {
      ...(await import(`../../messages/${localeHeader}/common.json`)).default,
      ...(await import(`../../messages/${localeHeader}/homepage.json`)).default,
    },
  };
});
