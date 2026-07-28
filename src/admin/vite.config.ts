import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  const existingDedupe = config.resolve?.dedupe ?? [];
  const existingAlias = config.resolve?.alias ?? {};

  return mergeConfig(config, {
    resolve: {
      dedupe: [
        ...(Array.isArray(existingDedupe) ? existingDedupe : []),
        '@codemirror/state',
        '@codemirror/view',
        '@codemirror/language',
        '@codemirror/commands',
        '@codemirror/autocomplete',
        '@codemirror/lint',
        '@codemirror/search',
        '@codemirror/lang-json',
        '@codemirror/theme-one-dark',
      ],
    },
  });
};
