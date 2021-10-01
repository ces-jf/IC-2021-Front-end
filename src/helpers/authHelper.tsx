import { useRouter } from "next/router";
import { isAuthenticated } from "./state";

export default function doAuth() {
  if (typeof window !== 'undefined') {
    const router = useRouter();
    if (!isAuthenticated()) {
      router.push('/login');
    } else {
      return true;
    }
  }
}