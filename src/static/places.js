import Island0 from '../assets/island1.jpg'
import Island1 from '../assets/islandO.jpg'

const places = [
  {
    title: 'Green',
    desc: "The maldives are home to some of the world's most ravinish islands, but it's the sea, which truly make these island shine. Luminous aquamarine waters with a cristal clarity lap upon these dazzling white shores ",         
    imageUrl: process.env.PUBLIC_URL + Island0,
    time: '1500'      
  },
  {
    title: 'Bora bora',
    desc: "Shaped like a giant sombrero, this lush volcanic island stars in countless South Pacific fantasies. The focal point and the best asset this tropical it is ravishing lagoon in technicolor ",         
    imageUrl: process.env.PUBLIC_URL + Island1,
    time: '1500'      
  },
];

export default places;