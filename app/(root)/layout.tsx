import LeftSideBar from "@/components/LeftSidebar/LeftSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Adrian' , lastName: 'JSM'}
  return (
    <main className="flex h-screen w-full font-inter">
        <LeftSideBar user={loggedIn}/>
        {children}
    </main>
  );
}
