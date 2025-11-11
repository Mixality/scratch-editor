module.exports = {
    extends: ['@commitlint/config-conventional'],
    ignores: [
        message => message.startsWith('chore(release):'),
        message => message.length < 10, // Ignore very short messages
        message => true // Ignore all messages (effectively disable)
    ],
    rules: {
        'type-enum': [0], // Disable type requirement
        'subject-min-length': [0], // Disable minimum length
        'header-max-length': [0], // Disable max length
    }
};
