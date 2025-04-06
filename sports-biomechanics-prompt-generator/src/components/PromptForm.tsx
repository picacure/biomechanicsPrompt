import React, { useState } from 'react';

interface PromptFormProps {
    onGeneratePrompts: (newPrompts: string[]) => void;
}

const PromptForm: React.FC<PromptFormProps> = ({ onGeneratePrompts }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const generatedPrompts = [`Generated prompt for: ${input}`];
        onGeneratePrompts(generatedPrompts);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter activity (e.g., playing basketball)"
            />
            <button type="submit">Generate Prompts</button>
        </form>
    );
};

export default PromptForm;