import React from 'react';

interface PromptDisplayProps {
    prompt: string[];
}

const PromptDisplay: React.FC<PromptDisplayProps> = ({ prompt }) => {
    return (
        <div>
            {prompt.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};

export default PromptDisplay;