//variables

//Variables we load and save;
layout = {};
world = {};
monster = {};

//Male titles
var titlesMale = [
	"Doctor" , 
	"Dr." , 
	"Sir" , 
	"Mr." , 
	"Mister" ,  
	"Master" , 
	"Librarian" , 
	"Prof." , 
	"Professor" , 
	"Lord" ,
	"Saint" ,
	"Nobel" ,
	"Brave" ,
	"Legendary" ,
	"Fry Cook" ,
	"Clerk" ,
	"Associate" ,
	"Volunteer" ,
	"Hourly" ,
	"Spot-Op",
	"Desk Jocky",
	"Manager",
	"Well-Read"
];

//Female titles
var titlesFemale = [
	"Mrs." ,
	"Ms." ,
	"Lady" ,
	"Prof." ,
	"Professor" ,
	"Dr." ,
	"Doctor" ,
	"Madam" ,
	"Ma'am" ,
	"Librarian",
	"Saint" ,
	"Nobel" ,
	"Brave" ,
	"Legendary" ,
	"Fry Cook" ,
	"Clerk" ,
	"Associate" ,
	"Volunteer" ,
	"Hourly" ,
	"Spot-Op",
	"Desk Jocky",
	"Manager",
	"Well-Read"
];

//First names
var namesFirst = [
  "Greg",
  "Stephen",
  "Frank",
  "Stuart",
  "Donald",
  "Bob",
  "Robert",
  "Nancy",
  "Colleen",
  "Clayton",
  "Brittany",
  "Alisha",
  "Keisha",
  "Ashley",
  "Ashleigh",
  "Steven",
  "Kevin",
  "Kirsten",
  "Kristen",
  "Kelly",
  "Mellisa",
  "Melvin",
  "Gregory",
  "Davin",
  "Soap",
  "Allegory",
  "Kincaid",
  "Annie",
  "Lauren",
  "Mud",
  "Banana",
  "Kerrigor",
  "Ellen",
  "Edward",
  "Edwardo",
  "Jesus",
  "Julio",
  "Grace",
  "Selma",
  "Velma",
  "Deb",
  "Debby",
  "Debera",
  "Barbera",
  "Evin",
  "Evan",
  "Box",
  "Fisk",
  "Apple",
  "Dime",
  "Megan",
  "Meg",
  "Gavin",
  "Devin",
  "MotherTrucker",
  "Chelsie",
  "Kelsi",
  "Martin",
  "Andrew",
  "Levi",
  "Lindsey",
  "Box",
  "Garion",
  "Belgarath",
  "Polgara",
  "Sips",
  "Ron",
  "Bobert",
  "Dessert",
  "Hungry",
  "Hobo",
  "Biceps",
  "No Name",
  "Gary",
  "Snail",
  "Tiger",
  "Elephant",
  "Ant-Eater",
  "Jaws",
  "Simon",
  "Lewis",
  "Terps",
  "Kim",
  "Kimstopher",
  "Duncan",
  "Hannah",
  "Santa",
  "Nicolas",
  "Claus",
  "Edginald",
  "Rudolph",
  "Mark",
  "Charles",
  "Morgan",
  "Troy",
  "Denny",
  "Brad",
  "Heather",
  "Jennifer",
  "Sunshine",
  "Wine",
  "Pear",
  "Plum",
  "Tony",
  "Whiskey",
  "Tequila",
  "Snapps",
  "Vodka",
  "Gin",
  "Mead",
  "Jimmy",
  "Kyle",
  "Winapeg",
  "Shawnda",
  "Ice-Cream-Smoothy",
  "Johnson",
  "Doctor",
  "Lewis",
  "Stubble",
  "Snaggle",
  "Stump",
  "Wick",
  "John",
  "Gwamp",
  "Cash",
  "Money",
  "Benjamin",
  "Penny",
  "Dime",
  "Nickle",
  "Quarter",
  "Quota",
  "Snack",
  "Master",
  "Brick",
  "Cobble",
  "Gravel"
];

//Surname suffix
var suffix = [
	"Le",
	"Mac",
	"Mc",
	"Da",
	"Dumb"
];

//Last names
var namesLast = [
  "Rockgouger",
  "Mason",
  "Smith",
  "Motherfucker",
  "Jones",
  "Meadows",
  "Swordswallower",
  "Becker",
  "Heim",
  "Morales",
  "Lefty",
  "Stone",
  "Poop",
  "Warshtishiremirepirefireliar",
  "Deacon",
  "Embergrab",
  "Kennedy",
  "Green",
  "Orange",
  "Blue",
  "Purple",
  "Sword",
  "Axe",
  "Kimmel",
  "Lee",
  "Johnson",
  "Decker",
  "Grub",
  "Eater",
  "Dier",
  "Yellow",
  "Bellyacher",
  "Arrow",
  "Flint",
  "Paper",
  "Rock",
  "Banana",
  "Mud",
  "Munson",
  "Small",
  "Nystrom",
  "Brimley",
  "Brimly",
  "Mustache",
  "Mulder",
  "Cambell",
  "Hitchcock",
  "Comstock",
  "Driftwood",
  "Large",
  "Moonshine",
  "Hamm",
  "Cooper",
  "Myers",
  "Poofball",
  "Noodle",
  "Yam",
  "Tumbleweed",
  "Weed",
  "Hasslecough",
  "Taco",
  "Albatross",
  "Hemmingpath",
  "Frost",
  "Hawespike",
  "Cooper",
  "Vick",
  "Trite",
  "Midnight",
  "Abyss",
  "Void",
  "Absent"
];


//Genres
var genre = [
	"Western",
	"Sci-Fi",
	"Speculative Fiction",
	"Literature",
	"YA",
	"NA",
	"Romance",
	"Non-Fiction",
	"Children's Fiction",
	"Action",
	"Religion",
	"Historical Fiction",
	"Holy Text",
	"Post-post-modern",
	"High Fantasy",
	"Autobiography",
	"Biography",
	"Reference Book",
	"Dictionary",
	"Pamphlet",
	"Manual",
	"Poem",
	"Play"
];

//Conflict Structures
var conStruct = [
	"Person vs Person",
	"Person vs Nature",
	"Person vs God",
	"Person vs Self"
];

