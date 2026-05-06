const rawHelpUrl =
  process.env.NEXT_PUBLIC_HOSTAO_HELP_URL?.trim() ||
  process.env.NEXT_PUBLIC_HOSTAO_HELP_CENTER_URL?.trim();

export const HOSTAO_HELP_CENTER_URL =
  !rawHelpUrl || rawHelpUrl === '/help' || rawHelpUrl === '/help/' || rawHelpUrl === '/support' || rawHelpUrl === '/support/'
    ? '/support'
    : rawHelpUrl;

export const HOSTAO_HELP_URL = HOSTAO_HELP_CENTER_URL;
export const HOSTAO_HELP_TICKETS_URL =
  process.env.NEXT_PUBLIC_HOSTAO_HELP_TICKETS_URL?.trim() || '/support/tickets';
export const HOSTAO_BESTEMAIL_NEWSLETTER_ENDPOINT =
  process.env.HOSTAO_BESTEMAIL_NEWSLETTER_ENDPOINT ||
  process.env.NEXT_PUBLIC_BESTEMAIL_NEWSLETTER_ENDPOINT ||
  'https://bestemail.in/api/newsletter/subscribe';
export const HOSTAO_NEWSLETTER_ENDPOINT = HOSTAO_BESTEMAIL_NEWSLETTER_ENDPOINT;
export const HOSTAO_WHATSAPP_INDIA_NUMBER = process.env.NEXT_PUBLIC_HOSTAO_WHATSAPP_INDIA || '917470111222';
export const HOSTAO_WHATSAPP_USA_NUMBER = process.env.NEXT_PUBLIC_HOSTAO_WHATSAPP_USA || '13237447383';

export const HOSTAO_COOKIESEAL_SITE_KEY = process.env.NEXT_PUBLIC_COOKIESEAL_SITE_KEY || 'hostao-com';
export const HOSTAO_COOKIESEAL_SCRIPT_SRC =
  process.env.NEXT_PUBLIC_COOKIESEAL_SCRIPT_SRC || `https://cookieseal.in/api/s/${HOSTAO_COOKIESEAL_SITE_KEY}`;
export const HOSTAO_COMPLIANCE_BADGE_HREF =
  'https://gdpr.euverify.com/verify/11172608-cbe5-4070-b46a-678b95ffb83f';
export const HOSTAO_COMPLIANCE_BADGE_SRC =
  'https://gdpr.euverify.com/images/BOTH.png';

export const HOSTAO_AUTOCHAT_WIDGET_SRC =
  process.env.NEXT_PUBLIC_AUTOCHAT_WIDGET_SRC || 'https://widget.autochat.in/v1/widget.js';
export const HOSTAO_AUTOCHAT_SITE_ID = process.env.NEXT_PUBLIC_AUTOCHAT_SITE_ID || 'hostao-com';
export const HOSTAO_AUTOCHAT_THEME = process.env.NEXT_PUBLIC_AUTOCHAT_THEME || 'auto';
export const HOSTAO_AUTOCHAT_POSITION = process.env.NEXT_PUBLIC_AUTOCHAT_POSITION || 'bottom-right';
export const HOSTAO_AUTOCHAT_LANGUAGE = process.env.NEXT_PUBLIC_AUTOCHAT_LANGUAGE || 'en';
export const HOSTAO_AUTOCHAT_FALLBACK_URL =
  process.env.NEXT_PUBLIC_AUTOCHAT_FALLBACK_URL || HOSTAO_HELP_TICKETS_URL;

export const HOSTAO_GTM_ID = process.env.NEXT_PUBLIC_HOSTAO_GTM_ID || 'GTM-WH3PL3WL';
export const HOSTAO_RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_HOSTAO_RECAPTCHA_SITE_KEY || '6Le1GqoaAAAAAKlRlaEcUgFTBI-7__yvB5WG8fZg';
export const HOSTAO_RECAPTCHA_SECRET_KEY =
  process.env.HOSTAO_RECAPTCHA_SECRET_KEY || process.env.RECAPTCHA_SECRET_KEY || '';
