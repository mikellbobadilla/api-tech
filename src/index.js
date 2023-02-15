import { httpServer } from './config/http.js'
import { config } from '#Dotenv'
const PORT = config.port
function bootstrap() {
  httpServer.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/v1/api`)
  })
}
bootstrap()