import Footer from "../../components/footer";
import Main from "../../components/main";
import Header from "../../components/header";
export default function Home() {
  return (
    <div className="grid grid-rows-[100px_1fr_100px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Main page="about"/>
      <Footer />
    </div>
  );  
}
