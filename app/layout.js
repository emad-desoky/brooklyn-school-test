import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Top MBA Rankings | Global MBA Programs | MBA Rankings 2024",
  description:
    "Discover the top-ranked MBA programs worldwide with our 2024 rankings. Compare programs by region, career opportunities, and more. Find your ideal MBA program to advance your career.",
  keywords:
    "Top MBA Rankings, Best MBA Programs, Global MBA Rankings 2024, Business School Rankings, MBA Programs by Region, Career Opportunities, MBA Guide",
  author: "Top MBA Rankings Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example-mbarankings.com" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://www.example-mbarankings.com/og-image.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.example-mbarankings.com"
        />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://www.example-mbarankings.com/twitter-image.jpg"
        />

        {/* Structured Data for Search Engines */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Website",
            url: "https://www.example-mbarankings.com",
            name: "Top MBA Rankings",
            description: metadata.description,
            publisher: {
              "@type": "Organization",
              name: "Top MBA Rankings",
            },
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
