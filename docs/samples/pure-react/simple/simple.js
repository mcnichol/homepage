const items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettue",
    "1 Yellow Squash",
    "3 cloves of Garlic",
    "1/2 cup Olive Oil"
];

const IngredientsList = React.createClass({
    displayName: "IngredientsList",
    createListItem(ingredient, i) {
        return React.createElement("li", {"key": i}, ingredient);
    },

    render() {
        return React.createElement("ul", {"className": "ingredients"}, this.props.items.map(this.createListItem))
    }
});

ReactDOM.render(
    React.createElement(IngredientsList, {items}, null),
    document.getElementById("app")
);