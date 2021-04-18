var pages = [
    {
        text: "You find yourself at a gas station in a barren desert. You’re alone and you don’t know how you got here… Where were you before this? Is it morning or evening? You see a singular building, impossibly tall against the flat horizon. To your right is a forest. You’re intrigued but nervous. You can either go to the building or into the forest. Where do you choose to go?",
        links: [{ index: 2, text: "Building" }, { index: 10, text: "Forest" }],
        src: "../assets/photos/1.png" // mark fix
    },
    {
        text: "As you enter the building, you feel a sense of dread. Your stomach begins to turn over with anxiety. Something tells you that you need to do everything within your power to remain unseen by the people in charge of this place. There are two doors in front of you. One leads to the elevator, one to the stairs. Which door do you take?",
        links: [{ index: 6, text: "Elevator" }, { index: 3, text: "Stairs" }],
        src: "../assets/photos/2.png" //mark fix back
    },
    {
        text: "The stairs seem to go on for miles. Your legs begin to ache as you wind upward into the building. You freeze as you hear two voices above you on the stairs, but they disappear as a door closes. You come to a landing. You can continue climbing towards the top or you can exit the stairs on this floor. Which do you choose?",
        links: [{ index: 4, text: "Landing" }, { index: 5, text: "Stairs" }],
        src: "../kate-website/assets/photos/3.png"
    },
    {
        text: "You find yourself on a landing above a beautiful stained glass window. Sunlight bathes you in colored light, and you begin to look around until something stops you. Your blood turns cold as you hear a voice coming up the stairs behind you: the voice of the man you are most afraid of. Your breathing increases and your flight response kicks in. You need to escape. There are two doors on this floor. You can hide in the room on the left or the one on the right. Which one do you choose?",
        links: [{ index: 24, text: "Hide in the left" }, { index: 9, text: "Hide in the right" }],
        src: "../kate-website/assets/photos/4.png"
    },
    {
        text: "You are determined to climb to the top of this building, but as the minutes pass, your aching body begins to slow down. With each step, you feel pressure spread from your foot to your ankle, up through your calf, jolting pain through your knee. Your hamstrings burn and your back aches. You count steps to distract yourself until finally the stairs end. You’ve reached the top. Resting for a moment, you assess your options. You can either go left, through a large, heavy set of double doors, or right, through a concrete hallway. Which way do you go?",
        links: [{ index: 21, text: "Left" }, { index: 9, text: "Right" }],
        src: "../kate-website/assets/photos/5.png"
    },
    {
        text: "You are in a small elevator lobby. The doors are open and you’re surprised to see an old childhood friend walk out. As you make smalltalk, she tells you that a person is being held prisoner at the top of the building. You’re bewildered at her nonchalance and don’t know if you believe her. You can either go up and try to save the prisoner or take the elevator down and escape the building. Which do you choose?",
        links: [{ index: 21, text: "Up" }, { index: 8, text: "Down" }],
        src: "../kate-website/assets/photos/6.png"
    },
    {
        text: "Despite your fear, you fight. Somehow you manage to disarm him, putting the two of you on more equal  ground. Adrenaline coursing through your body, you feel like you have the speed of a cheetah, the strength of a bear, and the venom of a rattlesnake. Your eyes water from the impact of his fist smashing against your cheekbone, and a second blow to your lower back nearly takes you out. You kick, scream, punch, slap, and take blow after blow. He may be bigger and stronger than you, but he can’t take a hit like you can. With a few well-aimed kicks you have him doubled over gasping for air. This is your chance. You make a break for it, sprinting as fast as your bruised body will let you. Faster than you’ve ever run before, you wind your way through rooms and hallways until you know you’ve put enough space between the two of you. Catching your breath, you look around. There’s an elevator to your left standing open, and to your right, a ladder climbs up the building far above you. You can either get on the elevator or climb up the ladder. Which do you choose?",
        links: [{ index: 71, text: "Ladder" }, { index: 70, text: "Elevator" }],
        src: "../kate-website/assets/photos/7.png"
    },
    {
        text: "You take the elevator to the sixth sub-floor, open the door, and find yourself in a dark cave. You can see your breath and tiny ice crystals float through the frozen air, catching the light and shimmering like diamonds. Walking to the mouth of the cave, you see beautiful formations made by either rock or ice. The cave, although cold, is safe; exiting into the harsh sunlight makes you feel vulnerable. A trail leading out of the cave soon comes to a fork. You can follow the path to the east or the path heading south. Which way do you choose to go?",
        links: [{ index: 12, text: "East" }, { index: 11, text: "South" }],
        src: "../kate-website/assets/photos/8.png"
    },
    {
        text: "You pull the door closed behind you and turn around to see a beautiful chapel. The room is tiny and cramped, but you feel a sense of peace as you make your way toward the altar. You light a candle and rest, trying to meditate on your day, but have trouble remembering what you did before entering the building. Instead, you focus on your breath, grounding yourself. Breathe in, breathe out. A thought comes to you: there is an escape route on the second floor. Do you need to escape? You feel energized, but wary. You can go upstairs and continue exploring the building or escape from the second floor. Which do you choose?",
        links: [{ index: 5, text: "Deeper into the building" }, { index: 20, text: "Escape" }],
        src: "../kate-website/assets/photos/9.png"
    },
    {
        text: "As you make your way to the edge of the woods, the temperature drops. Snow crunches under your feet. You inhale the crisp smell of trees and dirt and feel calm. You pay attention to the sounds of the forest; plants, animals, and wind. The rustling of fallen leaves, the chattering of squirrels, and your own, heavier sounds of breathing and crushing snow underfoot--all create a beautiful cacophony that drowns out your anxious thoughts. Ahead of you is a trail, and to the right is the river. Which way do you want to go?",
        links: [{ index: 11, text: "Trail" }, { index: 13, text: "River" }],
        src: "../kate-website/assets/photos/10.png"
    },
    {
        text: "You walk along the path until a sudden snow burst prompts you to shelter under a large pine tree. Five minutes later when the blizzard stops, the path is completely hidden under the snow. You are lost. The river runs parallel to the hidden path and you think you might know which direction it’s in. You look around and see a small fence in the distance, but it’s leading the other way. You can either follow the fence or trust your instincts and search for the river. What do you choose?",
        links: [{ index: 12, text: "Fence" }, { index: 14, text: "River" }],
        src: "../kate-website/assets/photos/11.png"
    },
    {
        text: "It seems like you have been walking forever. Your legs begin to feel heavy and your feet start to drag. Slowly, almost imperceptibly, your entire body goes numb. You can’t feel any sensations except for an overwhelming wave of anxiety flooding over you, and you realize that you can no longer walk. Is there any use calling out for help? You haven’t seen anyone for miles. Your knees give out and you fall into the snow. Something in your body snaps and for a brief moment you can feel every nerve explode in pain. The jolt leaves you exhausted and shaky, but you have feeling in your arms and legs again. You don’t know why that just happened, but you’re scared that if you keep walking for too long your body will go numb again. Getting to your feet, you assess your options. A small farmhouse lies beyond a barbed wire fence. You can either go into the house or follow the fence further. Where do you go?",
        links: [{ index: 17, text: "House" }, { index: 29, text: "Follow fence" }],
        src: "../kate-website/assets/photos/12.png"
    },
    {
        text: "As you walk toward the river, you hear a branch snap behind you. Turning, you’re surprised to see an old friend. “The water’s warmer than it looks,” he says, “I’m jumping in.” He’s right--the surface of the water is steaming hot and all the snow near the bank has melted. “The river is over a geothermal hot spot,” your friend explains as he strips down to his boxers. As he dives in your body aches for the warm embrace of the hot water. You can either join your friend in the river or continue walking alongside it further into the woods. Which do you choose?",
        links: [{ index: 14, text: "Stay out of water" }, { index: 15, text: "Get in water" }],
        src: "../kate-website/assets/photos/13.png"
    },
    {
        text: "Walking along the path, you breathe in the lush, earthy air, and the smell of the trees puts you in a trance. Grotesquely beautiful mushrooms grow out of a decaying stump, and you investigate it, marveling at how something can be dead yet so alive. An ear shattering boom echoes through the forest. Hunters. Somehow, you know they are hunting you, and adrenaline floods your body. All you can do is run. Sprinting down the path, you’re amazed by your speed and strength… will you actually be able to escape? The path forks ahead of you. You can either follow the path to the left or the one to the right. Which one do you choose?",
        links: [{ index: 18, text: "Left" }, { index: 19, text: "Right" }],
        src: "../kate-website/assets/photos/14.png"
    },
    {
        text: "The hot water stings as you first step in because the air is so cold, but soon you’re embraced by the comforting, warm pressure of the river. You fully submerge, then come up for air feeling invigorated. You and your friend let the river pull you downstream and into a tunnel. Vaulted cement ceilings make the tunnel look like a brutalist cathedral. Ahead of you, you see a platform. Friends greet you as you climb out of the water and shake off. Embarrassed, you remember that you stripped down to your underwear when you got in the river and left your clothes at the riverbank. You feel self conscious and exposed. Everyone is staring at you. Miraculously, one of your coworkers emerges from the crowd and silently tosses you some dry clothes, socks, and shoes. You quickly get dressed and look for an escape route. You can either follow the platform along the river or climb a ladder up the concrete wall. Where do you go?",
        links: [{ index: 16, text: "Platform" }, { index: 71, text: "Escape thorugh ladder" }],
        src: "../kate-website/assets/photos/15.png"
    },
    {
        text: "You quickly make your way through the concrete tunnel, face still burning with embarrassment. The tunnel lets out into a lake reflecting the beautiful sunset. You climb up the rock face out of the lake and onto flat ground near the highway. Taking a moment to rest, you drink in the gorgeous landscape. Colors envelop you and light pulls your soul right up to the surface of your skin. You feel your entire body sing. Anything is possible when the sky looks this exquisite. As the ever-changing colors of the sunset play their harmonies, you lower your eyes to the road next to you. You’re a long way from the city, and you don’t want to walk. A red bicycle catches your eye, apparently abandoned in the weeds along the side of the highway. You can either take the bike into the city or try your luck at hitchhiking. Which do you choose?",
        links: [{ index: 33, text: "Bike" }, { index: 32, text: "Hitchhike" }],
        src: "../kate-website/assets/photos/16.png"
    },
    {
        text: "As you enter the house you are immediately drawn to the attic. Creeping up the stairs, you enter a shadowy room filled with boxes of memories, forgotten furniture, and evidence of mice. Looking around, you begin to feel a sense of urgency. You examine the contents of the attic, looking for something… but what? For some reason it seems so important that you find it… whatever “it” is. You hear a creak somewhere in the house, jolting you back to reality. You don’t want to get trapped up here and should probably leave, but there’s one large wooden box you haven’t investigated yet. Do you want to leave the attic before it’s potentially too late, or do you want to open the box?",
        links: [{ index: 28, text: "open" }, { index: 27, text: "Leave" }],
        src: "../kate-website/assets/photos/17.png"
    },
    {
        text: "Your lungs burn as you sprint through the snow, skidding to a stop before you run into a barbed wire fence. Beyond the fence, you see a large farmhouse. Is the farmhouse safe, or does it belong to the hunters? You can’t run any farther, but could follow the fence and hopefully end up in a neighborhood. Leaning down to catch your breath, you realize that your shin is bleeding. Once you notice, you suddenly feel the sharp pain of it. While you were running you must have caught your leg on something; your pants have a large rip, exposing a laceration a few inches below your knee. You quickly clean the wound with snow and assess your options. Whether you go into the farmhouse or follow the fence, you need to make the decision fast. Where do you choose to go?",
        links: [{ index: 30, text: "Farmhouse" }, { index: 31, text: "Fence" }],
        src: "../kate-website/assets/photos/18.png"
    },
    {
        text: "You run and run until your body feels like it’s going to collapse under you. You sink to your knees and look around. The beauty of the landscape seems out of place after such a terrifying encounter. You’re in the middle of a snow-covered field, and the sun has nearly set behind the mountains. As you begin to catch your breath you notice a sickening smell and get to your feet. Somewhere near you under the snow something lies dead and decomposing. How did you not notice the smell immediately? Its pungent aroma hangs thick in the air as you scurry away from the smell of death. You see a road ahead of you, and sigh with relief. Your body is so exhausted from running that you can hardly stand. You can either try to hitchhike or keep walking along the road. What do you do?",
        links: [{ index: 32, text: "Hitchhike" }, { index: 31, text: "Walk" }],
        src: "../kate-website/assets/photos/19.png"
    },
    {
        text: "You aren’t sure how you know about the secret passageway, all you know is that you can access this escape route on the second floor and it will take you far, far away. You follow your intuition onto a landing above an indoor arboretum. Large trees grow right out of the ground a floor below you and reach toward the ceiling above you. This landing wraps around the building, offering an exquisite view of the indoor jungle, but you keep your eyes on the wall, looking for the way out. You stop in your tracks when you find it and can barely believe your eyes. It’s tiny. You don’t know how you could possibly fit inside, but the urgency of the moment forces you to try. You squeeze into the tiny gap in the stone wall, moving at an excruciatingly slow pace as your body presses awkwardly against both walls, your head grazing the ceiling. It is impossibly tight, and you begin to hyperventilate. “I can do this, I can do this,” you murmur to yourself as the minutes pass. How long is this tunnel? Your heart drums in your ears, deafening. Is it getting smaller? You are certain you’re near the end… but ten minutes later you’re still inching along. You squeeze your eyes shut, trying desperately to turn off your brain; it feels like it’s going to explode from the pressure of your rampant thoughts. You think you are going to suffocate, to get stuck in the stone tunnel, to die down here. You have two options: you can keep inching along, or you can give up, accept your fate. Which do you choose?",
        links: [{ index: 35, text: "Push Through" }, { index: 65, text: "Give up" }],
        src: "../kate-website/assets/photos/20.png"
    },
    {
        text: "You open the door and find yourself in a large library. Floors upon floors of books rise above you; shelves, staircases, and rooms, rooms, rooms. You feel like you’re inside an anthill, full of legions of workers, living and creating and learning together in one building. You want to explore, and make your way up a few flights of stairs. Groups of students study around you, and nobody looks up, yet you know you are being watched. You feel vulnerable and exposed, somehow very unsafe in this haven of books and knowledge.  You’re intrigued by the rooms around  you, some dark, some emitting glowing, colored lights. You can walk through and explore the shelves of books or venture through a dark doorway. Which do you choose?",
        links: [{ index: 23, text: "Books" }, { index: 22, text: "Dark" }],
        src: "../kate-website/assets/photos/21.png"
    },
    {
        text: "You feel like you made the wrong decision coming in here alone. The hallway is dark, and you pick up your pace. Doors line the walls on either side of you, but you don’t want to stop moving long enough to check to see if any are unlocked; you think that somebody might be following you in the dark. With a sigh of relief, you see an open doorway and know safety is only about thirty feet away. You enter the room, barely taking in your surroundings when a hand grabs your shoulder from behind. A large man flicks around a butterfly knife, pushes himself into the room, and pulls the door behind him. You back up slowly, and he creeps toward you, seemingly unaware that the door didn’t fully close. You can try to make a break for the door or you can fight your way out. Which do you choose?",
        links: [{ index: 70, text: "Run" }, { index: 7, text: "Fight" }],
        src: "../kate-website/assets/photos/22.png"
    },
    {
        text: "This is the most eclectic library you have ever seen--its shelves don’t only hold books, but also plants, fish tanks, stacks of neatly folded clothes, and insects in glass boxes. You examine a venus flytrap, and feel shivers run down your back. Something moves on your shoe and you gasp in shock. A tarantula--no, three tarantulas crawl at your feet. You swipe one off your leg and realize the tingling sensation on your spine wasn’t caused by the carnivorous plant but by eight hairy legs. You slap at your body; somehow they’re all over you. Jumping, swatting, and running, you finally think you’ve gotten them off yourself, but can’t get rid of the itchy feeling all over your body. You need to get out of this goddamn library. There’s an elevator near the information desk, and you get on. Although this building seems to have dozens of floors, there are only three buttons: 23, 2, and -8. You’re coming from floor 23, so you have two options. You can either get off on the second floor, or the eighth subfloor. Which do you choose?",
        links: [{ index: 20, text: "2" }, { index: 8, text: "-8" }],
        src: "../kate-website/assets/photos/23.png"
    },
    {
        text: "You find yourself in a colorful high school hallway lined with lockers, posters, and broken drinking fountains. A sickening knot forms in your stomach: you completely forgot about your physics class and you haven’t been all semester. You don’t even know your teacher’s name. There’s no way you can pass the class, and you need the credit in order to graduate this semester. A bell rings and everyone files into the classroom, you included. The knot in your stomach loosens when you realize that there’s no homework due. You follow the class downstairs as they embark on some sort of field trip. The excursion sounds interesting, but you really don’t want to spend the day in school and the teacher already took roll. You look for an escape route and see a doorway heading into a dark hallway. You can either follow the class downstairs or sneak off on your own. Which do you choose?",
        links: [{ index: 25, text: "Group" }, { index: 22, text: "Alone" }],
        src: "../kate-website/assets/photos/24.png"
    },
    {
        text: "The stairs take you and your classmates down the stairs to an indoor river. Little boats line the walls and a weak current pulls them around down the hall. Where does this river lead? Your teacher starts putting students in groups and assigning them to a boat. You look around, still unsure about spending the day with the class. You still have time to slip out unnoticed and explore on your own, but you have to admit that the flooded hallway is pretty cool. Do you get into a boat and see where the river takes you or do you explore on your own?",
        links: [{ index: 26, text: "Boat" }, { index: 22, text: "Alone" }],
        src: "../kate-website/assets/photos/25.png"
    },
    {
        text: "The current pulls your little boat down the hallway and into the darkness. Plants start to appear more and more densely around you, and you reach your hand out to feel the leaves between your fingers. Are you still indoors? The air smells lush and green, and the darkness feels deep. You close your eyes and lean back, breathing everything in when a horrifying boom echoes through the air, the water, the boats, and you. Before you realize what you’re doing, you’re underwater, taking cover from the gunshots that now rain down on your classmates. You swim, arms and legs moving wildly as you make you way under the line of boats and away from the sniper. The water stings your eyes as you look for a way out. When you think you’re far enough away, you come up for air, carefully keeping yourself hidden among the aquatic plants. You find a ladder and climb up and away from the river. The ladder ends and you climb onto a stone landing overlooking a courtyard. An elevator in front of you tells you you’re on the second floor. Something tells you there’s an escape route on this floor, but you don’t know why you think this. You can either take the elevator down or find the secret passageway on the second floor. Which do you choose?",
        links: [{ index: 20, text: "Passageway" }, { index: 8, text: "Elevator" }],
        src: "../kate-website/assets/photos/26.png"
    },
    {
        text: "You feel like you’re in a museum. Art lines the walls, pulling your eyes up toward the high ceilings. You walk down the stairs, noticing an ornate chest on the floor below. The closer you get to it, the more intrigued by it you become. Your fingers start to tingle as an overpowering urge to open the chest washes over you. Suddenly restless, you run your hands along the carved wood, focusing on the beautiful craftsmanship and the intricate latch. The latch creaks loudly when you try to move it… is it worth getting caught to open the chest? You hear a door close somewhere in the house and know you’ve got to be quiet. You can either open the chest or go into the nearest room. Which do you choose?",
        links: [{ index: 28, text: "Chest" }, { index: 34, text: "Door" }],
        src: "../kate-website/assets/photos/27.png"
    },
    {
        text: "Shock, disgust, and fear overpower you. Inside the box is the corpse of a dead woman. You slam the box closed and squeeze your eyes shut but it’s too late. Her face is burned into the backs of your eyelids. Her greyish, bloated face, her matted, curly hair, her unseeing white eyes… You need to get out of here: if the people in this house find you, you’ll end up like her. You can either go into the nearest room or try to escape through the house. Which way do you go?",
        links: [{ index: 34, text: "Hide in next room" }, { index: 39, text: "Escape into the house" }],
        src: "../kate-website/assets/photos/28.png"
    },
    {
        text: "Walking down the path, vegetation becomes more sparse and buildings more abundant until you enter a neighborhood. The evening is warm and you feel good. Lightning bugs flicker around you, the scattered lights looking chaotic and disorganized next to the uniformity of the suburbs. They would fit in better in the city, like you. You see a bicycle leaning against a fence. While you’re intrigued by the suburbs, you consider biking to the city where your chaos doesn’t stand out so much. You can bike or continue walking into the suburbs. Which do you choose?",
        links: [{ index: 33, text: "Bike to city" }, { index: 31, text: "Stay in suburbs" }],
        src: "../kate-website/assets/photos/29.png"
    },
    {
        text: "You make your way onto the porch and look through a single-paned window. The house seems empty, so you carefully walk in. You tiptoe through a dimly-lit living room and around a corner before you hear gruff, angry voices behind you. Whoever these people are, they probably won’t be excited to find you in their house. You can either go down the stairs or through the door to your right. Where do you go?",
        links: [{ index: 34, text: "Door" }, { index: 27, text: "Stairs" }],
        src: "../kate-website/assets/photos/30.png"
    },
    {
        text: "page You continue walking as the path takes a sharp decline. Identical houses with vinyl siding in various shades of gray emerge ahead of you. You’ve entered the suburbs. You feel claustrophobic--you can’t conform enough to fit in, and suburbanites aren’t kind to people who stand out. All of the houses seem the same, but like you, one stands out against the rest. You can go into the house or explore the suburbs. Where do you go?",
        links: [{ index: 34, text: "Into house" }, { index: 27, text: "Explore suburbs" }],
        src: "../kate-website/assets/photos/31.png"
    },
    {
        text: "As a car pulls over, you hope that the driver is friendly and not murderous. You climb into the back seat and introduce yourself to the couple up front, two beautiful women who look like they live expensive lives. They chat with you as the car winds around the lake, making you feel at ease. They show you pictures of their obese cat, Milton. You’re sad to say goodbye when they drop you off at the edge of the city. You find your bicycle where you last locked it, miraculously with both wheels intact. You can either bike around or walk downtown. Which do you choose?",
        links: [{ index: 47, text: "Bike" }, { index: 48, text: "Walk" }],
        src: "../kate-website/assets/photos/32.png"
    },
    {
        text: "You bike toward the city, weightless and free. You feel connected to your body for the first time today. The wind in your face makes you feel like you’re flying and you notice a tactile energy buzzing from your fingertips to your toes. The drivers rushing past you on the bridge have no idea what they’re missing from behind their insulated windshields. You can either bike to the city overlook or you can go directly downtown. Which do you choose?",
        links: [{ index: 47, text: "Overlook" }, { index: 48, text: "Downtown" }],
        src: "../kate-website/assets/photos/33.png"
    },
    {
        text: "You enter a small bedroom with two twin beds against the wall. Half of the room is messy, half pristine. Two very different people appear to live in this tiny space. The window is open, apparently left by someone who climbed out; a rope anchored on the bed frame leads out the window and down to the ground below. You can choose to climb out the window or take the more traditional route and escape through the house. Which way do you go?",
        links: [{ index: 38, text: "Window" }, { index: 37, text: "Different room" }],
        src: "../kate-website/assets/photos/34.png"
    },
    {
        text: "Somehow, finally, you feel the pressure of the walls ease and realize you can stand up. You find yourself inside of a closet looking out into a stranger’s room. The bedroom is fairly tidy except for a pile of clothes on the floor. Your heart is still hammering in your chest from the ordeal of the tiny tunnel and you feel like you’re going to explode if you don’t breathe in fresh, clean air soon. You know that you aren’t supposed to be in the house and need to get out without detection. There is a window above the bed and a door to your left. You can climb out through the window or escape through a different room in the house. Which do you choose?",
        links: [{ index: 36, text: "Window" }, { index: 37, text: "Different room" }],
        src: "../kate-website/assets/photos/35.png"
    },
    {
        text: "Climbing onto the roof, you realize that you’ve made a big mistake. The wind is so strong it’s hard to keep your balance and there doesn't appear to be an easy way down. You’re only on the second floor but that’s still a big fall. Bracing yourself against the wind, you inch away from the window. A column supports the awning over the porch. You can try to slide down the column or you can go back through the house to try and find a safer escape route. Which do you choose?",
        links: [{ index: 38, text: "Column" }, { index: 39, text: "Different route" }],
        src: "../kate-website/assets/photos/36.png"
    },
    {
        text: "You go downstairs, cautiously walking close to the walls to avoid the floor creaking. As you enter a living room, you hear voices. Your entire body tenses up, even your ears and fingernails are on edge. Somehow you know that if you’re caught you’ll get hurt. Scared of being seen, you look for a way out. There is a crawl space to your right and a door to your left. You can go through either, but you have to choose fast. Which do you choose?",
        links: [{ index: 45, text: "Crawl space" }, { index: 39, text: "Door" }],
        src: "../kate-website/assets/photos/37.png"
    },
    {
        text: "Your feet slip and you crash to the ground. The wind is knocked out of your lungs; you gasp for breath. The entire left side of your body feels bruised. Lying on your back and gazing up, you are struck by how incredible the sky looks above you. You feel like shit, but at least you feel like shit here. After you can breathe normally again, you stand up and look around. You’re in the suburbs, and the evening light is so lovely that even the identical vinyl-sided houses seem beautiful. You can walk through the neighborhood or try to make your way to the city. Which do you choose?",
        links: [{ index: 40, text: "Neighborhood" }, { index: 43, text: "City" }],
        src: "../kate-website/assets/photos/38.png"
    },
    {
        text: "You aren’t stealthy enough; you’re spotted by the owner of the house. You run, but he’s faster. As you open the front door, he grabs you by the shoulder and lands a hefty blow to the side of your head. It feels like all of your thoughts are going to explode out of your brain, and you try to shield yourself. Erupting with profanities, he pushes you to the ground and lands a heavy kick to your stomach. Gasping for air, you scuttle to your feet and sprint off the porch and down the street. Luckily, he doesn’t leave his doorstep, just yells threats in your direction. You round the corner then sit down on the sidewalk, catching your breath and taking stock of your surroundings. You’re in a familiar suburban neighborhood within biking distance to the city. Your head and body ache but you’re otherwise unharmed. You can explore the neighborhood or find a bike and cycle into the city. Which do you choose?",
        links: [{ index: 40, text: "Neighborhood" }, { index: 43, text: "City" }],
        src: "../kate-website/assets/photos/39.png"
    },
    {
        text: "As you walk down the residential street, you see two kids playing in their front yard. Beyond them, an animal prowls. You don’t believe your eyes: a polar bear slinks down the street, getting closer and closer to the children. You’re more scared than you are surprised, panic edging out confusion. The bear looks hungry enough to eat all of the neighborhood children and still have room for dessert. How can you get the kids inside before the bear tears them apart? The bear doesn’t seem to have noticed you yet, but you know it’s only a matter of time. You try to decide the best plan of action: you can move quietly and slowly to get everyone inside without attracting the attention of the polar bear, or you can move as fast as possible but risk being seen and heard more easily. What do you do?",
        links: [{ index: 41, text: "Quiet" }, { index: 42, text: "Fast" }],
        src: "../kate-website/assets/photos/40.png"
    },
    {
        text: "You get the attention of the two children, motioning for them to stay quiet. You point at the bear then at the house behind them. The kids get up, and you shepherd them toward the front door, but they’re moving too slowly. You look behind you to see the polar bear charging. You pick up the smaller child, the other kid already halfway to the door. As he makes it inside, your shoe catches on the front porch stair and you fall, the small child tumbling out of your arms towards the door.  Before you can move, the bear pounces. You brace for impact, but it lunges over you toward the porch where the kids were just moments ago. Did they both make it inside? Doubt creeps in but you tell yourself that they did. Before the polar bear turns around, you scramble to your feet and start running. You can either try to seek refuge in one of the houses in the neighborhood or continue running. What do you do?",
        links: [{ index: 44, text: "House" }, { index: 19, text: "Run to the city" }],
        src: "../kate-website/assets/photos/41.png"
    },
    {
        text: "“Run!” You yell, sprinting toward the kids. They scurry toward the house with you taking up the rear. The bear notices you and starts to charge. You grab the hand of the smaller child, the other kid already halfway to the door. The kids are fast, but not fast enough. The polar bear lets out an awful sound and swings its arms wildly, standing ten feet tall. Before you even realize what is happening, a heavy swat in your direction forces you to the ground and the bear pounces. You brace for impact, but it lunges over you toward the porch where the kids were just moments ago. Did they make it inside? Doubt creeps in but you tell yourself that they did. Before the polar bear turns around, you scramble to your feet and start running. You can either try to seek refuge in one of the houses in the neighborhood or continue running. What do you do?",
        links: [{ index: 44, text: "House" }, { index: 19, text: "Run to the city" }],
        src: "../kate-website/assets/photos/42.png"
    },
    {
        text: "You follow a chain link fence through a backyard to a gorgeous bike, conveniently unlocked. You examine the bicycle: a red alloy-frame fixed gear. Getting on the bike makes you forget how awful today has been and you feel connected to your body in a way you haven’t felt in a long time. You race down the street, passing cars as the steep decline brings your bike to 30 miles per hour… now 35… You are free and full of life. Miles go by effortlessly as you enter the city. You can bike to your favorite overlook or follow the main road downtown. Which do you choose?",
        links: [{ index: 47, text: "Overlook" }, { index: 48, text: "Downtown" }],
        src: "../kate-website/assets/photos/43.png"
    },
    {
        text: "You look around the house curiously but stop abruptly when you see a familiar silhouette: the man you are most afraid of. Ducking out of his sight, you open the first door you see and enter a child’s bedroom. The setting sun shines through the window, casting an ominous orange glow into the room. Panic makes your blood freeze; you imagine the ice crystals traveling through your veins. You need to hide. The bed frame is too close to the ground for you to fit under. There is a crawl space in the corner that you can hide in, or you can try to hide in another room. Where do you go?",
        links: [{ index: 45, text: "Crawlspace" }, { index: 46, text: "Other room" }],
        src: "../kate-website/assets/photos/44.png"
    },
    {
        text: "The walls and ceiling of the crawl space have been turned into a panoramic chalkboard. Letters, numbers, and pictures cover all surfaces, smeared with little handprints. There are two escape tunnels emanating colored light, but both are ridiculously small. The one on the left is so short you’d have to crawl on your belly to get through, and the one on the right is so thin you’d have to walk sideways. Somehow you know that the tunnels will take you to the city, and the thought of being in a space that tight for so long makes you shiver. You try to look down the tunnels to see how long they are, but the light is too bright for you to see anything. You have no choice but to go down either the short or the thin tunnel. Which do you choose?",
        links: [{ index: 47, text: "Tall and thin" }, { index: 48, text: "Short and wide" }],
        src: "../kate-website/assets/photos/45.png"
    },
    {
        text: "You stop walking when you begin to feel nervous and dizzy… that smell always makes you dizzy. You smell him behind you before you feel him: expensive tequila and cheap cologne. Two heavy arms trap you in a chokehold of a hug. His drunken breath is hot on your neck-- solid, dense, and violent. He whispers in your ear. “Why do you hate me?” Your brain screams, your body screams; your voice can’t make a sound. You need to get out. You can fight your way out, or simply disappear.",
        links: [{ index: 7, text: "Fight" }, { index: 65, text: "Disappear" }],
        src: "../kate-website/assets/photos/46.png"
    },
    {
        text: "Suddenly you’re here. The city. You can see so much and so little all at once. The noises of transportation and industry create a beautiful cacophony around you. You feel excited, hopeful, and energized. All of the terrible things you’ve experienced today fade from your memory. You sit and watch the sun set behind the city skyline until you begin to feel a little chilly. You decide to bike to one of your favorite spots where you know you'll find some friends. You can either go to the top of the parking garage on Jefferson or you can bike to the empty pool behind the old YMCA. Where do you want to go?",
        links: [{ index: 49, text: "Parking garage" }, { index: 50, text: "Pool" }],
        src: "../kate-website/assets/photos/47.png"
    },
    {
        text: "You breathe in the thick city air and are stopped in your tracks by sirens and flashing lights. It’s hard to know who to trust, but one thing is certain: The police are not your friends. You turn down an alley as a line of cop cars speeds past. There’s a man next to you on the sidewalk drinking a beer, and he waves you over. You sit down, instinctively trusting him. He warns you to stay out of sight from the police, especially tonight. The two of you move to the other side of the dumpster to stay out of view. You can stay here where you feel relatively safe or you can bike further into the city and try to avoid the cops. Which do you choose?",
        links: [{ index: 51, text: "Stay" }, { index: 55, text: "Bike" }],
        src: "../kate-website/assets/photos/48.png"
    },
    {
        text: "You bike in circles, up and up though the concrete parking garage and onto the roof. A group of your friends are already here, racing and showing off to each other. Your friends embrace you; you haven’t seen each other in months. You feel ecstatic. The summer night is so full of life, and surrounded by people you love, you couldn’t be happier. A friend invites you to pay five bucks to participate in a race, winner takes all the money. You can sit with your friends at the parking garage or you can race. Which do you choose?",
        links: [{ index: 52, text: "Sit" }, { index: 55, text: "Race" }],
        src: "../kate-website/assets/photos/49.png"
    },
    {
        text: "You struggle to get both yourself and your bike through the gap in the chain link fence surrounding the old YMCA. Your friends’ voices echo from the bottom of the pool and you bike to the shallow side to get in. You’re excited to see your friends, relieved that they’re safe and happy. You sit and share beer, snacks, and stories. You feel content and relaxed until you see flashing red and blue lights above you. In this city, order is enforced through police violence. You need to get out before you get caught. You can leave your bike at the bottom of the pool and follow a friend out, or you can try to escape with your bicycle. Which do you choose?",
        links: [{ index: 56, text: "Leave" }, { index: 54, text: "Take bike" }],
        src: "../kate-website/assets/photos/50.png"
    },
    {
        text: "You’re in an alley, feeling safe and content, despite the trash and graffiti. Your new friend offers you a beer, and the two of you discuss the current political fiasco. Your life and livelihood are completely out of your control, but you feel a strange sense of peace talking about the future. After your friend leaves, you listen to the sounds of the city, imagining a concert of urban noise. When sirens blare past, you decide it’s time to leave. You can bike around the city or go to the train station. Which do you choose?",
        links: [{ index: 55, text: "Bike" }, { index: 57, text: "Train" }],
        src: "../kate-website/assets/photos/51.png"
    },
    {
        text: "You sit at the top of the parking garage looking down at the street below. You feel invincible. You enjoy the colorful lights until the familiar pattern of blue and red makes you freeze. You hear the gunshots before you see the police. Surprise turns to horror as you realize the cops were shooting at the bikers who left to race. Most make it away but you see a few of your friends handcuffed and forced into the backs of cars. One cruiser starts making its way up the parking garage, and you begin to panic. You can exit down the stairwell and into the subway station or try to bike past them and away--after all, you’re faster and more agile on a bike than on foot. Which do you choose?",
        links: [{ index: 53, text: "Bike" }, { index: 57, text: "Train" }],
        src: "../kate-website/assets/photos/52.png"
    },
    {
        text: "You race down the parking garage, gaining speed with each floor. As you make a sharp turn at the exit, you see flashing lights and hear gunshots. Swerving into the left land and around another corner, you get out of the line of fire before your front wheel gets caught in a street drain. As your bike stops, you’re launched forward and you hit the pavement hard. Your elbow and forearm are bleeding, but you’re okay. Lying on the sidewalk you look at the building above you, obscured by bright lights and dirty air. You allow yourself a moment to catch your breath, but you can’t stay here.You can go toward the train station or continue biking around the city. Which do you choose?",
        links: [{ index: 55, text: "Bike" }, { index: 57, text: "Train" }],
        src: "../kate-website/assets/photos/53.png"
    },
    {
        text: "You balance the crossbar of your bike on your shoulder and start climbing up the ladder, wrapping your arm around the back for balance and using your legs to climb. Your strength surprises you and you’re at the top in no time. You bike around the basketball courts and to the back fence, escaping just as the police get to the pool. Speeding through the streets, you make sure to get enough distance between yourself and the cops before stopping to catch your breath. You can choose to go to the train station or continue biking around the city. Which do you choose?",
        links: [{ index: 55, text: "Explore" }, { index: 57, text: "Train station" }],
        src: "../kate-website/assets/photos/54.png"
    },
    {
        text: "Nothing makes you feel more alive than biking. You are strong, independent, and powerful. You race down streets, paying no attention to stoplights; you know when it’s safe to go. The city seems like it was built just for you in this exact moment. The lights are dazzling and the shadows have lives of their own. Cars, buildings, people, noises, smells… everything feels right. You can bike to a party your friend is hosting or you can keep exploring the streets. Which do you choose?",
        links: [{ index: 66, text: "Party" }, { index: 56, text: "Explore" }],
        src: "../kate-website/assets/photos/55.png"
    },
    {
        text: "You wander the streets until you find a familiar building. It stands four stories tall with ornate stonework, probably built in the early twentieth century. Twelve large windows with tinted glass shine different colors onto the street below. Something echoes from inside. Intrigued, you walk toward the noise. The air sharpens; a sudden air of foreboding makes you feel on edge the moment you walk in. Something unsettling is happening here. Wooden stairs lead upward in the corner of the building, and you feel drawn to them, thinking they may offer you more safety. You can go up the stairs or explore the noise on the main floor. Where do you go?",
        links: [{ index: 60, text: "Floor" }, { index: 61, text: "Upstairs" }],
        src: "../kate-website/assets/photos/56.png"
    },
    {
        text: "You get on the first inbound train, cautiously looking around. After the night you’ve had, you can’t be too vigilant. A young man keeps nodding and waving at you, and while it’s probably non-threatening, you decide to change trains. It’s a short ride to the central station, and once you’re there you walk to a different platform. The inbound train is coming in three minutes and the outbound train is coming in seven. Waiting makes you feel vulnerable and you tap your foot nervously to relieve some anxious energy. Deep breathing doesn’t make you feel better. Finally, the inbound train arrives. You can choose to get on the train or wait four more minutes for the outbound train. Which do you choose?",
        links: [{ index: 58, text: "Outbound" }, { index: 59, text: "Inbound" }],
        src: "../kate-website/assets/photos/57.png"
    },
    {
        text: "You feel relief as the train takes you away from the city. Leaning back into the chair, you doze off. By the time you wake up, the train has arrived in the suburbs. You can choose to get off here or continue to the next stop, along a walking trail. Which do you choose?",
        links: [{ index: 29, text: "Here" }, { index: 14, text: "Next" }],
        src: "../kate-website/assets/photos/58.png"
    },
    {
        text: "As the train pulls to a stop, transit police board, fining everybody without a ticket. You exit and start walking down the street. A group of men begin walking behind you and you pick up your pace. This part of the city is dark, neglected, and industrial. Some grass grows through the cracks in the cement, but beyond that you are struck by how lifeless a place can be that houses thousands of people, millions of stories. You see a large beautiful building in front of you. You can either go in the building or walk to a party a few blocks away. What do you want to do?",
        links: [{ index: 61, text: "Building" }, { index: 66, text: "Party" }],
        src: "../kate-website/assets/photos/59.png"
    },
    {
        text: "You enter the main floor of the building, a large open room with vaulted ceilings. Is it a chapel or a courtroom? As you walk to the front of the room, three men on the stand address you. “We know that you are guilty,” one says, “it was your fault.” Before you know what’s happening, the trial begins. You look around the room to see a jury of your peers, people from high school you had long forgotten. “It was your fault,” a second man echoes, and your heart begins to race. Are they right? Sometimes you feel like it was your fault, but you know you aren’t guilty. The third man looks deep in your eyes, as if searching for something. “We’ll give you a deal if you plea guilty. You can go free. All that you need to do is admit that it was your fault.” the crowd waits for your response. You can plea guilty or plead not guilty. Which do you choose?",
        links: [{ index: 62, text: "Guilty" }, { index: 63, text: "Not guilty" }],
        src: "../kate-website/assets/photos/60.png"
    },
    {
        text: "You go upstairs and recognize the space. Rows of cubicles fill the room, colorful curtains offering a pretense of privacy for the people renting each “apartment,” if you can call an eight by eight foot cubicle an apartment. Each is fitted with a murphy-style twin bed and set of drawers, and besides that look completely unique from each other. You make your way to a familiar cubicle on the northeast side of the building. Cluttered and tiny, you couldn’t see a more beautiful site: a space of your own. How long have you been renting this apartment? How long has it been since you have slept here? You’re so tired and want to crawl into your safe space and sleep, but a glowing light draws your attention to the stairs. You can go to sleep or follow the light upstairs. Which do you choose?",
        links: [{ index: 65, text: "Sleep" }, { index: 4, text: "Upstairs" }],
        src: "../kate-website/assets/photos/61.png"
    },
    {
        text: "You are found guilty. Police escort you off the floor and up an elevator. You are lead to a small room at the top of a skyscraper. The cops lock you in and stand guard; glass walls allow them to keep watch. You see the city below, and as you look down you realize there’s no way out. Panic overpowers you and you collapse on the ground, hyperventilating and shaking. You feel hopeless, scared, and out of control. You don’t know what to do. Trying to get out past the police seems futile, but it's the only option you can think of. You curl up in a fetal position. You can try to get out past the police, or you can shut out everything and try to fall asleep. What do you do?",
        links: [{ index: 64, text: "Escape" }, { index: 65, text: "Sleep" }],
        src: "../kate-website/assets/photos/62.png"
    },
    {
        text: "You are found guilty. Police escort you into another room, and suddenly the thought occurs to you that they won’t really let you walk free. Laws are enforced through violence and you broke the law. Panicking, you look for a way out and see an elevator with its doors open behind the police. You can either try to escape out the elevator or trust that the police will hold up their end of the plea deal. Which do you choose?",
        links: [{ index: 70, text: "Escape" }, { index: 64, text: "Trust" }],
        src: "../kate-website/assets/photos/63.png"
    },
    {
        text: "A painful blow hits you from behind and you fall to your knees. Looking up, you see the cops standing above you brandishing weapons. You Close your eyes before a police baton makes impact with your cheekbone, and suddenly they’re on top of you, holding you down and landing punch after painful punch. You curl up to protect yourself. The sounds, the pain, and the lights start to fade to black as you lose consciousness. You wake up alone in the room, bruised and bloody, but alive. You can choose to leave the room before the cops come back or you can block everything out and slip back into unconsciousness. Which do you choose?",
        links: [{ index: 4, text: "Escape" }, { index: 65, text: "Sleep" }],
        src: "../kate-website/assets/photos/64.png"
    },
    {
        text: "You pull your knees to your chest and tuck your head down. It’s too much. Everything. Too loud, too bright, too painful, and too out of your control. You need to escape. You inhale deeply through your nose and exhale through your mouth, squeezing your eyes shut and bracing yourself against the world. The darkness is hopeful: you want to stop existing. Your heartbeat slows and your breathing gets deeper. You slip in and out of consciousness.. You can exit the dream or allow sleep to take you.",
        links: [{ index: 1, text: "Sleep" }],
        src: "../kate-website/assets/photos/65.png"
    },
    {
        text: "You are standing outside an apartment building in the dark. The red light on the matinee is both beautiful and ominous. You love throwing parties where you know everyone, but parties hosted by strangers make you anxious. You like to drink a little before you talk to anybody; you find it makes conversations come easier. After the long day you’ve had, you can’t wait to relax with friends. You can go into the kitchen and take a shot or go into the living room. Which do you choose?",
        links: [{ index: 67, text: "kitchen" }, { index: 68, text: "Living room" }],
        src: "../kate-website/assets/photos/66.png"
    },
    {
        text: "You walk into the kitchen and pour yourself a shot of gin. It burns your throat but leaves you feeling so warm you decide to pour another. A man walks in and introduces himself with his name and job title. You promptly forget both. He notices your bike and begins to explain the form and function of a bicycle. Luckily, it’s extremely easy to drown out his words. In fact, you’re having trouble seeing and hearing him at all. His face doubles in front of you, swimming in your vision. You only had two shots… Why are you this drunk? What was in that gin? Everything spins as you stumble toward the living room. You can find somewhere to sit in the living room or you can get some air on the fire escape. Which do you choose?",
        links: [{ index: 46, text: "Living room" }, { index: 69, text: "Fire escape" }],
        src: "../kate-website/assets/photos/67.png"
    },
    {
        text: "You walk into a dimly lit room with about ten people milling around. A TV in the corner plays music videos. A familiar group of friends are sitting on the floor sharing a bottle of wine, and you join them. As the minutes pass, the empty space shrinks until the room is packed with people. You block out most of the noise to listen to your friend speak until you hear a loud laugh you know too well. The man you are afraid of most has an exuberant laugh full of energy that makes you feel sick to your stomach. You need to get away from here. You can take the door to your left or exit to the elevator. Which do you choose?",
        links: [{ index: 46, text: "Door" }, { index: 70, text: "Elevator" }],
        src: "../kate-website/assets/photos/68.png"
    },
    {
        text: "You stumble out onto the fire escape and breathe in the cold air. You’ve had enough of the party, and you’re exhausted. It’s time to leave. You climb down the fire escape, carefully jumping onto the ground. You can walk east toward the train station or west and see what you find there. Which do you choose?",
        links: [{ index: 57, text: "East" }, { index: 56, text: "West" }],
        src: "../kate-website/assets/photos/69.png"
    },
    {
        text: "You sprint from the room and into the elevator, slamming the buttons until the door closes, taking you away from danger. You take a deep breath and try to relax; somehow the bright colors of the elevator make you feel braver. Emboldened, you regain your composure and quickly leave once the doors open to the lobby. You can either go west toward the train station or east, towards the suburbs. Which do you choose?",
        links: [{ index: 57, text: "West" }, { index: 31, text: "East" }],
        src: "../kate-website/assets/photos/70.png"
    },
    {
        text: "You need to get out of here. Climbing the ladder, you lose yourself in your thoughts until you realize you’re hundreds of feet up in the air. The top is still nowhere in sight. Your hands begin to tingle and twitch, making it difficult for you to grip the ladder. You begin to count each rung to focus, moving your hands then your feet, nervous that your sweaty, numb palms are going to slip off the ladder, making you fall down, down, down. A rattle above you and the blare of sirens makes you look up. Small shafts of light shine on you through the ceiling about a hundred yards above you. Are you below a grate under the city? Halfway between you and the light, you see a landing. To get to it, you’ll have to jump from the ladder, but that might be easier than escaping onto the street above you. You can either jump onto the landing and go through the door there or see if you can move the grate above you and escape onto the street. Where do you go?",
        links: [{ index: 9, text: "Door" }, { index: 47, text: "Grate" }],
        src: "../kate-website/assets/photos/71.png"
    },
];