//Settings
var setting = [
	"Space",
	"Jersey",
	"London",
	"A Waterfall",
	"The Jungle",
	"The Bedroom",
	"An Apartment"
];

//monster species
var monSpec = [
  "Goblin",
  "Dragon",
  "Sphinx",
  "Manticore",
  "Protester",
  "Orc",
  "Elf",
  "Dwarf",
  "Vampire",
  "Werewolf",
  "Wizard",
  "Bandit",
  "Rotten Fruit Bowl",
  "Turtle Biker",
  "Creeper",
  "Mooshroom",
  "Pig",
  "Sheep",
  "Cow",
  "Chicken",
  "Chuck",
  "Bat",
  "Zombie",
  "Skeleton",
  "Skellington",
  "Your Mum",
  "Your Mother",
  "Dirty Joke",
  "Foe",
  "Honeydew",
  "Desk",
  "Chair",
  "Drawer",
  "Pants",
  "Mop",
  "Newt",
  "Cthulu",
  "Elder God",
  "Bob",
  "Boggart",
  "Basilisk",
  "Centaur",
  "Cyclops",
  "Cockatrice",
  "Cerberus",
  "Dinner Roll",
  "Dryad",
  "Ent",
  "Fairy",
  "Faun",
  "Giant",
  "Gryphon",
  "Gremlin",
  "Gnome",
  "Gnasher",
  "Gargoyle",
  "Harpy",
  "Hydra",
  "Jackalope",
  "Leviathan",
  "Sand-worm",
  "Mermaid",
  "Merman",
  "Minotaur",
  "Mummy",
  "Mothman",
  "Naga",
  "Ogre",
  "Phoenix",
  "Pixie",
  "Roc",
  "Salamander",
  "Troll",
  "Unicorn",
  "Wendigo",
  "Wyvern",
  "Zombie",
  "Yeti",
  "Mall Santa",
  "ASCII Graphics",
  "Reigndeer",
  "Distant Relative",
  "Sales Clerk",
  "Overly Chipper Morning DJ",
  "Overly Aggressive Animatronic Nativity Jesus",
  "Fried Chicken",
  "Holiday Ham",
  "Holiday Themed Hamm",
  "Candy Bar",
  "Sleigh",
  "Sandwich",
  "Mistle Toe",
  "Evergreen Tree",
  "Oak Tree",
  "Very Large Bush",
  "Strong Wind",
  "Blizzard",
  "Snow Man",
  "An Old Priest, A New Priest, A Rabbi, and A Depressed Priest",
  "Txt MsG AU70-C0RR3C7",
  "Jangle Bells",
  "Tango Bells",
  "Mango Bells",
  "Bingo Bells",
  "Dingo Bells",
  "Tea-Time",
  "Claymation Figure",
  "Enchanted Hat",
  "Wizard's Apprentice",
  "Vague General Fear",
  "Icy Road",
  "Jingle Bells",
  "Mingle Bells",
  "Mangle Bells",
  "Insensitive Grizzly Bear",
  "Workshop Elf",
  "Lumberjack",
  "Lumberjane",
  "Leftovers",
  "Someone Else's Seven Evil Exes",
  "Snow Drift",
  "Zombified Relative",
  "Human Compassion",
  "Depression",
  "Aunt Margaret",
  "Rogue Water Hose",
  "Mountainous Mole-Hill",
  "Duck",
  "Octo-Palegic Octopus",
  "Zebra",
  "Sleep Deprived Over-Caffinated College Student",
  "Cowboy",
  "Snowboy",
  "Snow Cowboy",
  "Snow Covered Cowboy",
  "Accountant",
  "Lawyer",
  "Caffinated Child",
  "Overlong Sitcom",
  "Blanket",
  "Burrito",
  "A cold morning under warm blankets",
  "Prescription Glasses",
  "Zombified Turnip",
  "Nutritious Carrot",
  "Cake",
  "Peas",
  "Peace",
  "World Peace",
  "Reheated Homework",
  "Birthday",
  "Salutation",
  "Hello",
  "Agoraphobia",
  "Friendship",
  "Bungalow",
  "Feild-Mouse",
  "City-Mouse",
  "Country-Mouse",
  "Dire-Mouse",
  "Dire-Straints",
  "Bear",
  "Boar",
  "Wild Stag",
  "Wild Nag",
  "Wild Stallion",
  "Wild Mare",
  "Wild Fawn",
  "Domestic Deer",
  "Economic Inflation",
  "Unemployment Statistic",
  "Individuality",
  "Ethic",
  "Emotion"
];

var descWeightAdj = [
	"heavy",
	"light",
	"large",
	"skinny",
	"rail-thin",
	"oblong",
	"whisper"
];

var descHeightAdj = [
	"tall",
	"short",
	"ceiling scraping",
	"ankle-biting"
];

var monDescBodyTypes = [
	"short humanoid",
	"winged quadroped",
	"person",
	"tall humanoid",
	"still-life",
	"phallic shaped",
	"shelled quadroped",
	"abstract concept",
	"winged biped",
	"furniture",
	"clothing",
	"tool",
	"unknowable",
	"food"
];
	
	

//Demon species
var demonType = [
	"Alp",
	"Archdemon",
	"Bajang",
	"Cambion",
	"Demoness",
	"Demon",
	"Fallen Angel",
	"Familiar",
	"Incubus",
	"Jikininki",
	"Nickar",
	"Poltergeist",
	"Ghast",
	"Puck",
	"Nightmare",
	"Kappa",
	"Rokurokubi",
	"Succubus",
	"Drug Addiction",
	"Alcohol Addiction",
	"Exercise Addiction",
	"Caffeine Addiction",
	"Skeleton in your Closet",
	"Pig-Zombie",
	"Porn",
	"Dream",
	"Mirror",
	"Ideation"
];

//Legendary weapon names
var legWeapName = [
	"Cleaver",
	"Biter",
	"Seducer",
	"Prodder",
	"Impailer",
	"Defier",
	"Defiler",
	"Defecator",
	"Bifurcator",
	"Shitter",
	"Hammer",
	"Entertainer",
	"Chewer",
	"Yowler",
	"Eater",
	"Combuster",
	"Photographer",
	"Doctor"
];

