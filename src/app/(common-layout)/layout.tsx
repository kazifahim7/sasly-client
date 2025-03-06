import FooterSection from "@/Componant/shareUi/Footer";
import Navbar from "@/Componant/shareUi/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">
        {children}
      </div>
      <FooterSection></FooterSection>
    </div>
  );
}
