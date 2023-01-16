import Avatar from './components/Avatar'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className='App'>
      <div>
        <h2>Avatar using the fallback url because url is invalid</h2>
        <Avatar />
      </div>
      <div>
        <h2>Avatar using the fallback url because url is an empty string </h2>
        <Avatar url='' />
      </div>
      <div>
        <h2>Avatar using the passed in url</h2>
        <Avatar
          url='https://avatars.githubusercontent.com/u/75798156?v=4'
          alt='github profile avatar'
        />
      </div>
      <div>
        <h2>Figure with a img and caption</h2>
        <Wrapper caption='Caption'>
          <Avatar alt='github profile avatar' />
        </Wrapper>
      </div>
    </div>
  )
}

export default App
