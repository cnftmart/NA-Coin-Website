import "./index.css";
export const metadata = {
  title: "Not Available | N/A Coin",
};
export default function RootLayout({
  children,
}:
{
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        <meta name="description" content="No bio yet."/>
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="revisit-after" content="1 Weeks" />
        <meta name="author" content="Cnftmart" />
        <meta httpEquiv="Content-Type" content="text/html" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="language" content="EN" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <title>Not Available | N/A Coin</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
