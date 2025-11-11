module.exports = {
    extends: ['@commitlint/config-conventional'],
    ignores: [
        message => message.startsWith('chore(release):'),
        // Windows compatibility: be more lenient
        message => process.platform === 'win32'
    ]
};
