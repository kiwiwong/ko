import { Command } from 'commander';
import { defaultPatterns } from './constants';
import { getTargetFiles } from './utils';
import { formatFilesWithPrettier } from './prettier';

type Option = {
  write?: boolean;
  configPath?: string;
};

function initKoLintCli(program: Command) {
  program
    .command('prettier [patterns]')
    .alias('pr')
    .description('use prettier to format your codes')
    .option('-w, --write', 'Edit files in-place. (Beware!)')
    .option('-c, --config <configPath>', 'set prettier config path')
    .action((patterns: string = defaultPatterns, opts: Option) => {
      const { write, configPath } = opts;
      const targetFiles = getTargetFiles(patterns);
      formatFilesWithPrettier(targetFiles, !write, configPath);
    });

  program
    .command('eslint [patterns]')
    .alias('es')
    .description('use eslint to format your codes')
    .option('-c, --config <path>', 'set eslint config path')
    .action((patterns: string = defaultPatterns, ops: Option) => {
      //TODO
    });
}

export default initKoLintCli;