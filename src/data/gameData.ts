import { Level, PersonalData } from '../types/game';

// Personal Information for Lun
export const personalData: PersonalData = {
  herName: 'Lun',
  favoriteColor: '#FFB6E1', // Soft pink like tulips
  favoriteMusic: '/audio/background.mp4', // INSTRUCTIONS: Add your background music file here (MP4/M4A/MP3 format - MP4 is smaller!)
  photos: {
    // Your first photo together - already uploaded!
    firstPhoto: '/images/level1/first-photo.jpg',
    // INSTRUCTIONS: Add adventure photos to public/images/level2/ (adventure1.jpg, adventure2.jpg, etc.)
    adventures: [
      '/images/level2/adventure1.jpg',
      '/images/level2/adventure2.jpg',
    ],
    // INSTRUCTIONS: Add inside joke photos to public/images/level3/ (joke1.jpg, joke2.jpg, etc.)
    insideJokes: [
      '/images/level3/joke1.jpg',
      '/images/level3/joke2.jpg',
    ],
    // INSTRUCTIONS: Add favorite things photos to public/images/level5/ (thing1.jpg, thing2.jpg, etc.)
    favoriteThings: [
      '/images/level5/thing1.jpg',
      '/images/level5/thing2.jpg',
    ],
    // INSTRUCTIONS: Add milestone photos to public/images/level6/ (milestone1.jpg, milestone2.jpg, etc.)
    milestones: [
      '/images/level6/milestone1.jpg',
      '/images/level6/milestone2.jpg',
    ],
  },
  messages: {
    firstMeeting: `My Dearest Lun,

It was an unexpected call that changed everything. You were in the computer lab, and something in my heart told me I needed to see you—right then, right there. I called you with a daring request: "Bunk class and come meet me. Let's go to Mandoli."

I had never driven a scooter before, but that day, for you, I found courage I didn't know I possessed. Somehow, I took you safely to the Mandoli mountains, and seeing your happiness light up your entire face made every moment worth it.

As we climbed those mountains together, I held your hand—our first real connection. You were wearing heels, brave and beautiful, and you gave me a little yellow flower, as delicate and precious as you are. That tiny flower became a symbol of everything beautiful you would bring into my life.

We were so nervous that day, hiding from my batchmates like two teenagers in love—because that's exactly what we were becoming. When they finally left, you started capturing our first date pictures, beginning the story that would become our forever.

The sun was warm and golden, creating the most romantic atmosphere. My heart was racing, and I was so nervous, but I couldn't resist. I started with a gentle kiss on your cheek, then found my way to your lips. You tasted like the sweetest candy, and I couldn't get enough. We couldn't stop—kiss after kiss, moment after moment, falling deeper with each one.

Later, as I rested my head on your lap, you protected me from the sun, showing me in that simple, beautiful gesture how much you loved me—unconditionally, completely. Your kisses were endless, and I loved every single one of them.

When it was time to leave, I carried your heels in my hand because you were struggling with them, and I held your precious hand in mine. That night, we talked for hours about everything—about us, about what we were becoming, about the magic we had just created together.

Lun, that day wasn't just our first date—it was the day I discovered what it means to love someone with your whole heart. It was the beginning of our beautiful story, and I wouldn't change a single moment of it.

Forever yours, with all my love. 💕🌷`,
    loveReasons: [
      'Your beautiful smile that lights up my world like its the cutest thing for me to make you happy happy happy',
      'The way you make me laugh even on my worst days',
      'Your kindness and purity love',
      'How you understand me like no one else',
      'Your strength and the way you are honest and loyal to me',
      'The way you care about the little things',
      'Your seriousness for this relationship and me...ma baccha',
      'How you make every day better just by being you',
    ],
    futurePlans: 'I can\'t wait to create countless more memories with you. Forever and always, my love.Just wanna thank you for everything love. I love you infinte ssly and wanna marry you one day. I made this because to assure you that whenever you feel i am tired of uh please look at this and remember i always need you ma baby gurl🫶🏻.',
  },
};

