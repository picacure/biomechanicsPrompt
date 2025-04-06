import { Muscle, Bone, Position } from '../types';

const generatePrompt = (action: string, selectedCategory: string, muscles: Muscle[], bones: Bone[], positions: Position[]): string => {
    const selectedMuscles = muscles.filter(muscle => muscle.category === selectedCategory);
    const selectedBones = bones.filter(bone => bone.category === selectedCategory);
    const selectedPosition = positions.find(position => position.action === action);

    if (!selectedPosition) {
        return `No position found for the action: ${action}.`;
    }

    const agonistMuscles = selectedMuscles.filter(muscle => muscle.type === 'agonist').map(muscle => muscle.name).join(', ');
    const synergistMuscles = selectedMuscles.filter(muscle => muscle.type === 'synergist').map(muscle => muscle.name).join(', ');
    const antagonistMuscles = selectedMuscles.filter(muscle => muscle.type === 'antagonist').map(muscle => muscle.name).join(', ');

    return `When a person is ${action}, they will use the following muscles: 
    Agonist muscles: ${agonistMuscles}. 
    Synergist muscles: ${synergistMuscles}. 
    Antagonist muscles: ${antagonistMuscles}. 
    Position: ${selectedPosition.description}.`;
};

export { generatePrompt };