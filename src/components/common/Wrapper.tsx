import { WrapperProps } from "@/lib/types";

export default function Wrapper({ children, ...props }: WrapperProps) {
  return (
    <section {...props}>{children}</section>
  );
};