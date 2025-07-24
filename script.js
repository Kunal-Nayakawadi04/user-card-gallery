let users = [
  {
    name: "amisha rathore",
    pic: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "ravi sharma",
    pic: "https://plus.unsplash.com/premium_photo-1679314213957-909df10381ac?w=600",
    bio: "exploring the universe one thought at a time 🚀",
  },
  {
    name: "priya mehta",
    pic: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=600",
    bio: "minimalist. dreamer. poet 🌙✨",
  },
  {
    name: "arjun verma",
    pic: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=600",
    bio: "pixels, playlists, and peaceful minds 🎧🧘",
  },
  {
    name: "sakshi agarwal",
    pic: "https://images.unsplash.com/photo-1504470695779-75300268aa0e?w=600",
    bio: "lost in stories, found in silence 📚💭",
  },
  {
    name: "manish gupta",
    pic: "https://plus.unsplash.com/premium_photo-1670590785994-ab5e8a2ccd61?w=600",
    bio: "code. coffee. repeat ☕💻",
  }
];

function showUsers(arr) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ""; // clear previous cards

  arr.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    cardContainer.appendChild(card);
  });
}

showUsers(users);

// Search functionality
let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let keyword = inp.value.toLowerCase();
  let filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(keyword)
  );
  showUsers(filteredUsers);
});