//work events
var workEvent = [
	"Olympus Design's annual 'Watch Your Boss's Family Have A Picnic' Potluck",
	"The annual Toilet Cleaner's Ball",
	"another bi-weekly firing",
	"another meeting on the over-abundance of meetings",
	"another client meeting with a client who barely understands what they are asking you to do",
	"day after day of dealing with someone yelling at you over a register because they can't read the menu right over your head",
	"another day of asking people to sign up with Olympus Design's 'Club Savings!'",
	"a meeting where your boss is simply showing pictures of his vacation to someplace you'll never have money to go to",
	"one more argument about why you can't move out from your parent's house",
	"what should amount to sexual harrasment by customers, but because you have bills to pay... ",
	"another failed relationship",
	"another lecture from your parents about responsibility",
	"another foster home",
	"another year in debt",
	"another soup kitchen line",
	"another day in a cubical slightly left of the window.",
	"another funeral"
];

var weapType = [
	"blade",
	"axe",
	"knife",
	"ennui",
	"grammar",
	"food",
	"scrap",
	"ereader"
];

bladeNames = [
	"Sword",
	"Katana",
	"Particularly pointy leaf",
	"Needle"
];
axeNames = [
	"Cleaver",
	"Axe",
	"Hachet",
	"Crowbar",
	"Particularly Pointy Leaf",
	"Wrecking Bar"
];
knifeNames = [
	"Knife",
	"Stick",
	"Small Rock",
	"Spoon",
	"Fork",
	"Fake Magic Wand",
	"Real Magic Wand",
	"Unweaponized Platonium",
	"Docile Platonium",
	"Harmless Platonium",
	"Bottle Stopper"
];
ennuiNames = [
	"'The' Book",
	"Instructions",
	"Directions",
	"Dead-Horse",
	"Ennui",
	"Credit-Card",
	"Crippling Debt",
	"A Blank CD",
	"A Blank Page",
	"Gun with no Ammo",
	"Bow with no Arrows",
	"Dud Bomb",
	"Emptiness",
	"Blackmail",
	"Existential Crisis",
	"Sense of Impending Doom"
];
grammarNames = [
	"!",
	"?",
	"|",
	"(C)",
	"(TM)",
	"Diction"
];
foodNames = [
	"'Thing' on a Stick",
	"Bowl of Noodles",
	"Rice Dinner",
	"Spam",
	"Bacon",
	"Leg",
	"Meatballs",
	"Little Smokies",
	"Gummi Candy",
	"Cookie",
	"Cake",
	"Unassuming Carrot"
];
miscNames = [
	"Nun-Shucks",
	"Flower",
	"Stick",
	"Small Rock",
	"Cartoonishly Large Boulder",
	"Flare",
	"Pool Noodle",
	"Scrap of Leather",
	"A Wallet Sized Photograph",
	"Paper Towel"
];
ereaderNames = [
	"DM's Rulebook",
	"Employee Manual",
	"Directions",
	"The novel <i>Tower</i> by Erika D. Price",
	"The novel <i>Corpus Callosum</i> by Erika D. Price",
	"The short story collection <i>Myths</i> by Erika D. Price",
	"A kindle containing only the eShort <i>Then One Year</i> by Erika D. Price",
	"Vanity Published Novel"
];

//Weapons types, no ranged weapons because we're real warriors

//Armor types
var armTypes = [
	"rag",
	"pad",
	"plate-mail",
	"chain-mail",
	"old business suit",
	"top hat",
	"Monocle",
	"bow-tie",
	"shield",
	"kite-shield",
	"banana costume",
	"turtle shell",
	"jerky-foil suit",
	"boy-shorts",
	"tighty-whities",
	"skinny jeans",
	"microphone",
	"holy t-shirt",
	"hole-y t-shirt",
	"feather boa"
];


//Adjectives
var material = [
	"Stone",
	"Diamond",
	"Wood",
	"Iron",
	"Steel",
	"Glass",
	"Crystal",
	"Copper",
	"Gold",
	"Gravel",
	"Bread",
	"Garbage",
	"Clay",
	"Rot",
	"Rust",
	"Candy",
	"Peppermint",
	"Pumpkin",
	"Turkey",
	"Snow",
	"Ice",
	"Slush",
	"Yellow",
	"Plastic",
	"Stamped Metal",
	"Pewter",
	"Wool",
	"Flannel"
];

var hats = [
	"Top Hat",
	"Bowler",
	"Sun Hat",
	"Straw Hat",
	"Tiara",
	"Circlet",
	"Stove-Pipe Hat",
	"Fedora",
	"Ball-Cap",
	"Trucker Cap",
	"Gas Mask",
	"Tennis Visor",
	"Sticky Note",
	"Catcher's Mask",
	"Hockey Mask",
	"Halloween Mask",
	"Book",
	"Glasses",
	"Sunglasses"
];

var scarves = [
	"Scarf",
	"Cape",
	"Cloak",
	"Mantle",
	"Boa",
	"Bow-Tie",
	"Tie",
	"Bolo-Tie",
	"Kerchief"
];

var shirts = [
	"T-Shirt",
	"Jacket",
	"Armor",
	"Dress",
	"Blouse"
];

var shoes = [
	"Hiking Boots",
	"Tap-Shoes",
	"Character Shoes",
	"High-Heels",
	"Work Boots",
	"Combat Boots",
	"Sandels",
	"Flip-Flops",
	"Clogs",
	"Plastic Clogs",
	"Flats",
	"Water-socks"
];
	
