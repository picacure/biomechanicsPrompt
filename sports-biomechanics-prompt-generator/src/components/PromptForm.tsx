import React, { useState } from 'react';
import CategorySelector from './CategorySelector';

const PromptForm = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [action, setAction] = useState('');
    const [prompt, setPrompt] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleActionChange = (event) => {
        setAction(event.target.value);
    };

    const generatePrompt = () => {
        // Placeholder for prompt generation logic
        setPrompt(`When a person is ${action}, they will use the following muscles in the ${selectedCategory}.`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        generatePrompt();
    };

    return (
        <div>
            <h2>Generate Sports Biomechanics Prompt</h2>
            <form onSubmit={handleSubmit}>
                <CategorySelector onCategoryChange={handleCategoryChange} />
                <input
                    type="text"
                    value={action}
                    onChange={handleActionChange}
                    placeholder="Enter action (e.g., grabbing the basketball rim)"
                    required
                />
                <button type="submit">Generate Prompt</button>
            </form>
            {prompt && <div><h3>Generated Prompt:</h3><p>{prompt}</p></div>}
        </div>
    );
};

export default PromptForm;