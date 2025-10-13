import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { NavbarMinimalColored } from '../components/Navbar/NavbarMinimalColored';
import { FeaturesCards } from '@/components/FeatureCards/FeatureCards';
import { FooterSocial } from '@/components/Footer/FooterSocial';
import { UserInfoIcons } from '@/components/UserInfoIcons/UserInfoIcons';
import { HeroTitle } from '@/components/HeroText/HeroTitle';
import { LeadGrid } from '@/components/LeadGrid/LeadGrid';
import { Chatbot } from '@/components/Chatbot/Chatbot';

export function HomePage() {
  return (
    <div>
      <NavbarMinimalColored />
      <div style={{ marginLeft: 110, minHeight: '100vh' }}>
        <HeroTitle />
        <LeadGrid />
        <FeaturesCards />
        <Chatbot />
        <FooterSocial />
        {/* ... */}
      </div>
    </div>
  );
}
