import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "./_fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
  weight: "200 300 400 500 600 700 800",
});

const clashDisplayBold = localFont({
  src: "./_fonts/ClashDisplay-Bold.otf",
  variable: "--font-clash-displaybold",
});

const Satoshi = localFont({
  src: "./_fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "300 400 500 600 700",
});

export const metadata = {
  title: "MindZed technologies",
  description: "Mind Creativity Technology - United",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${Satoshi.variable} ${clashDisplayBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
