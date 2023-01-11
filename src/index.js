import { httpServer } from './config/http.js'
import { config } from '#Dotenv'
const PORT = config.port
function bootstrap() {
  try {
    httpServer.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}/v1/api`)
    })
  } catch (err) {
    console.error(`An error has ocurred for this reason:\n${err.message}`)
  }
}
bootstrap()