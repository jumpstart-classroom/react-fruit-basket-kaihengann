class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", fruits: [] };
  }

  // On user input, set form value to SearchForm state
  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  // Returns array of filtered fruits after user input
  filterFruits = () => {
    let userInput = this.state.input.toLowerCase();
    return this.state.fruits.filter(fruit => fruit.type.includes(userInput));
  };

  // Fetch data
  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits"
      );
      const json = await response.json();
      this.setState({ fruits: json });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const fruitItems = this.filterFruits().map(fruit => (
      <FruitItem fruitName={fruit.type} fruitEmoji={fruit.emoji} key={fruit.id} />
    ));

    return (
      <div id="container">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
          placeholder=" > Enter a fruit"
        />
        <ul>{fruitItems}</ul>
      </div>
    );
  }
}

const FruitItem = ({ fruitName, fruitEmoji, fruitId }) => (
  <li key={fruitId}>
    {fruitEmoji} {fruitName}
  </li>
);

const element = <SearchForm />;
const container = document.getElementById("app");

ReactDOM.render(element, container);
