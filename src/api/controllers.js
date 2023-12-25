const templateService = require('../services/templateService');
const emailService = require('../services/emailService');

exports.uploadTemplate = async (req, res) => {
  try {
    const { name, content } = req.body;
    await templateService.saveTemplate(name, content);
    res.status(200).json({ message: 'Template uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.sendEmail = async (req, res) => {
  try {
    const { templateName, data } = req.body;
    const emailContent = await templateService.populateTemplate(templateName, data);
    await emailService.sendEmail(emailContent); // Placeholder function
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
