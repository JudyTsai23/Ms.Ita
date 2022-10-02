module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: process.env.BASE_URL,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
					@import "@/assets/scss/_custom-settings.scss";
        `,
      },
    },
  },
  // configureWebpack: {
  //   resolve: {
  //     symlinks: false,
  //   },
  // },
  devServer: {
    host: "localhost",
    port: 8081,
    // https: true,
    proxy: {
      "/server": {
        target: "http://localhost:8080/ita/",
        pathRewrite: { "^/server": "" },
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
