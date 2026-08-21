import { business } from '@data/business';

/**
 * Every outbound contact link, built once from business.ts.
 *
 * Nothing else in the repo is allowed to write `tel:` or a wa.me URL by hand —
 * that is how a phone number ends up correct in four places and wrong in the
 * fifth.
 */

export const phoneDisplay = business.phone.display;
export const telHref = `tel:${business.phone.e164}`;
export const smsHref = `sms:${business.phone.e164}`;
export const mailtoHref = `mailto:${business.email}`;

/**
 * WhatsApp with the message already written. The text is per-section and per
 * language, so someone arriving on the business band opens a chat about a
 * service agreement rather than a blank thread.
 */
export function whatsappHref(message: string): string {
  return `https://wa.me/${business.phone.whatsappId}?text=${encodeURIComponent(message)}`;
}
