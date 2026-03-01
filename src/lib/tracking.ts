const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_keyword",
  "gclid",
  "fbclid",
  "msclkid",
  "adsu_cid",
  "adsu_asid",
  "adsu_aid",
] as const;

const STORAGE_KEY = "sf_tracking";

interface TrackingData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  msclkid: string;
  adsu_cid: string;
  adsu_asid: string;
  adsu_aid: string;
  landing_page: string;
  referrer: string;
}

/**
 * Call on page load to capture and persist UTM params + click IDs.
 * Only overwrites stored values if the current URL has tracking params.
 */
export function captureTrackingParams(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const hasTracking = TRACKING_KEYS.some((key) => params.has(key));

  if (hasTracking) {
    const data: TrackingData = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
      fbclid: params.get("fbclid") || "",
      msclkid: params.get("msclkid") || "",
      adsu_cid: params.get("adsu_cid") || "",
      adsu_asid: params.get("adsu_asid") || "",
      adsu_aid: params.get("adsu_aid") || "",
      landing_page: window.location.pathname + window.location.search,
      referrer: document.referrer,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } else if (!sessionStorage.getItem(STORAGE_KEY)) {
    // First visit with no params — store landing page + referrer only
    const data: TrackingData = {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
      gclid: "",
      fbclid: "",
      msclkid: "",
      adsu_cid: "",
      adsu_asid: "",
      adsu_aid: "",
      landing_page: window.location.pathname + window.location.search,
      referrer: document.referrer,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}

/**
 * Retrieve stored tracking data for form submission.
 */
export function getTrackingData(): TrackingData {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
      gclid: "",
      fbclid: "",
      msclkid: "",
      adsu_cid: "",
      adsu_asid: "",
      adsu_aid: "",
      landing_page: "",
      referrer: "",
    };
  }

  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }

  // Fallback to current URL params
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    gclid: params.get("gclid") || "",
    fbclid: params.get("fbclid") || "",
    msclkid: params.get("msclkid") || "",
    adsu_cid: params.get("adsu_cid") || "",
    adsu_asid: params.get("adsu_asid") || "",
    adsu_aid: params.get("adsu_aid") || "",
    landing_page: window.location.pathname,
    referrer: document.referrer,
  };
}
