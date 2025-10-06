// tailwind.config.js
const { heroui } = require('@heroui/react');
module.exports = {
    darkMode: 'class', // Or 'media' for system preference
    // ... other configurations
    content: [
        '// Your content paths',
        './node_modules/@heroui/theme/dist/components/(form|input|modal|navbar).js',
    ],
    plugins: [heroui()],
};
