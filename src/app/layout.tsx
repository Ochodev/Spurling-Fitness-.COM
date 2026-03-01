import type { Metadata } from "next";
import { Kanit, Raleway, Teko, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/layout/Header";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import TrackingCapture from "@/components/TrackingCapture";
import Footer from "@/components/layout/Footer";
import { FormModalProvider } from "@/components/ui/FormModal";
import { PostHogProvider } from "./providers";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import { BRAND } from "@/lib/constants";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} – ${BRAND.tagline}`,
    template: `%s – ${BRAND.name}`,
  },
  description:
    "Spurling Fitness is Maine's best personal training gym for people over 50. Locations in Kennebunk, Scarborough, and South Portland.",
  openGraph: {
    siteName: BRAND.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || "GTM-KZMTJ6P4"}');`}
        </Script>
        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || "639844379451697"}');
          fbq('track', 'PageView');`}
        </Script>
        {/* GoHighLevel External Tracking */}
        <Script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_62a0edaed1c846babd57de78c85a92d6"
          strategy="afterInteractive"
        />
        {/* JSON-LD Structured Data */}
        <OrganizationSchema />
      </head>
      <body
        className={`${kanit.variable} ${raleway.variable} ${teko.variable} ${poppins.variable} antialiased`}
      >
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || "GTM-KZMTJ6P4"}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PostHogProvider>
          <TrackingCapture />
          <FormModalProvider>
            <AnnouncementBanner />
            <div className="relative">
              <Header />
              <main>{children}</main>
            </div>
            <Footer />
          </FormModalProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
