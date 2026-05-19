"use client";

import { usePathname } from "next/navigation";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

type NavigationLoadingContextValue = {
    isNavigating: boolean;
    startNavigation: () => void;
};

const NavigationLoadingContext =
    createContext<NavigationLoadingContextValue | null>(null);

export function NavigationLoadingProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [isNavigating, setIsNavigating] = useState(false);

    useEffect(() => {
        setIsNavigating(false);
    }, [pathname]);

    const startNavigation = useCallback(() => {
        setIsNavigating(true);
    }, []);

    return (
        <NavigationLoadingContext.Provider value={{ isNavigating, startNavigation }}>
            {children}
        </NavigationLoadingContext.Provider>
    );
}

export function useNavigationLoading() {
    const context = useContext(NavigationLoadingContext);
    if (!context) {
        throw new Error(
            "useNavigationLoading must be used within NavigationLoadingProvider",
        );
    }
    return context;
}
