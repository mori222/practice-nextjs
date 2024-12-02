import Footer from "../../components/footer";
import Links from "../../components/links";
import Headline from "../../components/headline";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Headline title="This is index page" />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
