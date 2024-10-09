const movies = [
    {
        title: "Stalingrad",
        image: "assets/stalingrad.png",
        description: "A band of Russian soldiers fights to hold a strategic building in their devastated city against a ruthless German army, and in the process, they become deeply connected to two Russian women who have been living there.",
        link: "https://www.youtube.com/watch?v=LF1ygnhq4kI" 
    },
    {
        title: "A Flying Jatt",
        image: "assets/flyingjat.png",
        description: "Very Nice Movie",
        link: "https://www.youtube.com/watch?v=BHKVQbRfDmQ" 
    },
    {
        title: "Agent Sai",
        image: "assets/agentsai.png",
        description: "Agent Sai Srinivasa runs a detective agency in Nellore, but he rarely has any cases to solve. One day, he is asked to investigate a case but he gets more than he bargained for.",
        link: "https://www.youtube.com/watch?v=GVIkN8bv6FQ" 
    },
    {
        title: "PUSHPA 2",
        image: "assets/pushpa2.png",
        description: "PUSHPA 2 | 2024 New Released South Hindi Dubbed Full Action Movie In 4K | Allu Arjun & Rashmika |",
        link: "https://www.youtube.com/watch?v=MjzvWBRkBWE" 
    },
    {
        title: "Proximity",
        image: "assets/proximity.png",
        description: "A young NASA JPL scientist is abducted by extraterrestrials, but when no one believes his story, he becomes obsessed with finding proof, which leads him on a journey of discovery.",
        link: "https://www.youtube.com/watch?v=pzq9TUsS-Y0" 
    },
    {
        title: "best Scifi Hollywood movie hindi dubbed",
        image: "assets/besthollywood.png",
        description: "nice moviee",
        link: "https://www.youtube.com/watch?v=V2vL2likxHI" 
    },
    {
        title: "The Test Case",
        image: "assets/testcase.png",
        description: "Preparing to be the Indian Army's first female test case in a combat role, Captain Shikha Sharma will do anything to fit into the male-dominated academy. Will she finally be the Indian Army's first ever Female Combat Officer? ",
        link: "https://www.youtube.com/watch?v=qP7qqVJtCRU" 
    },
    {
        title: "The Imitation Game",
        image: "assets/imitationgame.png",
        description: " ",
        link: "https://www.youtube.com/watch?v=0b3Vn_Ox_H8" 
    },
    {
        title: "Pizza 3 : The Mummy",
        image: "assets/pizza3.png",
        description: "Pizza 3 is a 2024 Blockbuster Released Full Hindi Movie.. Its a Horror 2024 Released Full Movie…",
        link: "https://www.youtube.com/watch?v=C3fLdVARY54" 
    },
    {
        title: "Wayne",
        image: "assets/wayne.png",
        description: "Wayne, a 16 year-old Dirty Harry with a heart of gold, sets out on his dirt-bike from Boston to Florida with his new crush Del, to get back a s*** hot '79 Trans Am that was stolen from his father before he died.",
        link: "https://www.youtube.com/playlist?list=PLVDu1DriBTOas7QlcVT7C1UaKyo5fQgiH" 
    },
    {
        title: "Agatha All Along",
        image: "path/to/agatha.jpg",
        description: "Download Agatha All Along (Season 1) Dual Audio [Hindi-English] WEB Series 480p | 720p | 1080p | 2160p WEB-DL ESub",
        link: "https://www.youtube.com/watch?v=abcd1234" 
    },
    {
        title: "Stree 2: Sarkate Ka Aatank",
        image: "path/to/stree.jpg",
        description: "Download Stree 2: Sarkate Ka Aatank (2024) Hindi Movie 480p | 720p | 1080p | 2160p WEB-DL ESub",
        link: "https://www.youtube.com/watch?v=abcd5678" 
    },
    {
        title: "Slingshot",
        image: "path/to/slingshot.jpg",
        description: "Download Slingshot (2024) English Movie 480p | 720p | 1080p WEB-DL ESub",
        link: "https://www.youtube.com/watch?v=abcd91011" 
    },
    {
        title: "Grave Torture",
        image: "path/to/grave.jpg",
        description: "Download Grave Torture (2024) Indonesian Movie 480p | 720p | 1080p WEB-DL ESub",
        link: "https://www.youtube.com/watch?v=abcd1213" 
    },
    {
        title: "Harry Potter Music & Ambience",
        image: "path/to/hauntedhill.jpg",
        description: "My only complaint is that the music is a little loud and drowns out the rain. Otherwise I love it. The background is amazing!",
        link: "https://www.youtube.com/watch?v=q5Zqv_IY31A" 
    }
];

// Dynamically create movie cards
const container = document.getElementById('movie-grid');

movies.map(movie => {
    const card = document.createElement('a');  // Create anchor tag for link
    card.classList.add('card');
    card.href = movie.link;  // Set href to the movie's YouTube link
    card.target = "_blank";  // Open the link in a new tab

    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="card-title">${movie.title}</div>
        <div class="card-description">${movie.description}</div>
    `;
    
    container.appendChild(card);
});
