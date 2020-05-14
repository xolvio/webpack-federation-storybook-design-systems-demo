const initialSectionsData = require('../section/20200513164925-dummy-data')

module.exports.description = '<Put your description here>';

module.exports.up = async (migration, {makeRequest}) => {
    const responses = await initialSectionsData.up(migration, {makeRequest})
    console.log("MICHAL: siema", JSON.stringify({
        method: 'PUT',
        url: `/entries/sectionsExample`,
        data: {
            fields: {
                "sections": responses.map(r => ({
                    "sys": {
                        "type": "Link",
                        "linkType": "Entry",
                        "id": r.sys.id
                    }
                }))
            }
        },
        headers: {
            'X-Contentful-Content-Type': 'sections',
        },
    }));
    await makeRequest({
        method: 'PUT',
        url: `/entries/sectionsExample`,
        data: {
            fields: {
                "sections": {
                    'en-US': responses.map(r => ({
                        "sys": {
                            "type": "Link",
                            "linkType": "Entry",
                            "id": r.sys.id
                        }
                    }))
                }
            }
        },
        headers: {
            'X-Contentful-Content-Type': 'sections',
        },
    });
};

module.exports.down = (migration) => {
    // Add your DOWN migration script here. See examples here:
    // https://github.com/contentful/migration-cli/tree/master/examples
};
