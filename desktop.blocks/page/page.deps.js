({
    shouldDeps: [
        { block: 'grid' },
        { block: 'text' },
        {
            block: 'i-bem',
            elem: 'dom',
            mods: {
                init: ['auto']
            }
        },
        {
            block: 'highlight',
            mods: { 'theme': ['solarized-light']}
        }
    ]
})
