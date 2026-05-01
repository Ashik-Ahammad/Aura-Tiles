import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: "https://aura-tiles.vercel.app/"
});

export const { signIn, signUp, signOut, useSession } = authClient;