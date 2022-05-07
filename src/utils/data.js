import I1 from '../img/i1.png'
import C3 from '../img/c3.png'
import F1 from '../img/f1.png'
import FI1 from '../img/fi1.png'



const heroData = [
    {
        id: 1,
        name: 'Icecream',
        desc: 'Chocolate & Vanilla',
        price: '5.35',
        avatar: I1
    },
    {
        id: 2,
        name: 'Chicken Kebab',
        desc: 'Mixed Kebab Plate',
        price: '7.35',
        avatar: C3
    },
    {
        id: 3,
        name: 'Strawberry',
        desc: 'Fresh Strawberries',
        price: '6.35',
        avatar: F1
    },
    {
        id: 4,
        name: 'Fish',
        desc: 'Fish Sauce',
        price: '4.35',
        avatar: FI1
    },
]

export const categories = [
    {
        id: 1,
        name: "Chicken",
        urlParamName: "chicken",
    },
    {
        id: 2,
        name: "Beef",
        urlParamName: "beef",
    },
    {
        id: 3,
        name: "Mutton",
        urlParamName: "mutton"
    },
    {
        id: 4,
        name: "Fish",
        urlParamName: "fish"
    },
    {
        id: 5,
        name: "Pizza",
        urlParamName: "pizza"
    },
    {
        id: 6,
        name: "Snack",
        urlParamName: "snack"
    },
    {
        id: 7,
        name: "Fruits",
        urlParamName: "fruits"
    },
    {
        id: 8,
        name: "Deserts",
        urlParamName: "deserts"
    }
]

export default heroData;