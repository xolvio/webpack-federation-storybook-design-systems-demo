module.exports.description = "Create content model for Section";

  module.exports.up = (migration) => {
  const section = migration.createContentType('section')
  .name("Section")
  .displayField("heading")
  .description("");
  
  section.createField("heading")
  .name("heading")
  .type("Symbol")
  .required(true);

  section.createField("description")
  .name("description")
  .type("Symbol")
  .required(true);

  section.createField("icon")
  .name("icon")
  .type("Symbol")
  .required(true);

  section.changeFieldControl("heading", "builtin", "singleLine");
section.changeFieldControl("description", "builtin", "singleLine");
section.changeFieldControl("icon", "builtin", "singleLine");
};

  module.exports.down = migration => migration.deleteContentType("section");
