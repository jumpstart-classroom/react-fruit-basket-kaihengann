const fruits = ["apple", "oranges", "mangos", "watermelon"];

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div id='container'>
        <input type='text' onChange={this.handleChange} value={this.state.value} placeholder='Enter a fruit' />
      </div>
    )
  }
}

const element = <SearchForm />
const container = document.getElementById('app')

ReactDOM.render(element, container)