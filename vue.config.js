module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/style.scss";`,
      },
    },
  },
  // configureWebpack: {
  //   resolve: {
  //     symlinks: false,
  //   },
  // },
  // devServer: {
  //   host: "localhost",
  //   port: 8080,
  //   https: true,
  //   proxy: {
  //     "^/ess/": {
  //       target: "https://jeff.syscom.com:8081/",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
};
