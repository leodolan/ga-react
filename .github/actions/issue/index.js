const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    // This should be a token with access to your repository scoped in as a secret.
    // The YML workflow will need to set myToken with the GitHub Secret Token
    // myToken: ${{ secrets.GITHUB_TOKEN }}
    // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
    try{
        const token = core.getInput('token');
        const title = core.getInput('title');
        const body = core.getInput('body');
        const assignees = core.getInput('assignees');
    
        const octokit = new github.getOctokit(token);
        
        const response = await octokit.rest.issues.create({
          ...github.context.repo,
          title: 'Issue Title',
          body: 'Issue Body',
          assignees: assignees ? assignees.split(',') : undefined
        });
    
        core.setOutput('issue', JSON.stringify(response.data));
    
    } catch (err){
        core.setFailed(err.message);
    }
}

run();