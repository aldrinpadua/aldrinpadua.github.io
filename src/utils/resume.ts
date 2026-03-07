import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('../../public', import.meta.url));

export function hasResume(pathInPublic: string): boolean {
  if (!pathInPublic || !pathInPublic.startsWith('/')) {
    return false;
  }

  return existsSync(`${publicDir}${pathInPublic}`);
}
