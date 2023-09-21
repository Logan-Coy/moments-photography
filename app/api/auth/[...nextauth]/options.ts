import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },
      //@ts-expect-error next-auth
      authorize(credentials) {
        const user = {
          id: "01",
          name: process.env["ADMIN_USERNAME"],
          password: process.env["ADMIN_PASSWORD"],
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  theme: {
    logo: "https://momentsphotobucket.s3.us-east-2.amazonaws.com/logo2.png",
  },
};
