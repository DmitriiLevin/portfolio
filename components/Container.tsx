import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`mx-auto w-full px-12 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
