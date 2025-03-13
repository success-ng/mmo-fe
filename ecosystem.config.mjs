// ecosystem.config.js (hoặc ecosystem.config.mjs nếu bạn thích)
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
