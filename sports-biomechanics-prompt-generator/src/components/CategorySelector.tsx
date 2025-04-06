import React from 'react';

const categories = [
    { id: 'muscleGroups', name: 'Muscle Groups' },
    { id: 'bodyPositions', name: 'Body Positions' },
    { id: 'movements', name: 'Movements' },
];

interface CategorySelectorProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ selectedCategory, onCategoryChange }) => {
    return (
        <div>
            <label htmlFor="category-select">Select a Category:</label>
            <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;