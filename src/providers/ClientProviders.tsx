/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { NextIntlClientProvider, useTranslations } from "next-intl";
import { ComponentProps } from "react";

const defaultTRef = (key: string) => key;
defaultTRef.rich = (key: string) => key;
defaultTRef.markup = (key: string) => key;
defaultTRef.raw = (key: string) => key;

// eslint-disable-next-line no-unused-vars
defaultTRef.has = (key: string) => false;

export const tRef: { current: ReturnType<typeof useTranslations<never>> } = {
  current: defaultTRef,
};

const TranslationRefProvider = () => {
  const t = useTranslations();
  tRef.current = t;

  return null;
};

export default function ClientProviders(
  props: ComponentProps<typeof NextIntlClientProvider>,
) {
  return (
    <NextIntlClientProvider
      defaultTranslationValues={{
        b: (chunks) => <b>{chunks}</b>,
        u: (chunks) => <u>{chunks}</u>,
      }}
      {...props}
    >
      {props.children}
      <TranslationRefProvider />
    </NextIntlClientProvider>
  );
}
