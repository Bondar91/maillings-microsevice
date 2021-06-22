interface IAppWrapper {
  Component: React.FC;
  pageProps: { [key: string]: any };
}

const App: React.FC<IAppWrapper> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
