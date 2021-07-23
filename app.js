let data = [
    {
        "photo": "images/crab.jpg",
        "title": "Crab",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero delectus tenetur totam possimus eaque neque necessitatibus consequatur sunt quo corporis.",
    },
    {
        "photo": "images/fish.jpeg",
        "title": "Fish",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero delectus tenetur totam possimus eaque neque necessitatibus consequatur sunt quo corporis.",
    },
    {
        "photo": "images/marines.jpeg",
        "title": "Marines",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero delectus tenetur totam possimus eaque neque necessitatibus consequatur sunt quo corporis.",
    },
    {
        "photo": "images/turtle.jpeg",
        "title": "Turtle",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero delectus tenetur totam possimus eaque neque necessitatibus consequatur sunt quo corporis.",
    },
    {
        "photo": "images/turtle2.jpeg",
        "title": "Another turtle",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero delectus tenetur totam possimus eaque neque necessitatibus consequatur sunt quo corporis.",
    },
    {
        "photo": "images/whale.jpeg",
        "title": "Whale",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero delectus tenetur totam possimus eaque neque necessitatibus consequatur sunt quo corporis.",
    },
]

let currentPhoto = 0;
$(".photo").attr("src", data[4].photo);
$(".title").html(data[4].title);
$(".description").html(data[4].description);