const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv))
  .usage(`Usage: node start.js --wait=10 --exit-code=0`)
  .option('wait', {
    wait: {
      description: 'Seconds to wait',
      type: 'number',
    },
    'exit-code': {
      description: 'Exit code to exit with',
      type: 'number',
    },
    error: {
      description: 'Error message to throw',
      type: 'string',
    },
    message: {
      description: 'Message to print',
      type: 'string',
    },
  })
  .help()
  .alias('help', 'h');

const { wait = 0, exitCode = 0, error, message = 'Hello Debug' } = argv;

console.info('Debug container started');
console.info('Message:', message);

if (wait > 0) {
  console.info('Waiting...');
}
setTimeout(() => {
  if (error) {
    throw new Error(error);
  }
  console.info('Exiting with code', exitCode);
  process.exit(exitCode);
}, wait * 1000);
