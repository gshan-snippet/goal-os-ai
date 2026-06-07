import { useEffect, useState } from "react";

type User = { username: string };
const KEY = "goalos_user";

const listeners = new Set<() => void>();
function emit() { listeners.forEach((l) => l()); }

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch { return null; }
}
export function setUser(u: User | null) {
  if (typeof window === "undefined") return;
  if (u) localStorage.setItem(KEY, JSON.stringify(u));
  else localStorage.removeItem(KEY);
  emit();
}
export function useUser() {
  const [u, setU] = useState<User | null>(() => getUser());
  useEffect(() => {
    const l = () => setU(getUser());
    listeners.add(l);
    return () => { listeners.delete(l); };
  }, []);
  return u;
}
