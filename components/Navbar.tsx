import { UserButton } from "@clerk/nextjs";
import MainNav from "@/components/MainNav";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <div>This will be a store switcher</div>
        <MainNav className="mx-6" />
        <div className="ml-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
