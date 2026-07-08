import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
