import { ReactNode, FC } from "react";

interface IWrapperProps {
  readonly children: ReactNode;
}

export const Wrapper: FC<IWrapperProps> = ({ children }) => {
  return <div className="max-w-7xl px-4 mx-auto">{children}</div>;
};
