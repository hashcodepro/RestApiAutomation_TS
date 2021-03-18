let common = [
    'src/tests/features/jsonplaceholder/posts.feature',
    // '--require src/tests/step-definitions/jsonplaceholder/posts.steps.js'
    '--format @cucumber/pretty-formatter',
    // '--publish',
    // '--retry 1',
    '--format json:src/reports/report.json'
].join(' ');

export default common;