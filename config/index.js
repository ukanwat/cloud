const dev = process.env.NODE_ENV !== 'production'

const server = dev ? 'http://localhost:3000' : 'https://console.Coplane.io'

export { server }
