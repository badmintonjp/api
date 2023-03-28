import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className=" bg-slate-100">
        <div className="container mx-auto min-h-[50vmin]">{children}</div>
      </main>
      <Footer />
    </>
  );
}
