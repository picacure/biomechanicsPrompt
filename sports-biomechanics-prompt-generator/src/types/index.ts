// filepath: /sports-biomechanics-prompt-generator/sports-biomechanics-prompt-generator/src/types/index.ts
export interface Muscle {
    name: string;
    type: 'agonist' | 'synergist' | 'antagonist';
    description: string;
}

export interface Bone {
    name: string;
    location: string;
    description: string;
}

export interface BodyPosition {
    name: string;
    description: string;
    examples: string[];
}

export interface Prompt {
    action: string;
    agonistMuscles: Muscle[];
    synergistMuscles: Muscle[];
    antagonistMuscles: Muscle[];
    bodyPosition: BodyPosition;
}