export const HOSTAO_CONTACT_WEBHOOK_URL = process.env.HOSTAO_CONTACT_WEBHOOK_URL || '';
export const HOSTAO_CONTACT_WEBHOOK_BEARER_TOKEN = process.env.HOSTAO_CONTACT_WEBHOOK_BEARER_TOKEN || '';
export const HOSTAO_HELPKIT_TICKET_ENDPOINT =
  process.env.HOSTAO_HELPKIT_TICKET_ENDPOINT || 'https://helpkit.in/api/tickets';
export const HOSTAO_HELPKIT_INTERNAL_KEY = process.env.HOSTAO_HELPKIT_INTERNAL_KEY || '';
export const HOSTAO_HELPKIT_ORG_ID = process.env.HOSTAO_HELPKIT_ORG_ID || 'helpkit';
export const HOSTAO_HELPKIT_APPWRITE_ENDPOINT =
  process.env.HOSTAO_HELPKIT_APPWRITE_ENDPOINT || 'https://cloud.hostao.com/v1';
export const HOSTAO_HELPKIT_APPWRITE_PROJECT =
  process.env.HOSTAO_HELPKIT_APPWRITE_PROJECT || 'helpkit-app';
export const HOSTAO_HELPKIT_APPWRITE_API_KEY = process.env.HOSTAO_HELPKIT_APPWRITE_API_KEY || '';
export const HOSTAO_HELPKIT_APPWRITE_DATABASE_ID =
  process.env.HOSTAO_HELPKIT_APPWRITE_DATABASE_ID || 'main';
export const HOSTAO_HELPKIT_TICKETS_COLLECTION_ID =
  process.env.HOSTAO_HELPKIT_TICKETS_COLLECTION_ID || 'tickets';
export const HOSTAO_LIVECHAT_LICENSE = process.env.NEXT_PUBLIC_HOSTAO_LIVECHAT_LICENSE || '';
export const HOSTAO_LIVECHAT_TRACKING_SRC =
  process.env.NEXT_PUBLIC_HOSTAO_LIVECHAT_TRACKING_SRC || 'https://cdn.livechatinc.com/tracking.js';
export const HOSTAO_CLOUDFLARE_BEACON_TOKEN =
  process.env.NEXT_PUBLIC_HOSTAO_CLOUDFLARE_BEACON_TOKEN || '3fea44721b6d4734a2246113203adda4';

declare global {
  interface Window {
    AutoChatWidget?: { open?: () => void; toggle?: () => void };
    autochatWidget?: { open?: () => void; toggle?: () => void };
    HostaoChatWidget?: { open?: () => void; toggle?: () => void };
  }
}

function readCountryCookie(cookieName: string = 'hostao_country') {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp(`(?:^|; )${cookieName}=([^;]*)`));
  return match ? decodeURIComponent(match[1]).toUpperCase() : '';
}

export function getHostaoWhatsAppNumber(options?: { hostname?: string; country?: string; locale?: string }) {
  const hostname = (options?.hostname || '').toLowerCase();
  const cookieCountry = readCountryCookie();
  const country = (options?.country || cookieCountry || '').toUpperCase();
  const locale = (options?.locale || '').toLowerCase();

  if (country === 'IN' || hostname.endsWith('hostao.in') || locale.endsWith('-in') || locale === 'en-in') {
    return HOSTAO_WHATSAPP_INDIA_NUMBER;
  }

  return HOSTAO_WHATSAPP_USA_NUMBER;
}

export function getHostaoWhatsAppUrl(message: string = 'Hi Hostao', options?: { hostname?: string; country?: string; locale?: string }) {
  const number = getHostaoWhatsAppNumber(options);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openHostaoChat(fallbackUrl: string = HOSTAO_AUTOCHAT_FALLBACK_URL) {
  if (typeof window === 'undefined') return;

  const widget = window.AutoChatWidget || window.autochatWidget || window.HostaoChatWidget;
  if (widget?.open) {
    widget.open();
    return;
  }
  if (widget?.toggle) {
    widget.toggle();
    return;
  }

  window.dispatchEvent(new CustomEvent('autochat:open'));
  document.dispatchEvent(new CustomEvent('autochat:open'));

  window.setTimeout(() => {
    const retriedWidget = window.AutoChatWidget || window.autochatWidget || window.HostaoChatWidget;
    if (retriedWidget?.open) {
      retriedWidget.open();
      return;
    }
    if (retriedWidget?.toggle) {
      retriedWidget.toggle();
      return;
    }
    window.location.href = fallbackUrl;
  }, 1500);
}
