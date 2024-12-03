'use client'

export default function InteractiveButton({
  onClick,
  children
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return <button onClick={onClick}>{children}</button>
}
