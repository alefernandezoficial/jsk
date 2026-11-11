import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type RoutePath = "/" | "/career" | "/tournaments" | "/settings";

interface RouterContextType {
  currentPath: RoutePath;
  navigate: (path: RoutePath) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: "/",
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

function normalizePath(path: string): RoutePath {
  const clean = path.replace(/\/$/, "");
  if (clean === "/career") return "/career";
  if (clean === "/tournaments") return "/tournaments";
  if (clean === "/settings") return "/settings";
  return "/";
}

interface RouterProviderProps {
  children: ReactNode;
  onPathChange?: (path: RoutePath) => void;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children, onPathChange }) => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    if (typeof window !== "undefined") {
      return normalizePath(window.location.pathname);
    }
    return "/";
  });

  const navigate = (path: RoutePath) => {
    if (path === currentPath) return;
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    if (onPathChange) onPathChange(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handlePopState = () => {
      const newPath = normalizePath(window.location.pathname);
      setCurrentPath(newPath);
      if (onPathChange) onPathChange(newPath);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [onPathChange]);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: RoutePath;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = "",
  activeClassName = "",
  onClick,
  ...props
}) => {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    // Let browser handle special clicks (Cmd, Ctrl, Shift, Alt, Middle click)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      className={`${className} ${isActive ? activeClassName : ""}`}
      {...props}
    >
      {children}
    </a>
  );
};
