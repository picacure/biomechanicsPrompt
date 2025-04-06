// filepath: /sports-biomechanics-prompt-generator/sports-biomechanics-prompt-generator/src/types/index.ts
// Define muscle type
export interface Muscle {
    id: string;
    name: string;
    category: string;
    type: 'agonist' | 'synergist' | 'antagonist';
    region: string;
    description?: string;
}

// Define bone type
export interface Bone {
    id: string;
    name: string;
    category: string;
    region: string;
    description?: string;
}

// Define position type
export interface Position {
    id: string;
    action: string;
    description: string;
    bodyParts: string[];
    relatedMuscles?: string[];
    relatedBones?: string[];
}