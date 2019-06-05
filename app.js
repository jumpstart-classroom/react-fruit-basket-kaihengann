let fruits;
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  // On user input, set form value to SearchForm state
  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  // Returns array of filtered fruits after user input
  filterFruits = () => {
    let userInput = this.state.value.toLowerCase();
    return fruits.filter(fruit => fruit.type.includes(userInput));
  };

  render() {
    const fruitItems = this.filterFruits().map(fruit => (
      <Item fruitName={fruit.type} fruitEmoji={fruit.emoji} key={fruit.id} />
    ));

    return (
      <div id="container">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          placeholder=" > Enter a fruit"
        />
        <ul>{fruitItems}</ul>
      </div>
    );
  }
}

const Item = ({ fruitName, fruitEmoji, fruitId }) => <li key={fruitId}>{fruitEmoji} {fruitName}</li>;

const element = <SearchForm />;
const container = document.getElementById("app");

fetch("https://my-json-server.typicode.com/thoughtworks-jumpstart/api/fruits")
  .then(res => res.json())
  .then(data => {
    let dataString = JSON.stringify(data);
    fruits = JSON.parse(dataString);
    ReactDOM.render(element, container);
  });