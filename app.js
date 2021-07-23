let crabPhoto = {
    photo: "images/crab.jpg",
    title: "Crab",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero delectus tenetur totam possimus eaque neque necessitatibus consequatur sunt quo corporis.",
};

$(".photo").attr("src", crabPhoto.photo);
$(".title").html(crabPhoto.title);
$(".description").html(crabPhoto.description);