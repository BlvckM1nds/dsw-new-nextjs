import { Fragment, ReactNode } from "react";
import Navigations from "./Navigations";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Navigations />
      {children}
      <Footer />
    </Fragment>
  );
};