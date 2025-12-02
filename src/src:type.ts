export enum Mood {
  STRESSED = 'Stressed',
  ENERGETIC = 'Energetic',
  BORED = 'Bored',
  ANXIOUS = 'Anxious',
  LAZY = 'Lazy',
  ADVENTUROUS = 'Adventurous'
}

export enum Environment {
  HOME = 'Living Room',
  GYM = 'Gym',
  PARK = 'City Park',
  DEEP_NATURE = 'Forest/Trail',
  BACKYARD = 'Backyard'
}

export interface WorkoutStats {
  strength: number;
  cardio: number;
  mindfulness: number;
  fun: number;
  natureConnection: number;
}