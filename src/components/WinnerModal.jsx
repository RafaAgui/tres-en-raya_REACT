import { Square } from './Square.jsx'

export function WinnerModal ({winner, resetGame}) 
{
  if (winner === null) return null
  const winnerText = winner === false ? 'Empate' : 'Gano'

  return (
    <section className='winner'>
      <div className='text'>
        <h2 >{winnerText}</h2>
        <button onClick={resetGame }>Empezar de nuevo</button>
        <div className='win'> 
          {winner && <Square>{winner}</Square>}
        </div>
      </div>
    </section>
  )
}