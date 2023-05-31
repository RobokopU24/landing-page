import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "ROBOKOP",
  description:
    "ROBOKOP is an open-source biomedical knowledge graph that integrates and semantically harmonizes important knowledge sources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}