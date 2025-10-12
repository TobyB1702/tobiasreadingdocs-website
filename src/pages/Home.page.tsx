import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { NavbarMinimalColored } from '../components/Navbar/NavbarMinimalColored';
import { FeaturesCards } from '@/components/FeatureCards/FeatureCards';
import { FooterSocial } from '@/components/Footer/FooterSocial';

export function HomePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <NavbarMinimalColored />
      <div style={{ flex: 1 }}>
        <FeaturesCards />
      </div>
    </div>
  );
}
