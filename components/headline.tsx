import Image from "next/image";
import { ReactNode } from 'react';

export type HeadlineProps = {
    page: string;
    number?: number;
    array?: number[];
    obj?: {
      foo: string;
      bar: string;
    };
    boolean?: boolean;
    comp?: ReactNode;
    children?: ReactNode;
};

export default function Headline(props: HeadlineProps) {
    return (
        <>
            <Image
                className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
            />
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li className="mb-2">{props.page}</li>
                <li>{props.children}</li>
            </ol>
        </>
    );
}
