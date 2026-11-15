import { RANKS } from '../data/achievements.js';
import { CERTIFICATES } from '../data/certificates.js';
import AchievementsCta from '../sections/achievements/AchievementsCta.jsx';
import AchievementsHero from '../sections/achievements/AchievementsHero.jsx';
import CertificateWall from '../sections/achievements/CertificateWall.jsx';
import MedalWall from '../sections/achievements/MedalWall.jsx';
import Toolbox from '../sections/achievements/Toolbox.jsx';

export default function Achievements() {
  return (
    <>
      <AchievementsHero topRank={RANKS[0]} />
      <MedalWall ranks={RANKS} />
      <Toolbox />
      <CertificateWall certificates={CERTIFICATES} />
      <AchievementsCta />
    </>
  );
}
