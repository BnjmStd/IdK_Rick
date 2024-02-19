
import './App.css';

function App() {


  return (
    <>
      <article className='tw-followCard'>
        <header className='tw-followCard-header' >
          <img
          className='tw-followCard-avatar'
          src="https://unavatar.io/midudev " alt="" />
          <div className='tw-followCard-info'>
            <strong className='tw-followCard-infoUserName'>
              Miguel angel
            </strong>
            <span>@bnjmn_std</span>
          </div>
        </header>
        <aside>
          <button className='tw-followCard-button'>
            seguir
          </button>
        </aside>
      </article>

    </>
  )
}

export default App
