/**
 * Site Configuration
 * This file contains site-specific settings for Bmpflip
 */

import { ConversionMode } from './conversion-config';

// Define site configuration types
export interface SiteConfig {
  siteName: string;
  defaultConversionMode: ConversionMode;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  logoText: string;
  domain: string;
  description?: string;
  keywords?: string[];
  showAdvancedOptions?: boolean;
}

// Configuration for Bmpflip
const siteConfig: SiteConfig = {
  siteName: 'Bmpflip',
  defaultConversionMode: 'bmpToWebp',
  primaryColor: '#EC93B5',
  secondaryColor: '#000000',
  accentColor: '#000000',
  logoText: 'Bmpflip',
  domain: 'bmpflip.com',
  description: 'Convert bmpToWebp in your browser',
  keywords: ['bmpToWebp', 'conversion', 'browser-based'],
  showAdvancedOptions: false
};

// Export the site configuration
export { siteConfig };
