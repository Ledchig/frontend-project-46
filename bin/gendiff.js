#!/usr/bin/env node
/* eslint-disable import/extensions */
import { Command } from 'commander';
import genDiff from '../index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) => {
    console.log(genDiff(filePath1, filePath2));
  });

program.parse();
