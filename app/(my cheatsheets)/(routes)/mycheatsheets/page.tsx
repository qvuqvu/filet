import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboadPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* <Button variant="destructive" size="default">
        Hi
      </Button>
      <UserButton afterSignOutUrl="/" /> */}
    </div>
  );
};

export default DashboadPage;
