const items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettue",
    "1 Yellow Squash",
    "3 cloves of Garlic",
    "1/2 cup Olive Oil"
];

class Ingredients extends React.Component {
    renderListItem(ingredients, i) {
        return React.createElement("li", {"key": i}, ingredients)
    }

    render() {
        return (
            React.createElement("ul", {"className": "ingredients"}, this.props.items.map(this.renderListItem))
        )
    }
}

ReactDOM.render(
    React.createElement(Ingredients, {items}, null),
    document.getElementById("app")
);