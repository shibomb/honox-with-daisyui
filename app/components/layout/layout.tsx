import Header from "./header";
import Footer from "./footer";
import FooterNav from "./footer-nav";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterNav />
      <Footer />
    </>
  );
}
