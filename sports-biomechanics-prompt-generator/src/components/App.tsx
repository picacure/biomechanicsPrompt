import React, { useState } from 'react';
import PromptForm from './PromptForm';
import PromptDisplay from './PromptDisplay';
import './App.css';

const App: React.FC = () => {
    const [prompts, setPrompts] = useState<string[]>([]);

    const handleGeneratePrompts = (newPrompts: string[]) => {
        setPrompts(newPrompts);
    };

    return (
        <div className="app-container">
            <h1>Sports Biomechanics Prompt Generator</h1>
            <PromptForm onGeneratePrompts={handleGeneratePrompts} />
            <PromptDisplay prompts={prompts} />
        </div>
    );
};

export default App;