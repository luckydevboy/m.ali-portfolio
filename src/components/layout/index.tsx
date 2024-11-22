import { ReactNode } from "react";
import Header from "./header";
import SideMenu from "./side-menu";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header className="lg:hidden" />
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <SideMenu className="hidden lg:block col-span-1" />
        <section className="col-span-3">{children}</section>
      </div>
    </>
  );
};

export default Layout;
