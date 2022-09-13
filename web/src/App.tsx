
interface ButtonProps{
  title: string
}

function Button(props: ButtonProps){
  return(
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return(
    <div>
      <Button title="Send1"></Button>
      <Button title="Send2"></Button>
      <Button title="Send3"></Button>
    </div>
  )
}

export default App
