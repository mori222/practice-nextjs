import Links from "./links";
import Headline from "./headline";
import { type HeadlineProps } from "./headline";

export default function Main(props: HeadlineProps) {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Headline
          page={props.page}
        >
          <p>childrenを使って表示させています</p>
        </Headline>
        <Links />
      </main>
  );
}
