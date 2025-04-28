
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageTransition>
        <main className="flex-grow pt-24">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Layout;
