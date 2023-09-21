import "@styles/globals.css";

export const metadata = {
  title: "Moments Photography",
  description: "Photographer based in Ashtabula, Ohio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
