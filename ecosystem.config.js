export default {
  apps: [
    {
      name: "nitro-app",
      script: ".output/server/index.mjs",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