//Death messages
var deathMsg = [
  "Well, shit. You are dead.",
  "Um, you are dead.",
  "You just fucking exploded! That means you are dead.",
  "Inexplicably, you die of a heart attack. That is what we are saying. It has nothing to do with you getting defeated.",
  "Good game, but you died.",
  "You suck, you just died.",
  "Off comes your arms, and then your legs, and then you're impaled, left to lie in a puddle of your own urine. You are dead.",
  "Hey there was this joke I heard one time where you died. This kind of reminds me of that, because, well, you just died.",
  "Now that you are dead, can you tell me if there is anything on the other side?",
  "Go, be with Spot, and every other pet that ever ran away, you are all dead together.",
  "If I told you that you were alive, I would be a liar.",
  "If only there were arrows somewhere in this game, then you might not have died.",
  "You ever get the feeling that your life means nothing? Well, the good news is that you were right. The bad is that you are dead.",
  "Ew, did you have to get your guts all over when you died?",
  "You died, and now the ghosts are collecting to rip apart your corpse. That sucks, I am so sorry.",
  "How many yous does it take to screw in a lightbulb? None. You are dead, so your lightbulb screwing days are over.",
  "You are dead. Good news though, no taxes for you this year.",
  "I completely steered you wrong, sorry about that. You are dead.",
  "In an effort to make this screen cheerier we are playing with punctuation. You are dead!",
  "Ow, that just had to hurt. I mean, it did kill you.",
  "Fuck me, you are dead.",
  "Alright, it is about time I told you that everyone dies. As for you, your time was just now.",
  "You are dead. Look on the bright side though, you never have to shit again.",
  "You just shit yourself, probably because you are dead.",
  "You lose your arm . . . and your life.",
  "You decide to cast off these adventurous ways and become a mime . . . but you were struck down. You are dead.",
  "Yeah, you are dead.",
  "If you notice, there are a lot of these messages, but they all mean the same thing. You are dead.",
  "Yes, sometimes these messages repeat. Get over it. You are dead.",
  "You are dead, or if you prefer, life impaired",
  "Your soul leaves your body and you collapse into a pile of bones and meat. You are dead.",
  "I could tell you how, but it would not make the slightest difference because you are dead now.",
  "D-E-A-D, spell it with me, come on!",
  "Oh dear. You're more done than the turkey is at this point. In fact, let me check on that. Yeah, another few hours at least. Not for you though. You're complete and totally done, dead even.",
  "Did you know that you can never really die? Good, because it's not true. You're all the evidence you'll ever need for that.",
  "This isn't a game about winning, so I guess, in a way, you're winning, because you died. Go you!",
  "Hey, don't go into the light! Wait, the doctor is shaking their head. They are talking to me. They want me to tell you to go into the light! There is nothing but pain and misery waiting for you here, your body is pretty messed up! They give you a painful year at most. It's best to just give up and accept your end now, really.",
  "Why are you so compelled to go back?",
  "I'm sorry, there's nothing witty to put here. This candy-cane is just too delicious. Three flavors!",
  "Merry Christmas! Well... to your surviving family, anyway, if you have any.",
  "Oh, uh, this is awkward... see... I only really talk to live people.",
  "OH JESUS ZOMBIE!!! Wait, no, it's just you. You're still dead though. Tough luck, that.",
  "God, that has got to suck. I'd say I was sorry, but it was pretty entertaining.",
  "I'm only doing this to you because it's fun.",
  "I'm doing this because I hate you.",
  "Think of the rabbits Lennie, think of the rabbits.",
  "Life has been painfully and completely removed from the split husk that is your remains.",
  "I didn't know people did that when they died. That's disgusting."
];

//monster attack messages
var monAtkMsg = [
	" slashes %object% with its claws",
	" drags its claws across %object%'s stomach",
	" horsey chomps %object%",
	" headbutts %object%",
	" kicks %object%",
	" throws a rock at %object%",
	" punches %object%",
	" pees on %object%",
	" insults %object%",
	" emotionally abuses %object%",
	" pokes %object% with a stick",
	" tea-bags %object%",
	" ignores %object%",
	" taunts %object%",
	" teases %object%",
	" flirts with %object%",
	" gives %object% a rude gesture"
];

//monster armed attack messages
var monArmAtkMsg = [
	" stabs %object% with its ",
	" slices %object% with its ",
	" pokes %object% with its ",
	" hits %object% with its ",
	" waggles at %object% with its ",
	" smacks %object% with its ",
	" blesses %object% with its ",
	" saints %object% with its "
];

var atkMonReactMsg = [
	"winces in pain.",
	"lets out a cry of pain.",
	"growls.",
	"spits blood.",
	"hobbles back into an attack position.",
	"is openly bleeding.",
	"curses you under its breath.",
	"glares at you, putting pressure on the wound.",
	"weeps openly.",
	"groans softly.",
	"laughs weakly.",
	"steams silently.",
	"wishes it was over."
];

var monDmgMsg = [
	"leaving a dark bruise on",
	"impailing",
	"removing a limb from",
	"hobbling",
	"breaking a bone in",
	"gutting",
	"decapitating",
	"cleaving",
	"drawing blood from",
	"scarring",
	"sickening",
	"removing a finger from",
	"declawing",
	"bifurcating",
	"injecting holiday cheer into",
	"grossing out",
	"stumbling",
	"upsetting",
	"ofending",
	"stupifying",
	"agrivating",
	"undulating",
	"captivating",
	"engorging",
	"destructing",
	"rending",
	"wrenching",
	"wasteing",
	"worrying",
	"destroying",
	"vaporizing"
];

//hero unarmed attack messages
var heroUnAtkMsg = [
	"You punch ",
	"You horsey chomp ",
	"You kick ",
	"You throw a rock at ",
	"You insult ",
	"You emotionally abuse ",
	"You tea-bag ",
	"You ignore ",
	"You taunt ",
	"You tease ",
	"You flirt with ",
	"You throw up a rude gesture at "
];

//hero armed attack messages
var heroArmAtkMsg = [
	"You stab the ",
	"You slice the ",
	"You poke the ",
	"You hit the ",
	"You waggle at the ",
	"You smack the ",
	"You bless the ",
	"You saint the "
];

