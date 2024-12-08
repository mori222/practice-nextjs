import Links from "./links";
import Headline from "./headline";
import { type HeadlineProps } from "./headline";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    text: "Deploy now",
    image: "/vercel.svg",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    text: "Read our docs",
    image: "/vercel.svg",
  },
]

export default function Main(props: HeadlineProps) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = () => {
    setItems(prevItems => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  };

  return (
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Headline
          page={props.page}
        >
          <p className="inline">childrenを使って表示させています</p>
        </Headline>
        <Links items={items} handleReduce={handleReduce}/>
      </main>
  );
}
