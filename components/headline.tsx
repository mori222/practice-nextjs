import Image from "next/image";

export default function Headline(props: {title: string, description?: string}) {
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
                <li className="mb-2">{props.title}</li>
                <li>Save and see your changes instantly.</li>
            </ol>
        </>
    );
}
