import NavBar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md-inset-y-0 z-[80] w-72">
        <SideBar />
      </div>
      <main className="md:pl-72">
        <NavBar />
        {children}
      </main>
    </div>
  );
};

export default DashBoardLayout;
