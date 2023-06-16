module.exports = async (text, sourceLanguage, targetLanguage) => {

    const translate = require('translate-google');

    try {
        const translation = await translate(text, { from: sourceLanguage, to: targetLanguage });
        return translation;
    } catch (error) {
        console.error('Erro ao traduzir o texto:', error);
    }
}
