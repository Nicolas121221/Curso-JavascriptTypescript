import { JSX, ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};

export const Heading = ({ children }: HeadingProps): JSX.Element => {
  return <h2 className="text-4xl text-center text-bold my-10 text-gray-100">{children}</h2>;
};
