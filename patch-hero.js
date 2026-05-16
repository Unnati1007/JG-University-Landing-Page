const fs = require('fs');
const file = 'src/components/sections/Hero.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

const startIdx = lines.findIndex(l => l.includes('{/* Right Side — 3D Isometric Monitor + Books */}'));
const endIdx = lines.findIndex(l => l.includes('</section>'));

if (startIdx !== -1 && endIdx !== -1) {
  let prefix = lines.slice(0, startIdx);
  let suffix = lines.slice(endIdx - 2);

  // insert import if not present
  if (!prefix.join('\n').includes('HeroRightSide')) {
    prefix.splice(8, 0, 'import { HeroRightSide } from "./HeroRightSide";');
  }

  const final = prefix.join('\n') + '\n        <HeroRightSide />\n' + suffix.join('\n');
  fs.writeFileSync(file, final);
  console.log('Successfully updated Hero.tsx with HeroRightSide');
} else {
  console.log('Failed to find markers');
}