export const gameData = {
  levels: [
    {
      id: 1,
      title: 'How We Met',
      description: 'The beginning of our beautiful story',
      challengeType: 'puzzle',
      challenge: {
        type: 'puzzle',
        data: {
          pieces: 9, // 3x3 puzzle (change to 4 for 2x2, 16 for 4x4, or 25 for 5x5)
          image: personalData.photos.firstPhoto || '/images/placeholder.jpg',
        },
        instructions: 'Complete the puzzle to reveal our first moment together',
      },
      reward: {
        type: 'photo',
        content: {
          image: personalData.photos.firstPhoto,
          message: personalData.messages.firstMeeting,
          specialGifts: ['🌷 Beautiful Tulips', '🤗 Warm Hugs'], // Flowers and hugs for Lun
        },
        animation: 'fadeIn',
      },
      theme: 'first-meeting',
    },
    {
      id: 2,
      title: 'Our First Adventure',
      description: 'The journey that brought us closer',
      challengeType: 'timeline',
      challenge: {
        type: 'timeline',
        data: {
          events: [
            { 
              date: '08/09/2024 - Mandoli', 
              description: 'Our first beautiful date at Mandoli mountains - the day everything began' 
            },
            { 
              date: '26/03/2025 - First Bday celeb', 
              description: 'U were mad at me on this day and then at night you were happy happy happy' 
            },
            { 
              date: '02/03/2025 - Special Moment', 
              description: 'A moment I\'ll never forget - I want to handle you like this every time and grow old celebrating all our anniversaries together, ma baby gurl' 
            },
          ],
        },
        instructions: 'Arrange the events in chronological order',
      },
      reward: {
        type: 'gallery',
        content: {
          images: personalData.photos.adventures || [],
          message: 'Every adventure with you is my favorite memory and you are too mine fav baby gurl',
          specialGifts: ['🧸 Cute Teddy Bear', '🤗 More Hugs'], // Teddy bear and hugs
        },
        animation: 'slideShow',
      },
      theme: 'adventure',
    },
    {
      id: 3,
      title: 'Inside Craziness & Silly Moments',
      description: 'The laughter we share',
      challengeType: 'trivia',
      challenge: {
        type: 'trivia',
        data: {
          questions: [
            {
              question: 'What did you give me on our first date at Mandoli?',
              options: ['A red rose', 'A yellow flower', 'A chocolate', 'A letter'],
              correct: 1, // Yellow flower (second option, index 1)
            },
            {
              question: 'When did we celebrate our 6 month anniversary?',
              options: ['On ma bday month', 'Meeting your friends', 'On yours bday month', 'On our first date at Mandoli'],
              correct: 2, // Driving the scooter (first option, index 0)
            },
            {
              question: 'What is the date when we first started our relationship?',
              options: ['26th March', '2nd April', '2nd November', '2nd September'],
              correct: 3, // Hid from them (second option, index 1)
            },
            {
              question: 'Where do i love the most about you ma gurlly?',
              options: ['Yours cute smile', 'Yours pretty face', 'Yours kind and childhish nature', 'Yours everything'],
              correct: 3, // On your lap (second option, index 1)
            },
          ],
        },
        instructions: 'Answer questions about our craziest moments together',
      },
      reward: {
        type: 'gallery',
        content: {
          images: personalData.photos.insideJokes || [],
          message: 'You make every day brighter with your laughter',
        },
        animation: 'comicStrip',
      },
      theme: 'humor',
    },
    {
      id: 4,
      title: 'Things I Love About You',
      description: 'Reasons my heart beats for you',
      challengeType: 'constellation',
      challenge: {
        type: 'constellation',
        data: {
          stars: personalData.messages.loveReasons?.length || 8,
          messages: personalData.messages.loveReasons || [],
        },
        instructions: 'Connect the stars to reveal why I love you',
      },
      reward: {
        type: 'poem',
        content: {
          message: 'You are my everything, my reason to smile, my partner in all adventures. I love you more than words can express.',
          specialGifts: ['🌷💐 Lilies & Tulips', '🍫 Chocolates', '🤗 Endless Hugs'], // Her favorite flowers, chocolates, and hugs
        },
        animation: 'constellation',
      },
      theme: 'love',
    },
    {
      id: 5,
      title: 'Your Favorite Things',
      description: 'The things that make you, you',
      challengeType: 'scavenger',
      challenge: {
        type: 'scavenger',
        data: {
          items: [
            { 
              name: '🌷 Tulips', 
              hint: 'For uh ma beautiful princess - your favorite flower' 
            },
            { 
              name: '💐 Lilies', 
              hint: 'Another flower you love - as beautiful and pure as you are, ma baby gurl' 
            },
            { 
              name: '🍫 Chocolates', 
              hint: 'Something sweet that makes you happy - just like you make me happy' 
            },
            { 
              name: '🧇 Belgium Waffles', 
              hint: 'Your favorite treat that I know you love to enjoy' 
            },
            { 
              name: '🧸 Teddy Bear', 
              hint: 'Something cute and cuddly that reminds me of you - soft, warm, and always there for hugs' 
            },
            { 
              name: '👗 Cute Dresses', 
              hint: 'Beautiful outfits that make you look even more gorgeous - you always look perfect' 
            },
            { 
              name: '🤗 Hugs and kisses', 
              hint: 'The thing I love giving you the most - your hugs make everything better' 
            },
            { 
              name: '💕 Our Love', 
              hint: 'The most precious thing - our beautiful relationship that started on 2nd September' 
            },
            { 
              name: '👕 Mine clothes', 
              hint: 'I know you love wearing mine clothes, smelling like me which suits uh ma gurllyyyy' 
            },
          ],
        },
        instructions: 'Find all the things that make you happy',
      },
      reward: {
        type: 'gallery',
        content: {
          images: personalData.photos.favoriteThings || [],
          message: 'I notice all the little things that make you smile ma lunnnn',
          specialGifts: ['👗 A Cute Dress for You', '🐶 Cute Puppy', '🤗 Hugs'], // Cute dress, puppy, and hugs
        },
        animation: 'cards',
      },
      theme: 'favorites',
    },
    {
      id: 6,
      title: 'Our Greatest Hits',
      description: 'The milestones of our love',
      challengeType: 'rhythm',
      challenge: {
        type: 'rhythm',
        data: {
          beats: 5, // Reduced from 10 to make it easier - just 5 taps needed!
          tempo: 'slow', // Slower tempo for easier gameplay
        },
        instructions: 'Tap along with the rhythm of our love story - just 5 easy taps!',
      },
      reward: {
        type: 'gallery',
        content: {
          images: personalData.photos.milestones || [],
          message: 'Ayaaa ma baccha you cleared this level too🤗',
          specialGifts: ['🧇 Belgium Waffles', '🍫 Chocolates', '🤗 Celebratory Hugs'], // Belgium waffles, chocolates, and hugs
        },
        animation: 'timeline',
      },
      theme: 'milestones',
    },
    {
      id: 7,
      title: 'Forever & Always',
      description: 'Our future together',
      challengeType: 'maze',
      challenge: {
        type: 'maze',
        data: {
          size: 'medium',
          shape: 'heart',
        },
        instructions: 'Navigate through the heart-shaped maze to reach our future',
      },
      reward: {
        type: 'certificate',
        content: {
          message: personalData.messages.futurePlans,
          certificate: 'Certificate of Eternal Love',
          specialGifts: ['🌷💐 Beautiful Lilies & Tulips', '🧸 Cute Teddy Bear', '👗 A Special Dress', '🍫 Chocolates', '🧇 Belgium Waffles', '🤗 Forever Hugs'], // All the special gifts for Lun
        },
        animation: 'fireworks',
      },
      theme: 'forever',
    },
  ] as Level[],
};

