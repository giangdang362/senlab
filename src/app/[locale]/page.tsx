import type { Metadata } from "next";
import HomePage from "../ui/homepage";

export default function IndexPage() {
  return <HomePage />;
}

export const metadata: Metadata = {
  title: "Home page",
};
