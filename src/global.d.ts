/* eslint-disable @typescript-eslint/no-empty-object-type */
import common from "../messages/en/common.json";
import homepage from "../messages/en/homepage.json";

// declare more lang here
type Messages = typeof common & typeof homepage;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
