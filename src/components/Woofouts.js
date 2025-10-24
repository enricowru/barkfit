import React, { useState } from 'react';

function Woofouts() {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const exercises = [
    {
      id: 1,
      title: "Pawcep Curls",
      image: "/images/exercises/pawcepcurls.jpg",
      description: "A strength-building exercise where your dog performs controlled movements with their front paws, similar to bicep curls. This workout targets the shoulder and chest muscles while improving coordination and balance. Perfect for building upper body strength in dogs. Duration: 10-15 minutes. Difficulty: Moderate."
    },
    {
      id: 2,
      title: "The Tail Trotter",
      image: "/images/exercises/tailtrotter.jpg",
      description: "A cardiovascular workout where your dog walks or runs on a treadmill at a controlled pace. This exercise improves endurance, helps with weight management, and provides great indoor exercise during bad weather. Always supervise and start slow. Duration: 15-30 minutes. Difficulty: Easy to Moderate."
    },
    {
      id: 3,
      title: "Doga",
      image: "/images/exercises/doga.jpg",
      description: "A calming yoga practice designed specifically for dogs. This exercise helps improve flexibility, reduces anxiety, and strengthens the bond between you and your furry friend. Perfect for senior dogs or those recovering from injury. Duration: 15-20 minutes. Difficulty: Easy to Moderate."
    },
    {
      id: 4,
      title: "Pawsh-Up",
      image: "/images/exercises/pawshup.jpg",
      description: "A strength-building exercise where your dog stands on their hind legs against a wall or your legs. This workout targets core muscles, improves balance, and builds upper body strength. Great for building confidence and coordination. Duration: 10-15 minutes. Difficulty: Moderate to Hard."
    },
    {
      id: 5,
      title: "Pawlanks",
      image: "/images/exercises/pawlank.jpg",
      description: "A core-strengthening exercise where your dog holds a plank position, similar to human planks but adapted for canine anatomy. This workout builds incredible core strength, improves posture, and enhances overall stability. Great for dogs who need to strengthen their midsection. Duration: 5-10 minutes. Difficulty: Moderate to Hard."
    },
    {
      id: 6,
      title: "Pawlates",
      image: "/images/exercises/pawlates.png",
      description: "A low-impact exercise routine inspired by Pilates, designed specifically for dogs. This workout focuses on controlled movements, flexibility, and core strength. Perfect for improving balance, coordination, and muscle tone without putting stress on joints. Duration: 20-30 minutes. Difficulty: Easy to Moderate."
    },
    {
      id: 7,
      title: "Tug-and-Tone",
      image: "/images/exercises/tugandtone.jpg",
      description: "An interactive strength training exercise using tug toys and resistance. This workout builds jaw strength, neck muscles, and overall upper body power while providing mental stimulation. Great for high-energy dogs who love to play. Duration: 10-20 minutes. Difficulty: Moderate."
    },
    {
      id: 8,
      title: "Fetchsprints",
      image: "/images/exercises/fetchsprints.jpg",
      description: "A high-intensity cardio workout combining fetch with sprint intervals. This exercise improves cardiovascular health, builds endurance, and burns calories while keeping your dog mentally engaged. Perfect for active dogs who love to run and retrieve. Duration: 15-25 minutes. Difficulty: Moderate to Hard."
    }
  ];

  const handleCardClick = (exerciseId) => {
    setFlippedCards(prev => {
      const newFlipped = new Set(prev);
      if (newFlipped.has(exerciseId)) {
        newFlipped.delete(exerciseId);
      } else {
        newFlipped.add(exerciseId);
      }
      return newFlipped;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-barkfit-gray to-barkfit-dark py-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Exercise Grid */}
        <div className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {exercises.map((exercise) => (
              <div 
                key={exercise.id} 
                className={`bg-barkfit-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer perspective-1000 h-[300px] hover:-translate-y-1 hover:shadow-2xl ${
                  flippedCards.has(exercise.id) ? 'flipped' : ''
                }`}
                onClick={() => handleCardClick(exercise.id)}
              >
                <div className="relative w-full h-full text-center transition-transform duration-600 transform-style-preserve-3d">
                  {/* Front of card */}
                  <div className="absolute w-full h-full backface-hidden flex flex-col">
                    <div className="bg-black p-4">
                      <h3 className="text-white text-lg font-bold m-0 uppercase tracking-wider">{exercise.title}</h3>
                    </div>
                    <div className="flex-1 overflow-hidden flex items-center justify-center">
                      <img 
                        src={exercise.image} 
                        alt={exercise.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute w-full h-full backface-hidden flex flex-col transform rotate-y-180">
                    <div className="bg-black p-4">
                      <h3 className="text-white text-lg font-bold m-0 uppercase tracking-wider">{exercise.title}</h3>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4">
                      <div className="bg-barkfit-gray rounded-lg h-full flex flex-col justify-center p-3">
                        <p className="text-gray-300 text-sm font-medium leading-relaxed m-0 text-left">{exercise.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Woofouts;

