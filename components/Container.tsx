import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-4 pt-16 sm:px-6 lg:px-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
