const fruits = ["apple", "oranges", "mangos", "watermelon"];

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  // On user input, set form value to SearchForm state
  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  // Returns array of filtered items after user input
  filterItems = () => {
    return fruits.filter((fruit) => fruit.includes(this.state.value))
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