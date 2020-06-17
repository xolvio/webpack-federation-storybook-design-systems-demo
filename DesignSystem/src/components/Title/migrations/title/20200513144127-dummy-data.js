module.exports.description = '<Put your description here>';

module.exports.up = async (migration, {makeRequest}) => {
    const elo = await makeRequest({
        method: 'PUT',
        url: `/entries/titleExample`,
        data: {
            fields: {
                subheading: {
                    'en-US': 'SERVICES',
                },
                title: {
                    'en-US': 'Let us up your game',
                },
            },
        },
        headers: {
            'X-Contentful-Content-Type': 'title',
        },
    })
};

module.exports.down = (migration) => {
    // Add your DOWN migration script here. See examples here:
    // https://github.com/contentful/migration-cli/tree/master/examples
};