//Rival dick moves
var rivalDickMoves= [
	"killed your dog.",
	"killed your cat.",
	"drowned your goldfish.",
	"drag-raced your turtle for its pink-slip.",
	"tripped you.",
	"spit in your face.",
	"cheated off your test.",
	"stole your mail.",
	"told you a bad joke",
	"told one too many 'Your Mother' jokes.",
	"thought you were pregenant.",
	"refused to co-sign your loan.",
	"sold you a bad Firby.",
	"traveled back in time to make fun of you wetting the bed.",
	"wet your bed for you.",
	"adopted you for a day, just to show you how shitty you have it, comparably.",
	"gave you bad fashion advice",
	"recorded over your school plays.",
	"replaced your sugar with salt.",
	"gave you a friendship bracelet that just said, 'never'.",
	"'Carried'd you.",
	"hacked your Facescroll profile.",
	"stole your pie while it was cooling.",
	"gave you fruitcake.",
	"used all the hot water.",
	"played their music too loud.",
	"gave terrible directions.",
	"called you a name too terrible to repeat (it was probably 'jerk').",
	"bet against you.",
	"wing-manned you right out of a conversation with someone you were genuinely connecting with, on an emotional, nay, spiritual level.",
	"existed.",
	"stole christmas.",
	"showed everyone those pictures of you from when you were in kindergarten, you know the ones, the ones your mom threatens to pull out and show all the time when she's teasing you.",
	"broke your candy-cane.",
	"stole your extensive recycled vynl collection.",
	"put on a santa cap.",
	"played Christmas music before Thanksgiving.",
	"complained about the 'offensiveness' of the abreviation x-mas.",
	"dropped dead, gorgeous.",
	"broke all the high-scores.",
	"sniped your spawn.",
	"undid your fly.",
	"ate and ran.",
	"gave a terrible gift.",
	"didn't want to make the conversation about you.",
	"watched videos with the sound on while everyone else was jamming out to the music and talking.",
	"didn't use their turn signal.",
	"baked a terrible cake.",
	"baked a better cake than you could ever imagine baking, and it's just so damned frustrating. They're always one upping you. That's it!",
	"showed off disapperation.",
	"gave you up for lint.",
	"belched.",
	"moved the remote.",
	"did the dishes and refused to let you clean up after them, I mean, they're a guest, that just makes you feel uncomfortable, right?",
	"offered you charity because you buy generic.",
	"burned your documents"
];

//Quest exposition
var questExp = [
	"The bi-weekly Prom is tonight,",
	"My house is overrun by rats,",
	"My house is overrun by cats I bought to eat the rats,",
	"I'm slowly turning into a large vat of slime,",
	"Ghosts are posessing my socks,",
	"That truck just ran over my favorite road, and I need revenge,",
	"My house was blown up by your rival,",
	"You blew up my house,",
	"I have no idea what country I'm even in,",
	"I'm just really depressed,",
	"I'm pretty sure my arm is falling off,",
	"Sometimes, at night, I dream that I am an ant on the face of God,",
	"There is no God, God told me so, xhe totally did,",
	"I don't particularly care for coffee,",
	"My shirt is on inside out,",
	"I wet the bed this morning",
	"I've gotten too lazy to really do my job anymore,",
	"I'm homeless, it's actually pretty sad,",
	"I thought this was a bus-stop, but it wasn't,",
	"There's a wormhole that will devour the entire planet in seconds if we don't do anything about it, but it can wait,",
	"I've never trusted a zuccini in my life,",
	"I shrunk all my clothes in the wash,",
	"Gravity is only selectively applying itself to objects around town,",
	"My partner doesn't listen to me anymore,",
	"Listen, I've got just absolutely terrible grades,",
	"I don't care,",
	"I think my partner is cheating on me,",
	"Sex is just kind of... meh,",
	"It's the second coming,",
	"I've got this rash right here that won't go away,",
	"My peanut allergy has taken a vacation,",
	"My bomb is finished fermenting,",
	"Havest is pretty darn terrible.",
	"There's a cult of ancient mages hell-bent on raising one of the actually terrible Elder Gods from the prison it was trapped in before time began,",
	"I just, I have no idea where I am,",
	"The point of my sword has gone dull,",
	"An old man in a cave just gave me a sword and said 'Here, take this. It's dangerous to go alone.' So...",
	"Well, I just took an arrow in the knee,",
	"If they think I'm returning that library book, they've got another thing coming,",
	"You know those absolutely perfect moments in life, the ones you'll never forget? If you stick out your tongue in the middle of one they taste exactly like clear gummi bears,",
	"The store was out of hot-chocolate,",
	"I don't think I'm actually literate. I'm pretty sure I'm just going off the pictures,",
	"The guy playing Santa in the mall is drunk,",
	"A man's got to do something to stay warm,",
	"People are protesting solely for the attention,",
	"World hunger is still a thing right,",
	"I dunno, there's this real bad plague, and it's really harshing my buzz,",
	"No, I don't know the muffin man,",
	"Oh, uh, sorry, I just... man, I gotta tell someone, I just totally had sex, and I didn't think we'd ever reach that level of our relationship, but it was just perfect, physical, emotional, I think I'm honestly in love,",
	"I didn't expect you here,",
	"I don't want you here,"
];

//Quest tasks
var questTask = [
	"I'll need to blow up the bridge.",
	"I'll need to rob a bank.",
	"I'll need to rob a bake sale.",
	"I'll have to contact my estranged parents.",
	"I'll need to plant my garden.",
	"I have to buy a dress!",
	"I'll have to get a teeth cleaning!",
	"I need to buy some cats.",
	"I need to buy some rats.",
	"I need to move.",
	"I need to get rid of this sense of ennui that's just taken over my life, man, like so much, I just, I can't, I can't do it anymore, I'm done.",
	"I've got to meticulously craft hand-made dolls until my fingers bleed.",
	"I'm going to take up taking credit for other people's hard work.",
	"I'm joining the clergy.",
	"I'm quitting my job.",
	"I'm going to propose.",
	"I'm looking for the remainder of Life, the Universe, and Everything. I mean, it can't just be a whole number, right? It's so complex.",
	"I need to wing-man hard, but in a none-deceptive manner.",
	"I need to try to understand what the hell The Enchantment Hut(TM) actually does. Like, is it even helpful?",
	"I need to buy a boat and devote myself to life of digital piracy on the high seas!",
	"I just need to crash, man. Seriously.",
	"well, you don't care about what I'm doing. I'll just get to what you need to do.",
	"I'm going back to school. I was three credit hours from my degree in astroliteracy.",
	"there just isn't anything I can do.",
	"I came to hang out down on this Problem Post you helpfully built.",
	"I need to climb the corperate ladder.",
	"I'm going to dethrone Santa Claus!",
	"existence is meaningless.",
	"I need to make a snow fort.",
	"I need to buy last minute presents.",
	"I can't understand any of these carols, much less the one about the bells.",
	"I don't actually believe you can exist outside of conceptual space.",
	"my watch needs a good fixing."
];


