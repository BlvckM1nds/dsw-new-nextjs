import { Fragment, ReactNode } from "react";
import Footer from "./Footer";
import Navigations from "./Navigations";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Navigations />
      {children}
      <Footer />
    </Fragment>
  );
};