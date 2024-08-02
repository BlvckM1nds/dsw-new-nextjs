import { WrapperProps } from "@/lib/interfaces";

export default function Wrapper({ children, ...props }: WrapperProps) {
  return (
    <section {...props}>{children}</section>
  );
};