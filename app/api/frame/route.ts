import { Frog } from 'frog'
import { handle } from 'frog/next'

const app = new Frog({
  basePath: '/api/frame'
})

app.frame('/', (c) => {
  return c.res({
    image: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          background: 'black',
          color: 'white',
          fontSize: 42
        }}
      >
        <div>LayerZero</div>
        <div style={{ fontSize: 24, marginTop: 12 }}>
          Enter the New Era
        </div>
      </div>
    ),
    intents: [
      <button
        action="link"
        target="https://layerzero.network/new-era"
      >
        🚀 Open New Era
      </button>
    ]
  })
})

export const GET = handle(app)
export const POST = handle(app)
