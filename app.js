class FruitBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", fruits: [] };
  }

  // Listen for user input and set input state
  handleChange = e => this.setState({ input: e.target.value });

  // Filter fruits according to user input
  filterFruits = () => {
    const userInput = this.state.input.toLowerCase();
    const fruitsArray = this.state.fruits;
    return fruitsArray.filter(fruit => fruit.type.includes(userInput));
  };

  // Fetch fruits data
  componentDidMount = async () => {
    try {
      const url =
        "https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits/";
      const response = await fetch(url);
      if (!response.ok) throw new Error("Fruits can't be found!"); // Can also use response.status >= 400
      const fruits = await response.json();
      this.setState({ fruits: fruits });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    // Create react elements with filtered fruit items
    const filteredFruits = this.filterFruits();
    const fruitItems = filteredFruits.map(fruit => (
      <FruitItem
        fruitName={fruit.type}
        fruitEmoji={fruit.emoji}
        key={fruit.id}
      />
    ));

    return (
      <React.Fragment>
        <SearchForm input={this.handleChange} />
        <ul>{fruitItems}</ul>
      </React.Fragment>
    );
  }
}

const SearchForm = ({ input }) => (
  <input type="text" onChange={input} placeholder=" > Enter a fruit" />
);

const FruitItem = ({ fruitName, fruitEmoji, fruitId }) => (
  <li key={fruitId}>
    {fruitEmoji} {fruitName}
  </li>
);

const element = <FruitBasket />;
const container = document.getElementById("app");

ReactDOM.render(element, container);
