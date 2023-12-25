const Handlebars = require('handlebars');
const Template = require('../models/templateModel');

exports.saveTemplate = async (name, content) => {
  const newTemplate = new Template({ name, content });
  await newTemplate.save();
};

exports.populateTemplate = async (templateName, data) => {
  const template = await Template.findOne({ name: templateName });
  if (!template) {
    throw new Error('Template not found');
  }

  const compiledTemplate = Handlebars.compile(template.content);
  return compiledTemplate(data);
};
