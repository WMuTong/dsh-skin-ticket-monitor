/**
 * Host half of the ticket-monitor skin.
 *
 * The visible work happens in `./client`, which the client module system loads
 * because this package declares `dsh.client`. The host half only marks the
 * package as an active bundle entry so that module graph includes it.
 */
export const name = 'skin-ticket-monitor'

export function apply() {}
