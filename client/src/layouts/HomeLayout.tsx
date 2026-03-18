import { Navbar } from "../components/Navbar";
import { Sidebar } from "../features/home/components/Sidebar";
import { ContentToolbar } from "../features/home/components/ContentToolbar";

interface HomeLayoutProps {
  children?: React.ReactNode;
}
export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display">
      <Navbar />
      <main className="max-w-360 mx-auto flex px-4 gap-8 py-8 justify-center">
        {/* Sidebar - Hidden on mobile */}
        <aside className="w-1/5 shrink-0 hidden md:block">
          <Sidebar />
        </aside>

        {/* Main Content Area */}
        <section className="flex-1 max-w-3xl space-y-4">
          <ContentToolbar />

          {children}
        </section>

        {/* Right Spacer for XL screens to keep feed centered */}
        {/* <aside className="w-64 shrink-0 hidden xl:block"></aside> */}
      </main>
    </div>
  );
};
