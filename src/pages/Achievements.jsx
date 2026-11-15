import usePageMeta from '../components/usePageMeta.js';
import { RANKS } from '../data/achievements.js';
import { CERTIFICATES } from '../data/certificates.js';
import AchievementsCta from '../sections/achievements/AchievementsCta.jsx';
import AchievementsHero from '../sections/achievements/AchievementsHero.jsx';
import CertificateWall from '../sections/achievements/CertificateWall.jsx';
import MedalWall from '../sections/achievements/MedalWall.jsx';
import Toolbox from '../sections/achievements/Toolbox.jsx';

export default function Achievements() {
  usePageMeta({
    title: 'Achievements',
    description:
      'GATE 2025 AIR 36, CSIR-UGC NET AIR 86 with JRF, IIT JAM 2024 AIR 90, NGPE national top 1%: ranks, skills and certificates of Nitish.',
  });
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
