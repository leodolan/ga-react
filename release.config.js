module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/leodolan/ga-react",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'
    ]
}