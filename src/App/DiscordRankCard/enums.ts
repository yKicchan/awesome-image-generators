export const DiscordStatus = {
  Online: 'online',
  Idle: 'idle',
  DoNotDisturb: 'do-not-disturb',
  Offline: 'offline'
} as const;

export type DiscordStatus = typeof DiscordStatus[keyof typeof DiscordStatus];
