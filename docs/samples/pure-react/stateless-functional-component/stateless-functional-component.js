const items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettue",
    "1 Yellow Squash",
    "3 cloves of Garlic",
    "1/2 cup Olive Oil"
];

const IngredientsList = ({items}) =>
    React.createElement("ul", {className: "ingredients"},
        items.map((ingredient, i) =>
            React.createElement("li", {key: i}, ingredient)
        ));

ReactDOM.render(
    React.createElement(IngredientsList, {items}, null),
    document.getElementById("app")
);