//Quest NPC Professions
var npcProf = [
	"Baker",
	"Biker",
	"Robber",
	"Debutante",
	"Drunk",
	"Clerk",
	"Merchant",
	"Knight",
	"King",
	"Busser",
	"Gun-toteing Badass",
	"Serial J-Walker",
	"Therapist",
	"Dentist",
	"Fry-Chef",
	"Fried-Chef",
	"Waiter",
	"Writer",
	"Sculpter",
	"Dentist",
	"Cobbler",
	"Demon-Slayer",
	"Vampire-Slayer",
	"Slayer-Slayer",
	"Producer",
	"Christmas Village Elf Wrangler",
	"Christmas Village Child Wrangler",
	"Christmas Village Elf",
	"Christmas Village Child",
	"Mall Santa",
	"Inconcievable Mass",
	"Duck",
	"Cow",
	"Closet Door",
	"Gun Salesman Salesman",
	"Door to Door Door Salesman",
	"Grouch",
	"Old Man in Winter",
	"Old Man in the Winter of his Life",
	"Barrel Fire Homeless",
	"Retired Professional Couch-Surfer",
	"Quivering Mass of Ooze",
	"Yeti",
	"Snow Man",
	"Snow Woman",
	"Snow Child",
	"Snow Sculpture",
	"Swan",
	"Nutcracker"
];

//Enchantment Hut Greetings
var eHutGreet = [
	"The universe is bending, breaking, and we, you and I, we are the cause. It ends with us. It always has and always will.",
	"I see the meaning of things, and in you I see such angry holes.",
	"Before me stands a line of mistakes, behind me lies a line of regrets.",
	"I do not know why the universe has left us with this cruel fate, but I know there are many answers to what we should do about it.",
	"There is a point where comedy becomes tragedy.",
	"Progression is a collection of deaths, yours and theirs.",
	"We are in a system designed to keep us perpetually engaged.",
	"It isn't the weapon that makes someone powerful, but the reason why they use it.",
	"Do you, do you even remember?",
	"Some text is for flavor, some is for distraction. All of the text is meaningless.",
	"Do not trust the dog.",
	"You are consumed by something you cannot see.",
	"This reality is simply a construct of several thousand lines of code.",
	"You are being controlled by someone who may already be bored.",
	"Will they even remember why you hate them?",
	"Does it have to be this way?",
	"You were forced into this; it wasn't your choice.",
	"The currency of the doomed is meaningless, we give you these four futures free of anyting of consequence.",
	"Everything that helps you sets you back tenfold, and only the clever mind the math.",
	"It is snowing outside, and that makes us extraordinarily uncomfortable.",
	"Can you tell the Charity Santa to not make eyecontact with the customers? We'd do it, but we're incorperal, and...",
	"Everyone smells of egg-nog; they can't all be drunk can they?",
	"We liked the green, where did it go?",
	"Sometimes I write great truths in the window frost; today I drew a smily face."
];

//Taco Spell Greeting
var tacoSpellGreet = [
	"Damage is hardly important when there are status effects!",
	"Would you like a burrito with that mystic tome?",
	"Welcome to Taco Spell (TM), may I interest you in an order of mystic energies with a side of pico?",
	"We boil the meat, but the magix are 100% fresh!",
	"Those idiots over in the Enchantment Hut (TM) are giving away their products for free? Man, they're weird. Stupid and weird.",
	"Our new healing spell line can be ordered al fresco for the healthier and more artistic option.",
	"We don't know who you are. We don't know who we are, but there are spells and tacos back here, plus a faint smell of Eldrich.",
	"Are you really telling me that you've never soaked an enemy in Nacho Cheese?"
];

//Weather types
var setWeather =
	[
		"raining",
		"sunny",
		"overcast",
		"snowing",
		"muggy",
		"stifling",
		"foggy",
		"storming",
		"blizzard",
		"hurricane",
		"apocalypse"
	];
	
//Genders
var genders = [
		"Male",
		"Female",
		"Gender Neutral"
];

//Races
var races = [
		"Human",
		"Orc",
		"Goblin",
		"Draconic",
		"Drawer"
];


