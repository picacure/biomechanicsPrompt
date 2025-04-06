# sports-biomechanics-prompt-generator

This project is a React application designed to generate prompts related to sports biomechanics. It includes various categories of biomechanics, detailed information about 606 muscles and bones, and corresponding human body positions. 

## Project Structure

- **public/index.html**: The main HTML file that serves as the entry point for the React application.
- **src/components**: Contains the React components for the application.
  - **App.tsx**: The main component that manages the overall layout and state of the application.
  - **PromptForm.tsx**: A component for user input to generate prompts related to sports biomechanics.
  - **PromptDisplay.tsx**: A component that displays the generated prompts based on user input.
  - **CategorySelector.tsx**: A component for selecting different biomechanics categories.
- **src/data**: Contains data files for muscles, bones, and positions.
  - **musclesAndBones.ts**: An array of objects representing the 606 muscles and bones.
  - **positions.ts**: An array of objects representing various human body positions.
- **src/styles**: Contains CSS styles for the application.
  - **App.css**: Styles defining the layout and appearance of components.
- **src/utils**: Contains utility functions for the application.
  - **promptGenerator.ts**: Functions that generate prompts based on user input.
- **src/types**: Contains TypeScript interfaces and types used throughout the application.
  - **index.ts**: Type definitions for muscles, bones, and prompts.
- **src/index.tsx**: The entry point for the React application, rendering the App component.
- **src/react-app-env.d.ts**: TypeScript definitions for the React application environment.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd sports-biomechanics-prompt-generator
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage Examples

- When a person is grabbing the basketball rim, they will use the following agonist muscles, synergist muscles, and antagonist muscles.
- Select a category from the dropdown to tailor the prompts generated based on specific biomechanics aspects.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.