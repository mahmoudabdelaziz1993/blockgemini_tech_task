import "../styles/globals.css";
import Layout from "../components/Layout";
import PostsContextProvider from "../context/PostContext";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <PostsContextProvider>
        <Component {...pageProps} />
      </PostsContextProvider>
    </Layout>
  );
}

export default MyApp;