// Function to roll our dice
function roll(sides, number){
	var output = [];
	for(i = 0; i < number; i++){
		output.push(Math.floor(Math.random()*sides) + 1);
	}
	return output;
}
// Function to fetch a random element from an array
function ranArray(array){
	return array[Math.floor(Math.random()*array.length)];
}
//Roll and add
function rollStack(sides, number){
	var damage = roll(sides, number);
	var output = 0;
	for(i = 0; i < damage.length; i++){
		output += damage[i];
	}
	return output;
}
function rand(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function bad(output){
	return '<span class="numCon">'+output+'<span style="color:red;" class="numIn">'+output+'</span></span>';
}
function good(output){
	return '<span class="numCon">'+output+'<span style="color:green;" class="numIn">'+output+'</span></span>';
}
function getBonus(stat){
	return Math.floor((stat - 10) / 2);
}

//Shortcut functions
function o(string){
	$('#console').append(string + '<br>');
	$('#console').scrollTop($('#console').prop('scrollHeight'));
}
function c(){
	$('#console').html('');
}
function menu(string){
	$('#actions').append(string);
}
function menuC(){
	$('#actions').html('');
}
function stats(){
	$('#character').html('Name: ' +hero.fName +" "+ hero.lName+ '<br>Age: ' + hero.age + '<br>Fame: ' + hero.fame + '<br>Race: '+ hero.race +'<br>HP: '+hero.curHP+'/'+hero.totalHP+'<br>Str: '+hero.str+'<br>Dex: '+hero.dex+'<br>Con: '+hero.con+'<br>Int: '+hero.int+'<br>Wis: ' +hero.wis+'<br>Cha: '+hero.cha);
}
var hero = {};
var monster = {};
var child = false;

function autoLevel(object){
	var traits = [
		'str',
		'dex',
		'con',
		'int',
		'wis',
		'cha'
	];
	var trait = ranArray(traits);
	object[trait] += rand(1, 4);
	object.lvl += 1;
}

//So we need to make this function more flexible and allow for leveled characters
function Character(level){
	if(level == undefined){
		level = 1;
	}
	this.lvl = level;
	this.fName = ranArray(namesFirst);
	this.lName = ranArray(namesLast);
	this.gender = ranArray(genders);
	this.race = ranArray(races);
	this.age = rand(6,200);
	this.weaknesses = [];
	this.resistances = [];
	this.status = [];
	this.fame = 1;
	this.str = 10;
	this.dex = 10;
	this.con = 10;
	this.int = 10;
	this.wis = 10;
	this.cha = 10;
	this.ac = 10 + getBonus(this.dex);
	this.touch = 10;
	this.fFoot = 10;
	this.fort = rand(1,6);
	this.reflex = rand(1,6);
	this.will = rand(1,6);
	this.aBonus = rand(1,3);
	this.cmb = this.aBonus + getBonus(this.str);
	this.cmd = 10 + this.aBonus + getBonus(this.str);
	this.totalHP = rollStack(4, this.lvl) + getBonus(this.con);
	this.curHP = this.totalHP;
	var times = (level - 1) + 5;
	for(i = 0; i < times; i++){
		autoLevel(this);
	}
	this.i = getBonus(this.dex);
	this.nothing = {
		name : 'Nothing',
		bonus : 0,
		desc : 'A whole bunch of nothing.',
		resistances: [],
		traits : [],
		damageDie : 4,
		damageDieCount : 1
	};
	this.helmet = this.nothing;
	this.armor = this.nothing;
	this.boots = this.nothing;
	this.gloves = this.nothing;
	this.belt = this.nothing;
	this.weapon = this.nothing;
	this.equip = function(item){
		this[item.slot] = item;
	}
	this.unequip = function(item){
		this[item.slot] = this.nothing;
	}
	this.that = this;
	this.attack = function(that){
		//o(this.fName + ' the ' + this.race + ' attacks ' + that.fName + ' the ' + that.race + '.');
		if(this.weapon.name == 'Nothing'){
			o(this.fName + ' the ' + this.race + ranArray(monAtkMsg).replace(/%object%/g, that.fName + ' the ' + that.race) + '.');
		}else{
			
		}
		var hit = rollStack(20, 1) + this.str;
		console.log(hit);
		if(hit > (that.ac + this.helmet.bonus + this.armor.bonus + this.boots.bonus + this.gloves.bonus + this.belt.bonus)){
			var damage = rollStack(this.weapon.damageDie, this.weapon.damageDieCount) + this.weapon.bonus;
			that.damage(damage, this.weapon);
			if(that.curHP <= 0){
				that.status.push('Dead');
			}
			return true;
		}else{
			o(this.fName + ' Missed.');
			return false;
		}
		//console.log(that);
		//console.log(this);
	}
	this.damage = function(damage, weapon){
		if(weapon.name == 'Nothing'){
			o(this.fName + ' ' + ranArray(atkMonReactMsg));
			o('<span class="extended" style="color: #aaa;">' + this.fName + ' takes ' + bad(damage) + ' points of damage.</span>');
			this.curHP = this.curHP - damage;
			if(this.curHP <= 0){
				this.status.push('Dead');
				o(this.fName + ' is dead.');
			}
		}else{
			var type = weapon.type;
			if( this.weaknesses.includes(type)){
				damage = damage * 2;
			}else if(this.resistances.includes(type) || this.armor.resistances.includes(type)){
				damage = damage / 2;
			}
			this.curHP = this.curHP - damage;
			for(i in weapon.statuses){
				if(this.status.includes(weapon.statuses[i]) == false){
					this.status.push(weapon.statuses[i]);
				}
			}
			if(this.curHP <= 0){
				this.status.push('Dead');
			}
		}
	}
	this.intro = function(){
		o(this.fName + ' the ' + this.race + ' is here. (' + this.totalHP + ' HP)');
	}
}
function battle(){
	c();
	monster = new Character(hero.lvl);
	monster.intro();
	menuC();
	menu('<button class="button" data-action="attack">Attack.</button>');
	menu('<button class="button" data-action="home">Run Away.</button>');
}
function attack(){
	menuC();
	hero.attack(monster);
	if(monster.curHP > 0){
		setTimeout(attackBack, 250);
	}else{
		menu('<button class="button" data-action="level">Level Up!</button>');
	}
}
function attackBack(){
	monster.attack(hero);
	stats();
	if(hero.curHP <= 0){
		death();
	}else{
		menu('<button class="button" data-action="attack">Attack.</button>');
		menu('<button class="button" data-action="home">Run Away.</button>');
		bind();
	}
}
function level(){
	hero.fame += 1;
	hero.lvl++;
	c();
	o('You have learned something from this battle. What is it?');
	menuC();
	menu('<button class="button" data-action="lvlStr">Strength</button><button class="button" data-action="lvlDex">Dexterity</button><button class="button" data-action="lvlCon">Constitution</button><button class="button" data-action="lvlInt">Inteligence</button><button class="button" data-action="lvlWis">Wisdom</button><button class="button" data-action="lvlCha">Charisma</button>');
}

function lvlStr(){
	hero.str += Math.ceil(rollStack(4, 2) / (Math.floor(Math.random() * 25)) + 1);
	hero.totalHP += rollStack(4, 1);
	hero.curHP = hero.totalHP;
	hero.damageDieCount = getBonus(hero.str);
	stats();
	home();
}
function lvlDex(){
	hero.dex += Math.ceil(rollStack(4, 2) / (Math.floor(Math.random() * 25)) + 1);
	hero.totalHP += rollStack(4, 1);
	hero.curHP = hero.totalHP;
	this.ac = 10 + getBonus(this.dex);
	stats();
	home();
}
function lvlCon(){
	hero.totalHP -= getBonus(hero.con);
	hero.con += Math.ceil(rollStack(4, 2) / (Math.floor(Math.random() * 25)) + 1);
	hero.totalHP += rollStack(4, 1) + getBonus(hero.con);
	hero.curHP = hero.totalHP;
	stats();
	home();
}
function lvlInt(){
	hero.int += Math.ceil(rollStack(4, 2) / (Math.floor(Math.random() * 25)) + 1);
	hero.totalHP += rollStack(4, 1);
	hero.curHP = hero.totalHP;
	stats();
	home();
}
function lvlWis(){
	hero.wis += Math.ceil(rollStack(4, 2) / (Math.floor(Math.random() * 25)) + 1);
	hero.totalHP += rollStack(4, 1);
	hero.curHP = hero.totalHP;
	stats();
	home();
}
function lvlCha(){
	hero.cha += Math.ceil(rollStack(4, 2) / (Math.floor(Math.random() * 25)) + 1);
	hero.totalHP += rollStack(4, 1);
	hero.curHP = hero.totalHP;
	stats();
	home();
}


$(document).ready(
	function(){
		var output = "<h2>Welcome to GPX: Remastered.</h2>";
		c();
		o(output);
		menu("<button class='button' data-action='begin'>Begin.</button>");
		//$('#background').css('background-image', 'url('+loadedImgs['Home'].src+')');
		$('.draggable:not(.handle)').draggable({
			containment: '#main'
		});
		$('.draggable.handle').draggable({
			containment: 'window',
			handle: 'h4',
		});
		$('.draggable').click(function(){
			$('.draggable').removeClass('active');
			$(this).addClass('active');
		});
		$('.min').click(function(){
			$(this).parent().parent().removeClass('active');
			$(this).parent().parent().addClass('min');
		});
		$('.max').click(function(){
			$(this).parent().parent().removeClass('min');
			$(this).parent().parent().addClass('active');
		});
		bind();
	}
);

function begin(){
	child = false;
	hero = new Character();
	hero.armor = armor.dirtyTunic;
	hero.helmet = helmet.oldLeather;
	hero.boots = boots.raggedBoots;
	hero.curHP += rand(8, 15);
	hero.totalHP = hero.curHP;
	hero.gen = 1;
	inventory();
	//characterCreate(monster);
	var output = 'Good morning ' + hero.fName + '.<br> Welcome to Planet Adventure.<br>';
	output += 'You are a '+ hero.gender + ' '+ hero.race + ' who is ' + hero.age + ' years old';
	c();
	o(output);
	output = '<button class="button" data-action="home">Continue</button>';
	menuC();
	menu(output);
	stats();
}

function inventory(){
	$('#inv').html('Helmet: <span title="' + hero.helmet.desc + ' (+'+hero.helmet.bonus + ' to AC)">' + hero.helmet.name + '<br>');
	$('#inv').append('Armor: <span title="' + hero.armor.desc + ' (+'+hero.armor.bonus + ' to AC)">' + hero.armor.name + '<br>');
	$('#inv').append('Belt: <span title="' + hero.belt.desc + ' (+'+hero.belt.bonus + ' to AC)">' + hero.belt.name + '<br>');
	$('#inv').append('Gloves: <span title="' + hero.gloves.desc + ' (+'+hero.gloves.bonus + ' to AC)">' + hero.gloves.name + '<br>');
	$('#inv').append('Boots: <span title="' + hero.boots.desc + ' (+'+hero.boots.bonus + ' to AC)">' + hero.boots.name + '<br>');
	$('#inv').append('Weapon: <span title="' + hero.weapon.desc + ' (+'+hero.weapon.bonus + ' to ATK)">' + hero.weapon.name + '<br>');
}

function death(){
	o(ranArray(deathMsg));
	menuC();
	menu('<button class="button" data-action="begin">Restart.</button>');
	if(child != false){
		menu('<button class="button" data-action="inherit">Continue as '+ child.fName + '.</button>');
	}
	bind();
}

function home(){
	var output = 'You wake up at home.';
	inventory();
	stats();
	c();
	o(output);
	menuC();
	menu('<button class="button" data-action="battle">Adventure</button>');
	if(hero.curHP < hero.totalHP && hero.fame > 0){
		menu('<button class="button" data-action="rest">Rest (-1F).</button>');
	}
	if(hero.fame >= 2 && child == false){
		menu('<button class="button" data-action="family">Start a Family.</button>');
	}
	if(child != false){
		output = 'Your child ' + child.fName + ' is here.';
		o(output);
	}
}

function rest(){
	hero.curHP = hero.totalHP;
	hero.fame -= 1;
	home();
}

function family(){
	hero.fame -= 2;
	child = new Character(1);
	child.totalHP -= getBonus(child.con);
	child.race = hero.race;
	child.lName = hero.lName;
	child.str += Math.floor(hero.str / 2);
	child.dex += Math.floor(hero.dex / 2);
	child.con += Math.floor(hero.con / 2);
	child.int += Math.floor(hero.int / 2);
	child.wis += Math.floor(hero.wis / 2);
	child.cha += Math.floor(hero.cha / 2);
	child.totalHP += getBonus(child.con) + rand(8, 15);
	child.curHP = child.totalHP;
	child.gen = hero.gen + 1;
	child.fame = child.gen;
	c();
	menuC();
	o('A child is born! Your child ' + child.fName + ' arrives into the world.');
	menu('<button class="button" data-action="home">Continue.</button>');
}

function inherit(){
	var items = [];
	if(hero.armor.name != 'Nothing'){
		items.push('armor');
	}
	if(hero.helmet.name != 'Nothing'){
		items.push('helmet');
	}
	if(hero.belt.name != 'Nothing'){
		items.push('belt');
	}
	if(hero.boots.name != 'Nothing'){
		items.push('boots');
	}
	if(hero.gloves.name != 'Nothing'){
		items.push('gloves');
	}
	var item = ranArray(items);
	child[item] = hero[item];
	if(hero.weapon.name != 'Nothing'){
		child.weapon = hero.weapon;
	}
	for(i in child){
		//This is to avoid a shallow copy. Otherwise everything would be false when we set the child to it below.
		hero[i] = child[i];
	}
	child = false;
	c();
	menuC();
	o(hero.fName + ' looks pensively into the rain at the funeral, clutching ' + hero[item].name);
	menu('<button class="button" data-action="home">Continue.</button>');
}

function bind(){
	$('.button').off('click');
	$('.button').click(function(){
		var func = $(this).attr('data-action');
		window[func]();
		bind();
	});
}
function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}
function saveLayout(){
	var items = $('.draggable');
	for(i in items){
		if(isInt(i)){
			layout[$(items[i])] = {};
			layout[$(items[i])].css = $(items[i]).attr('style');
		}
	}
	var string = JSON.stringify(layout);
	localStorage.layout = string;
}
function loadLayout(){
	layout = JSON.parse(localStorage.layout);
	for(i in layout){
		$(layout[i]).attr('style', layout[i].css);
	}
}
function expand(){
	$('#style').html('.expand{display:inline-block;}');
	$('.fa.fa-expand.button').removeClass('fa-expand').addClass('fa-compress').attr('data-action', 'compress');
	bind();
}
function compress(){
	$('#style').html('.expand{display:none;}');
	$('.fa.fa-expand.button').removeClass('fa-compress').addClass('fa-expand').attr('data-action', 'expand');
	bind();
}