import './App.css'


const TURNS = {
  X: '❌',
  O: '⭕',
}

const board = Array(9).fill(null)
const Square = ({children, updateBoard, index}) => {
  
}
function App() {
  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <div
                className='cell'
                key={index}
              >
                <span className='cell__content'>{index}</span>
                
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
