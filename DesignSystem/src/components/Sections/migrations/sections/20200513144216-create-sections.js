const singleSectionInitialMigration = require('../../../Section/migrations/section/20200513162610-create-section');

module.exports.description = "Create content model for Sections";

  module.exports.up = (migration) => {
    singleSectionInitialMigration.up(migration);

  const sections = migration.createContentType('sections')
      .name("Sections")
      .displayField("sections")
      .description("");

  sections.createField("sections")
      .name("sections")
      .type("Array")
      .required(true)
      .items({"type":"Link","validations":[{"linkContentType":["section"]}],"linkType":"Entry"});

  sections.changeFieldControl("sections", "builtin", "entryLinksEditor", {"bulkEditing":false});
};

  module.exports.down = migration => migration.deleteContentType("sections");
