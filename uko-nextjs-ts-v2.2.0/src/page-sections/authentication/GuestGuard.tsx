import { Fragment, PropsWithChildren } from "react";
import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";

const GuestGuard = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuth();
  const { push } = useRouter();

  if (isAuthenticated) {
    push("/");
    return;
  }

  return <Fragment>{children}</Fragment>;
};

export default GuestGuard;
