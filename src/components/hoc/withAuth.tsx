import type { ComponentType } from "react";

export function withAuth<P>(
  Component: ComponentType<P>,
  isAuthenticated: boolean,
) {
  return function WithAuth(props: P) {
    if (!isAuthenticated) return null;

    return <Component {...props} />;
  };
}
