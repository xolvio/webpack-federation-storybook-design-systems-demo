module.exports.description = '<Put your description here>';

const sections = [
    {id: 'sectionA', heading: 'Training', description: 'Prepare your team and product for success. Team or 1-1 tuition on all aspects of test automation.', icon: 'flipChartIcon'},
    {id: 'sectionB', heading: 'Bespoke development', description: 'We help to transform systems, modernize solutions and renovate development ecosystems.', icon: 'screenIcon'},
    {id: 'sectionC', heading: 'Modernization', description: 'We can help you with your software delivery strategy to sustainably increase the productivity of your entire team and ensure you are continuously shipping valuable software to your customers.', icon: 'shapesIcon'},
]

module.exports.up = (migration, { makeRequest }) => {
    return Promise.all(sections.map((section) => makeRequest({
        method: 'PUT',
        url: `/entries/${section.id}`,
        data: {
            fields: {
                heading: {
                    'en-US': section.heading,
                },
                description: {
                    'en-US': section.description,
                },
                icon: {
                    'en-US': section.icon,
                },
            },
        },
        headers: {
            'X-Contentful-Content-Type': 'section',
        },
    })));
};

module.exports.down = (migration) => {
  // Add your DOWN migration script here. See examples here:
  // https://github.com/contentful/migration-cli/tree/master/examples
};
