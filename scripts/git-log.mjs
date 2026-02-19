import { execSync } from 'child_process';

try {
  const log = execSync('git log --oneline --all', { encoding: 'utf-8' });
  console.log("=== ALL COMMITS ===");
  console.log(log);
} catch (e) {
  console.error("Error:", e.message);
}
