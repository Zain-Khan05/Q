let currentScene = 0;

const scenes = [
    {
        story:"You and your friend are having a vacation and you happened to end up in Delhi. It’s afternoon and you all just had some street food for lunch. While walking around, you spot a sign that reads, “DiagonAlley” above a narrow alley. You and your friend look at each other and notice that only one guy walks into the alley. You both enter the alley, and keep on walking, until you reach an intersection. You see some random person signal you to follow them and then run away. You turn around to see if they intended to signal someone else. There’s no one around you. You tell your friend, “Let’s go left na,” but he says he saw something shine very brightly to the right and that it seems like something crazy happened there.You both stand at the intersection, your friend insistent about the bright flash to the right, so you follow. The alley grows darker, and as you round a corner, you notice an old, cracked mirror hanging on the wall. Something about it draws you in. The reflection seems normal at first, but then you see it—etched faintly into the glass is a riddle that sends a shiver down your spine:I linger in silence, unseen by the eye Yet I carry the weight of the truths that you sigh.Born from the joy of shared tales and jest,In trials, I strengthen, revealing the best.I shimmer like gossamer, delicate, frail,Yet I fortify bonds when all else might fail.Though often unvoiced, I traverse the vast span,A presence enduring, beside you I stand.What am I, this phantom that dances in light,A companion in shadows, a beacon in night?You and your friend exchange uneasy glances, realizing this riddle might hold a deeper meaning to your journey.",
        question: "So do you go left or right?",
        options: { option1: { text: "Left", nextScene: 1 }, option2: { text: "Right", nextScene:10 } }
    },
    {
        story: "The road slopes downwards to the left. You think you might’ve lost the guy you saw, but he just turns the corner in front of you. You tell your friend to hurry up and walk faster. As you keep walking, you hear a laugh getting louder and louder. Suddenly the souvenir you were holding disappears from your hand. You look up to see a child running away with your souvenir in hand, laughing all the while. You and your friend chase after him, but he drops the souvenir in a black duffel bag that you didn’t even see until now. You look in the bag and see your souvenir along with a device that looks like a mini TV, lying in between what looks like 10-12 kilos of gold bars.",
        question: "Do you take the duffel bag, or do you just take the souvenir?",
        options: { option1: { text: "call the police about the duffel bag", nextScene: 2 }, option2: { text: "take just the souvenir", nextScene: 7 } }
    },
    {
        story:"The police jeep pulls up, its windshield gleaming under the streetlights. For a moment, the “Praise the Lord” sticker reflects light in such a way that it splits, like seeing a double image. The officer’s face is cold, but something about their expression feels reversed, as though they’re hiding their true thoughts behind a façade. As the cuffs snap around your wrists, the world around you feels inverted, like you’re seeing everything through a dark, distorted lens. You and your friend exchange a glance, but it’s like looking into a reflection you don’t recognize",
        question: "Do you tell him the truth, or do you offer him a part of the duffel bag?",
        options: { option1: { text: "tell the truth", nextScene:4 }, option2: { text: "offer him gold", nextScene: 3 } }
    },
    {
        story:"Once you notice the officer’s expression, you get the feeling that his trust in you starts waning. You decide to take matters into your own hands before the supervisor gets here. You tell the officer, “Look. We don’t want any trouble- just take some of the gold.” The officer looks at you, your friend (who is also looking at you in shock), the gold and back at you. You can tell he’s thinking REALLY hard. “Don’t give it much thought; no one’s gotta know,” you say. The supervisor finally arrives in his jeep. The supervisor gets down and asks the officer, “What’s this all about, Arjun?” Now you know the officer’s name. “Sir, there was a misunderstanding. Some guy just left his briefcase on the road, you know how it is. Well, that guy came forward, he proved that it was his, and he took it and left. In fact, I was just calling you to tell you that the matter has been resolved,” replied Arjun. “If that’s so, why can I still see a black duffel bag behind you? Asked the supervisor. “I was hoping you wouldn’t notice that.” Arjun pulled out a gun and shot the supervisor. His body fell to the ground, a surprised expression on his face. You and your friend look at each other. Arjun is still dragging the supervisor’s body. ",
        question: "+Do you take your friend and run, or stick with Arjun?",
        options: { option1: { text: "Run", nextScene: 5}, option2: { text: "Don’t run", nextScene: 6 } }
    },
    {
        story: "You tell him exactly what happened again, even though you thought he listened to you the first time. Only this time, it seems like he distrusts you. By the time you’re done, he looks extremely apprehensive. 2 minutes later, you hear the siren of a police jeep. You think that maybe the officer’s supervisor will listen to your story. 1.1.1: tell the truth You tell him exactly what happened again, even though you thought he listened to you the first time. Only this time, it seems like he distrusts you. By the time you’re done, he looks extremely apprehensive. 2 minutes later, you hear the siren of a police jeep. You think that maybe the officer’s supervisor will listen to your story. The police jeep pulls up, its windshield gleaming under the streetlights. For a moment, the “Praise the Lord” sticker reflects light in such a way that it splits, like seeing a double image. The officer’s face is cold, but something about their expression feels reversed, as though they’re hiding their true thoughts behind a façade. As the cuffs snap around your wrists, the world around you feels inverted, like you’re seeing everything through a dark, distorted lens and the officer even takes your duffle bag",
        question: " turns out the police offer made his mind up that you both were not to be trusted. Too bad. ",
        options: { option1: { text: "Play again", nextScene: 0},option2: { text: "download", nextScene: 8 } }},
    {
        story:"You see Arjun still dragging the body around the car to hide it behind a pillar with “Tom Cruise” written on it and you signal to your friend to book it and get the hell out of there. Thankfully, your friend gets it and you start sprinting out of there. You make it to the place where you saw the DiagonAlley sign and you leap, thinking you’ve made it to a crowded area, and Arjun can’t just shoot you. As you almost make it to the outside, you and your friend run face first into a brick wall and you smash your noses into it. You stare at the wall incredulously. Where the hell did that come from? Arjun laughs from behind you. “What, did you think I was lying when I said I couldn’t make it here? This is one weird place, alright,” he says before he cocks his gun and shoots you both dead.",
        question: " maybe you shouldn’t have run in the one direction that gave Arjun a direct line of sight to you both. ",
        options: { option1: { text: "Play again", nextScene: 0}, }
    },
    {
        story:"You see Arjun drag the body and dump it behind a dumpster. “Hey, you still can’t have anything to do with us, right? We— we gave you the gold,” your friend says. Arjun looks up. “Hmm? Oh yeah, nothing more. But how do I know that you won’t, say, go running to the police about how I shot that kind of high-ranking official right there?” You laugh. “Why— why would we go to the police? We aren’t even from here. We just wanna go home,” you say. “That won’t cut it, buddy. You’ll need to do something for me so that I’ll let you guys go in return.” You and your friend start to tense. “Like what?” your friend asks. “Oh, nothing, just kill someone.” You both look at each other. “I’m kidding, of course. Just take this duffel bag and drive it to a safe location that I’ll give you.” Just before you sit in the driver’s seat, you notice that the car Arjun gave you has an Apple keychain hanging from the rearview mirror. It catches the light in a way that makes it shimmer, almost like it’s reflecting something unseen. As you drive through the alleys, everything looks slightly distorted, as if the roads are bending in on themselves. You glance in the rearview mirror, and for a brief moment, it feels like someone is looking back at you, but it’s just your own reflection, twisted by the dim light. Surprisingly, you never reach the crowded areas anymore. The entire route seems to be inside dark alleyways. As you near the final 200 meters, the car breaks down. You get out of the car to find yourself suddenly surrounded by grave markers. “What the hell?” your friend says. The world around you feels eerily familiar, as if you’re seeing something from a different angle. You slowly start to lose consciousness, but the last thing you both see are people rising from the graves. You both slump to the ground.",
        question: "perhaps your fates were sealed from the beginning.. ",
        options: { option1: { text: "Play again", nextScene: 0}, }
    },
    {
        story:"You decide to take just your souvenir, and also that mini TV you saw. It just seems interesting. So you go ahead and turn left to try to see where that little kid went, but he’s nowhere to be seen, so you decide to turn back. All of a sudden, when you turn around, some homeless-looking guy starts crawling towards you both. You say to him, “Bhaiyya, kuch hai nahi hamare paas,” but he doesn’t look like the type to listen to any kind of speech at all. You slowly start to feel horrified and tell your friend to just ignore the guy and run. You intend to go back to the crowded area, but you end up missing the turn and going straight ahead.Let’s just find a way out of here,” you tell your friend. You end up walking from place to place trying to find a right turn somewhere. You get tired eventually and decide to sit down and watch that mini TV you picked up from that duffel bag. You turn it on and it takes a long time, but it eventually turns on. It shows nothing but a tiny message on its screen: “Do not turn this device ON.” You and your friend look at each other; you’ve seen multiple movies with the same thing, so it all seems a bit hard to take seriously. After a second, you say, “Well, maybe we shouldn’t turn it on. All those movies turn out badly for the guy turning on the TV.” Your friend doesn’t seem convinced.",
        question: "Do you turn on the TV, or do you put it aside to continue looking for a way out?",
        options: { option1: { text: "Turn on the TV", nextScene: 9}, option2: { text: "Don’t turn the TV on", nextScene: 8 } }
    },
    {
        story:"You put the TV aside.I really think it’s a bad idea, you tell your friend. He shrugs and you both continue looking for a way out. You keep going and the alleyways don’t ever change. It’s been hours and hours of walking around in circles, and it just keeps going. The landmarks in the sky don’t change; the only thing that changes is the time of day, and it feels rather fast. You finally decide to just walk into a dead end, and even you don’t know why. You guess that you wanted to take a break? Funnily enough, the wall has an Arijit Singh poster. Somehow you caught that small detail. Well, it’s time to go back and go back to… what were you doing again? Wait, weren’t you with someone? Huh, who did you come to this place with? How did you even get here in the first place? This is a completely enclosed square hole. There are no openings in the brick walls. ",
        question: "maybe you shouldn’t have kept walking so long..",
        options: { option1: { text: "Play Again", nextScene: 0}, }
    },
    {
        story:"You turn the TV on despite your initial inhibitions. Maybe it’ll be a fresh breath. You watch it power on. It looks old as hell. At first you think you’ll get to see some real retro stuff, maybe some black and white show, but nothing of the sort showed itself on the screen. Instead one image kept constantly flickering: the image of a clock. Your friend hits the TV, you know, the old fashioned remedy for any TV trouble. Nothing seems to work. Suddenly you both start to feel a little nauseous. The sky starts turning dark, even though it was just noon an hour ago. Right above you both, something like a storm cloud starts to gather. Stuff all around you starts flying upwards. You yourselves feel an overwhelming pull upwards, and to your utter disbelief, the TV is absolutely unaffected by this pull. Finally it gets too strong, and you both get sucked upwards. In an unbelievably disorienting gravity shift, you both get thrown onto the blistering Delhi streets, right outside where you initially spotted the DiagonAlley sign. Only now, the TV is on the right side, with the Instagram logo flickering on the screen instead, with an additional message below it: YOU GOT LUCKY THIS TIME. This time, you both decide to listen to the TV and get the hell away from DiagonAlley.",
        question: "You actually did get lucky. Let’s go!",
        options: { option1: { text: "Play Again", nextScene: 0} }
    },
    {
        story:"The road rises gently towards the right, but your friend is convinced he saw something crazy. Your friend leads you towards where he thinks he saw the shine. On the way you both see a lot of crazy things- a bird-fighting ring, a dog-fighting ring, a robot-fighting ring and the last one was just some kids playing hopscotch. Out of the corner of your eye, you spot an old TV that has the Instagram logo flickering on it with a message below saying: YOU GOT LUCKY THIS TIME. You feel like there’s something to this TV and you go pick it up, because it’s no bigger than an iPad or a regular sized tablet, although much thicker.You and your friend can’t decide on whether or not to turn it on. Ultimately, you just decide to screw it and turn it on. It takes a long time to boot up, but once it does, it reads: CHOOSE ONE. Below it, two icons appear. One of a pigeon, and one of a lightning bolt.",
        question: "Do you choose the pigeon, or the lightning bolt?",
        options: { option1: { text: "Pigeon", nextScene: 11}, option2: { text: "lightning bolt", nextScene: 16 } }
    },
    {
        story:"You tap the pigeon icon, even though you think that this is quite an old TV to have touch screen features. Suddenly you can smell gunpowder in the air. You try to look around to find the source, but to no avail, because absolutely nothing has changed in your surroundings. The air around you now starts warping and fizzing, like straight out of a movie. A cloud appears in front of you both and you see your surroundings spin faster and faster until you are now completely somewhere else. You and your friend are in a random wooden house devoid of any technology, it seems. There’s a window. You look out, to see it’s raining; a thunderstorm, even. But there’s something else- a human silhouette, running behind a pigeon. “Are you crazy?” your friend calls out. Something about this scene seems familiar to you, but you can’t quite place it. Then, two glowing neon icons appear out of nowhere in the air in front of you: one looks like the icon you would press to go to the next video in a video player, and the other looks like a video game controller.",
        question: "Do you press the forward icon, or the controller?",
        options: { option1: { text: "forward", nextScene: 12}, option2: { text: "game controller", nextScene: 13 } }
    },
    {
        story:"You tap the forward icon, and once again your surroundings shift, into yet another wooden house. This time it isn’t raining though. It looks like you’re in a toolshed of sorts, with metallic bits and pieces scattered all over. You take a few steps forward and almost blind yourself. You put your hand over your friend’s mouth to stop them from making any sound. You can’t believe yourself. It’s Isaac Newton and his prism setup. It looks radically different from what you ever expected. But outside the window, all of a sudden, you hear waves crashing. You and your friend tiptoe outside what appears to be Newton’s house, and you see a wide ship with a gigantic mast with the MSI logo on it for some reason. The ship also has gigantic mirrors facing each other, manned by one of the most famous Greeks of all time- Archimedes and his Death Ray- and is outside Newton’s house, which for some reason appears to be on an island. This seems like sensory overload. The ship, which was rocking a lot already, turns so that the Death Ray faces you and your friend. Instantly, a laser hits you both.",
        question: "Maybe you shouldn’t have hung around Newton’s house that long",
        options: { option1: { text: "Play Again", nextScene: 0}}
    },
    {
        story:"You tap the game controller icon, and once again your surroundings shift. You are surrounded by the colour blue, although it appears to be tinted yellow. Then you look down, to realise that you and your friend are standing on a moving yellow platform. Suddenly, the platform rises. You can now see that you are in the center of a blue maze with neon walls. You start moving. A steering wheel appears in front of your hands, and it seems very wonky to control. As you get used to how it feels, what looks like a floating bedsheet appears in front of you. To your surprise, before you can figure out the braking system, your platform sucks up the bedsheet. More and more of these “ghosts” start appearing, and you keep sucking them up. You’ve lost count at this point, but after innumerous ghosts have been inhaled by you, you stop moving. Now, two more icons are in front of you: one of a flame, and one of a steel pipe. ",
        question: "Do you tap the fire, or the pipe?",
        options: { option1: { text: "fire", nextScene: 15}, option2: { text: "steel pipe", nextScene: 14 } }
    },
    {
        story:"You tap the steel pipe icon, and the blue maze disappears around you. You instead appear to now pilot a bird. You can see pipes emerge from both the ceiling and the floor with varying gaps. “Dude, no way,” says your friend. “Why, what happened?” you ask. “You haven’t played this before?” he asks you. You nod no, and they motion for you to let them steer. You quickly realize that this is eerily similar to a game you saw way too long ago for you to remember the name of. The bird soars through the gaps, dodging pipe after pipe with flawless precision. Each rise and fall feels like a distorted reflection of the last. You squint at the shimmering edges of the pipes, almost as if they’re not quite solid, more like glimpses of something else. Soon enough, the bird stops moving. Neon letters flash above your heads: CONGRATULATIONS, GAME OVER. You get a strange feeling—it’s like you’ve been here before, a reflection of a moment that keeps repeating. “Does that mean what I think it means?” you ask your friend. “Yep, it was Flappy Bird, dude! How could you not know Flappy Bird?!” they reply. The pipes, the bird, the letters all vanish, and you’re back out on the streets of Delhi again. The world looks familiar, but somehow reversed, like the left side is on the right. You and your friend are so glad this happened on the last day of your trip, because you’d give just about anything to be home as quickly as possible.",
        question: "All’s well that ends well, I guess.",
        options: { option1: { text: "Play Again", nextScene: 0}}
    },
    {
        story:"The red stone beneath your feet cracks, and the air shimmers with heat. The landscape seems to ripple as though the world around you is bending—warped by the intense heat, making everything look off. You and your friend run, but every path feels like a strange echo of the last. The towering creatures watch from the distance, their eyes glinting, like they’re seeing straight through you. As you fall, you catch a glimpse of your friend moving, but it’s like looking into a warped reflection—their movements not quite matching your own.",
        question: " I think you both tried to swim in lava..that can’t be smart.",
        options: { option1: { text: "Play Again", nextScene: 0}}
    },
    {
        story:"You tap the lightning bolt icon, and you appear to now pilot a very red bird, in a random meadow with very pleasant music playing, but you can’t tell from where. You can see pipes emerge from both the ceiling and the floor with varying gaps. “Dude, no way,” says your friend. “Why, what happened?” you ask. “You haven’t played this before?” he asks you. You nod no, and they motion for you to let them steer. You quickly realise, that this is eerily similar to a game you saw way too long ago for you to remember the name of. Your friend seems to know exactly what they are doing and avoid hitting any of the pipes. Soon enough, the bird stops moving. Neon letters flash above your heads: CONGRATULATIONS, GAME OVER. “Does that mean what I think it means?” you ask your friend. “Yep, it was Flappy Bird, dude! How could you not know Flappy Bird?!” they reply. The pipes, the bird, the letters all vanish and you’re back out on the streets of Delhi again. There is absolutely no sign of DiagonAlley anywhere, and you’re glad. You and your friend are so glad this happened on the last day of your trip, because you’d give just about anything to be home as quickly as possible.",
        question: "All’s well that ends well, I guess",
        options: { option1: { text: "Play Again", nextScene: 0}}
    },
];
function updateScene() {
    const scene = scenes[currentScene];

    document.getElementById('story').innerText = scene.story;
    document.getElementById('question').innerText = scene.question;

    if (scene.options.option1) {
        document.getElementById('option-1').innerText = scene.options.option1.text;
        document.getElementById('option-1').style.display = 'inline-block';
    } else {
        document.getElementById('option-1').style.display = 'none';
    }

    if (scene.options.option2) {
        document.getElementById('option-2').innerText = scene.options.option2.text;
        document.getElementById('option-2').style.display = 'inline-block';
    } else {
        document.getElementById('option-2').style.display = 'none';
    }
}

function selectOption(option) {
    const selectedOption = scenes[currentScene].options[option];
    
    // Check if option2's text is "download"
    if (option === 'option2' && selectedOption.text === 'download') {
        downloadFile('congratulations.psd');
    } else {
        // Disable buttons and wait 3 seconds before moving to the next scene
        document.querySelectorAll('.option').forEach(button => button.disabled = true);
        
        setTimeout(() => {
            currentScene = selectedOption.nextScene;
            updateScene();
            document.querySelectorAll('.option').forEach(button => button.disabled = false);
        }, 3000); 
    }
}

function downloadFile(filename) {
    // Create a link element
    const link = document.createElement('a');
    link.href = `assets/congratulations.psd`;  // Replace with the actual path to the file
    link.download = filename;
    
    // Append the link to the body and trigger the download
    document.body.appendChild(link);
    link.click();
    
    // Remove the link after triggering the download
    document.body.removeChild(link);
}

window.onload = updateScene;
