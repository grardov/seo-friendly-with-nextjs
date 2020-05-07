import Head from "next/head";

const Metadata = ({ title, description }) => {
  return (
    <Head>
      <title>{ title ? title : "SEO-Friendly with Next.js" }</title>
      <meta name="description" content={ description ? description : "SEO-Friendly with Next.js" } />
      <meta name="author" content="Gerardo Valencia" />
      <meta property="og:title" content={title ? title : "SEO-Friendly with Next.js"} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description ? description : "SEO-Friendly with Next.js"} />
      <meta name="twitter:title" content={title ? title : "SEO-Friendly with Next.js"} />
      <meta name="twitter:description" content={description ? description : "SEO-Friendly with Next.js"} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

export default Metadata;
