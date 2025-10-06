export const siteConfig = {
    title: 'Татарская кухня',
    description: 'Рецепты татарской кухни',
    navItems: [
        { href: '/', label: 'Рецепты' },
        { href: '/ingredients', label: 'Ингредиенты' },
        { href: '/about', label: 'О нас' },
    ],
    pagesContent: {
        '/': {
            content: 'Receipts here',
        },
        '/ingredients': {
            content: 'Traditional ingredients',
        },
        '/about': {
            content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. <ul><li><strong>Duis</strong> aute irure dolor</li> <li>reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li> <li><strong>Excepteur</strong> sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li></ul>`,
        },
    },
};
