import LeftSideBar from "@/components/LeftSidebar/LeftSideBar";
import MobileNav from "@/components/MobileNav/MobileNav";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Adrian' , lastName: 'JSM'}
  return (
    <main className="flex h-screen w-full font-inter">
        <LeftSideBar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
              <Image 
                src="/assets/icons/logo.svg"  
                width={30} 
                height={30}
                alt="logo"
                />
                <div>
                  <MobileNav user = {loggedIn}/>
              </div>
          </div>
            {children}
        </div>
    </main>
  );
}
