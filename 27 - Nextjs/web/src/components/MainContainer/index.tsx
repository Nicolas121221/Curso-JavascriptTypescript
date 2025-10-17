import { JSX } from "react";

export type MainContainerProps = {
  children: JSX.Element;
};

export const MainContainer = ({ children }: MainContainerProps): JSX.Element => {
  return <section className="max-w-3xl mx-auto px-4 mt-4 min-h-[85vh]">{children}</section>;
};
