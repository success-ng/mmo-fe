module.exports = {
  apps: [
    {
      name: 'nitro-app',
      port: '3000',
      exec_mode: 'fork',
      instances: '1',
      script: './.output/server/index.mjs'
    }
  ]
}
