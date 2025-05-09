import greekSalad from './greek_salad.jpg'
import lemon from './lemon_dessert.jpg'
import bruchetta from './Bruchetta.png'


const recipes = [
    {
      id: 1,
      title: "Greek salad",
      price: 12.99,
      image: greekSalad,
      description:
        "Our famous greek salad is made from sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese",
    },
    {
      id: 2,
      title: "Bruchetta",
      price: 5.99,
      image: bruchetta,
      description:
        "Our Bruschetta is made from grilled bread rubbed with garlic and sprinkled with extra virgin olive oil, salt and pepper.",
    },
    {
      id: 3,
      title: "Lemon Taart",
      price: 4.78,
      image: lemon,
      description:
        "Our Lemon Taart is an authentic dish which comes straight from grandma's recipe book, made of shortcrust pastry, lemon cream and Italian meringue which is colored with a blowtorch. ",
    },

  ];

  export default recipes;