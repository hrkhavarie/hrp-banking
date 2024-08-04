import HeaderBox from "@/components/HeaderBox/HeaderBox";
import TotalBalance from "@/components/TotalBalance/TotalBalance";
import Image from "next/image";

export default function Home() {
  const LoggedIn = {firstname : 'Hamid'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn?.firstname || 'geust'}
            subtitle="Access and manage your account."
          />
          <TotalBalance 
            accounts = {[]} 
            totalBanks={1}
            totalCurrentBalance= {1500.56}
          />

        </header>
      </div>
    </section>
  );
}
