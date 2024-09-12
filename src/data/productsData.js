import plant1 from "../assets/images/plant-1.png";
import plant2 from "../assets/images/plant-2.png";
import plant3 from "../assets/images/plant-3.png";
import plant4 from "../assets/images/plant-4.png";
import plant5 from "../assets/images/plant-5.png";
import image1 from "../assets/images/images1.png";
import image2 from "../assets/images/images2.png";
import image3 from "../assets/images/images3.png";
import image4 from "../assets/images/images4.png";
import image5 from "../assets/images/images5.png";
import image6 from "../assets/images/images6.png";


// Sample products data
const products = [
    {
        id: 1,
        name: "Consectetur Adipiscing (Elit)",
        image: plant4,
        relatedImages: [
            plant1,
            plant2,
            plant4,
            image6,
            image2
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: 2,
        name: "Blandit ante Sodales",
        image: image2,
        relatedImages: [
            plant5,
            plant3,
            plant2,
            image3
        ],
        description: "Etiam rhoncus suscipit eros, at blandit ante sodales suscipit. In nec ex id felis finibus pellentesque vitae nec nisl."
    },
    {
        id: 3,
        name: "Malesuada Mauris",
        image: image1,
        relatedImages: [
            image5,
            plant3,
            plant1
        ],
        description: "Cras convallis magna id tincidunt auctor. In malesuada mauris eu sodales posuere. Aliquam vitae mi ante. Etiam euismod suscipit urna nec aliquet. Curabitur quis ornare dolor."
    },
    {
        id: 4,
        name: "Aliquam Sagittis",
        image: plant1,
        relatedImages: [
            image2,
            plant2,
            plant1,
            image5
        ],
        description: "Fusce luctus, ligula in aliquam sagittis, turpis massa pellentesque tellus, nec malesuada dui diam a nunc. Nullam lacinia lobortis urna ut pulvinar."
    },
    {
        id: 5,
        name: "Fermentum Ultricies",
        image: plant5,
        relatedImages: [
            plant2,
            image6
        ],
        description: "Integer dignissim euismod lacus fermentum ultricies. Phasellus viverra, metus ac elementum bibendum, odio diam consectetur ex, in consectetur est odio nec arcu."
    },
    {
        id: 6,
        name: "Donec Elementum",
        image: image6,
        relatedImages: [
            plant2,
            image4,
            image2
        ],
        description: "In eu massa in sapien molestie volutpat. Sed id dui ac tellus ornare consequat. Donec elementum congue nibh id rhoncus."
    },
    {
        id: 7,
        name: "Vel Rhoncus Lectus",
        image: image4,
        relatedImages: [
            image2,
            plant5
        ],
        description: "Aliquam tempus egestas erat eu volutpat. Donec vehicula pretium elit, vel rhoncus lectus consectetur vel. Aenean commodo hendrerit purus quis vulputate."
    },
    {
        id: 8,
        name: "Velit Sollicitudin",
        image: image5,
        relatedImages: [
            plant1,
            plant4,
            plant5,
            image2,
            image6,
            image3
        ],
        description: "Donec sollicitudin et erat non posuere. Donec gravida neque ante, non placerat velit blandit vel. Fusce fermentum eros ac velit sollicitudin tincidunt."
    }
];

export default products;
