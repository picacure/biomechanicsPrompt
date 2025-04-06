import React from 'react';

interface PromptDisplayProps {
    prompt: string;
}

const PromptDisplay: React.FC<PromptDisplayProps> = ({ prompt }) => {
    return (
        <div className="prompt-display">
            <h2>Generated Prompt</h2>
            <p>{prompt}</p>
        </div>
    );
};

export default PromptDisplay;