let pageDiv = document.getElementById("page");
let disclaimerBtnt = document.getElementById("disclaimer-btn-t");
let mainBtnd = document.getElementById("main-btn-d");
let mainBtnc = document.getElementById("main-btn-c");
let creditsBtnd = document.getElementById("credits-btn-d");
let creditsBtnm = document.getElementById("credits-btn-m");
let titleBtnd = document.getElementById("title-btn-d");
let titleBtnc = document.getElementById("title-btn-c");
let curPage = pages[0];
let jslinks = document.getElementById("js-links");
let textbox = document.getElementById("text-box");
let buttonsNotMade = true;
let image = document.getElementById("my-image");







function displayCredits() {
    if (!buttonsNotMade) {
        jslinks.childNodes[0].style.display = "none";
        jslinks.childNodes[1].style.display = "none";
    };

    document.getElementById("title-page").style.display = "none";
    document.getElementById("disclaimer").style.display = "none";
    document.getElementById("main-body").style.display = "none";
    document.getElementById("credits").style.display = "block";

    titleBtnc.addEventListener("click", displayTitle);
    mainBtnc.addEventListener("click", pageReset);

};

function pageReset() {
    curPage = pages[0];
    displayMain(curPage);
};

function displayMain(curPage) {
    document.getElementById("title-page").style.display = "none";
    document.getElementById("disclaimer").style.display = "none";
    document.getElementById("main-body").style.display = "block";
    document.getElementById("credits").style.display = "none";

    textbox.innerHTML = "<p>" + curPage.text + "</p>";
    image.src = curPage.src;

    var delayInMilliseconds = 5000;

    setTimeout(function () {
        if (buttonsNotMade) {

            curPage.links.forEach(link => {
                var button = document.createElement("button");
                button.style.background = "none";
                button.style.borderColor = "#ff00A6";
                button.style.color = "#ff00A6";
                button.style.fontSize = "1.8vw";
                button.style.fontFamily = "Franklin Gothic Light', 'Arial Narrow', Arial, sans-serif";
                button.style.borderRadius = "0.4vw";
                button.style.boxShadow = "none";
                button.style.textTransform = "uppercase";
                button.style.outline = "none";
                jslinks.append(button);
            });
            jslinks.childNodes[0].style.float = "left";
            jslinks.childNodes[1].style.float = "right";
            jslinks.childNodes[0].onmouseover = function () {
                jslinks.childNodes[0].style.textShadow = "0.13vw 0.13vw 0.3vw #ff00A6";
                jslinks.childNodes[0].style.boxShadow = "0 0 0.8vw #ff00A6";
            }
            jslinks.childNodes[1].onmouseover = function () {
                jslinks.childNodes[1].style.textShadow = "0.13vw 0.13vw 0.3vw #ff00A6";
                jslinks.childNodes[1].style.boxShadow = "0 0 0.8vw #ff00A6";
            }

            jslinks.childNodes[0].onmouseout = function () {
                jslinks.childNodes[0].style.textShadow = "none";
                jslinks.childNodes[0].style.boxShadow = "none";
            }
            jslinks.childNodes[1].onmouseout = function () {
                jslinks.childNodes[1].style.textShadow = "none";
                jslinks.childNodes[1].style.boxShadow = "none";
            }
        }
        else {
            jslinks.childNodes[0].style.display = "block";
            jslinks.childNodes[1].style.display = "block";
        }

        jslinks.childNodes[0].textContent = curPage.links[0].text;
        jslinks.childNodes[1].textContent = curPage.links[1].text;

        jslinks.childNodes[0].addEventListener("click", function () { getnextPage(curPage.links[0].index) });
        jslinks.childNodes[1].addEventListener("click", function () { getnextPage(curPage.links[1].index) });

        buttonsNotMade = false;
    }, delayInMilliseconds);

    creditsBtnm.addEventListener("click", displayCredits);

};


function getnextPage(buttonClicked) {
    curPage = pages[buttonClicked - 1];

    jslinks.childNodes[0].style.display = "none";
    jslinks.childNodes[1].style.display = "none";


    displayMain(curPage);
};


function displayDisclaimer() {
    document.getElementById("title-page").style.display = "none";
    document.getElementById("disclaimer").style.display = "block";
    document.getElementById("main-body").style.display = "none";
    document.getElementById("credits").style.display = "none";

    curPage = pages[0];

    mainBtnd.addEventListener("click", function () { displayMain(curPage) });
    titleBtnd.addEventListener("click", displayTitle);
    creditsBtnd.addEventListener("click", displayCredits);

};

function displayTitle() {
    document.getElementById("title-page").style.display = "block";
    document.getElementById("disclaimer").style.display = "none";
    document.getElementById("main-body").style.display = "none";
    document.getElementById("credits").style.display = "none";

    disclaimerBtnt.addEventListener("click", displayDisclaimer);
};

displayTitle();
