module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://github.com/42js",
        permanent: false,
      },
    ];
  },
};
