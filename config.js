/**
 * ============================================================
 *  PMT TOOLS — CENTRAL CONFIGURATION
 *  config.js
 *
 *  This is the single source of truth for all shared settings
 *  across the PMT tool suite:
 *    - home.html        (Launcher)
 *    - downtime.html    (Downtime Tracker)
 *    - index.html       (Asset Tracker)
 *    - register.html    (Asset Register)
 *
 *  HOW TO USE
 *  ----------
 *  Add this line to the <head> of each HTML file,
 *  BEFORE the tool's own <script> block:
 *
 *    <script src="config.js"></script>
 *
 *  Then reference any value as:
 *    CONFIG.supabaseUrl
 *    CONFIG.mechanics
 *    CONFIG.lines
 *    etc.
 *
 *  MAKING CHANGES
 *  --------------
 *  Edit this file only. Changes apply to all tools instantly
 *  on next page load — no need to touch individual HTML files.
 *
 *  Last updated : 2025
 *  Maintained by: Bless / PMT team
 * ============================================================
 */

const CONFIG = {

  // ── APP IDENTITY ──────────────────────────────────────────────
  appName    : 'PMT Tools',
  facility   : 'Prestige Clothing — Caledon',
  version    : '2.0.0',

  // ── NAVIGATION (page filenames) ───────────────────────────────
  // Update these if you rename any of the HTML files
  pages: {
    home      : 'home.html',
    downtime  : 'downtime.html',
    tracker   : 'index.html',
    register  : 'register.html',
  },

  // ── SUPABASE ──────────────────────────────────────────────────
  // These credentials are safe to include here — the anon key
  // is public-facing and access is controlled by Supabase RLS.
  supabaseUrl : 'https://tdrlvyblmcqctifcikhq.supabase.co',
  supabaseKey : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkcmx2eWJsbWNxY3RpZmNpa2hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NzYwNzEsImV4cCI6MjA4OTM1MjA3MX0.pZKNtb_CzDEPYk90sx0JRhsv1MOV75S3gv2oYFqVOWw',

  // ── ONESIGNAL (push notifications) ───────────────────────────
  oneSignalAppId : '81ad3998-627e-479f-b011-cb08acc7c3d8',

  // ── SHIFT HOURS ───────────────────────────────────────────────
  // Times in 24h. Used by home.html (shift indicator) and
  // downtime.html (shift-aware downtime calculation).
  shift: {
    startHour   : 7,
    startMinute : 45,
    // Mon–Thu end
    endHour     : 16,
    endMinute   : 45,
    // Friday end (shorter shift)
    fridayEndHour   : 15,
    fridayEndMinute : 30,
    // Which days have a shift: 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri
    // 0=Sun and 6=Sat are excluded by default
    workDays    : [1, 2, 3, 4, 5],
  },

  // ── PRODUCTION LINES ─────────────────────────────────────────
  // Used in: downtime.html, index.html, register.html
  // Add or remove lines here — dropdowns in all tools update automatically.
  lines: [
    'Line 1',  'Line 2',  'Line 3',  'Line 4',
    'Line 5',  'Line 6',  'Line 7',  'Line 8',
    'Line 9',  'Line 10', 'Line 11', 'Line 12',
    'Line 13', 'Line 14', 'Line 15', 'Line 16',
    'Line 17', 'Line 18', 'Line 19', 'Line 20',
    'Line 21', 'Line 22', 'Line 23', 'Line 24',
    'S/ROOM','T/ROOM',
  ],

  // ── POOL LOCATIONS ────────────────────────────────────────────
  // Storage/pool areas — appended to lines in location dropdowns
  pools: [
    'Pool A',
    'Pool B',
  ],

  // ── MECHANIC NAMES ────────────────────────────────────────────
  // Used in: downtime.html (investigate + resolve dropdowns)
  // Add new mechanics here — all dropdowns update automatically.
  mechanics: [
    'Ashley',
    'Bernard',
    'Bradwin',
    'Keenan',
    'Khanyisa',
    'Lele',
    'Monray',
    'Nur',
    'Phillip',
    'Phumzi',
    'Ralton',
    'Riedaw',
    'Wallied',
  ],

  // ── FAULT TYPES ───────────────────────────────────────────────
  // Used in: downtime.html (supervisor fault dropdown)
  faults: [
    'Thread breaking',
    'Needle breaking',
    'Skipped stitches',
    'Machine not feeding',
    'Machine not sewing',
    'Unusual noise / vibration',
    'Machine stopped — error light',
    'Machine — safety',
  ],

  // ── ERROR CODES (mechanic resolution) ────────────────────────
  // Used in: downtime.html (mechanic resolve dropdown)
  errorCodes: [
    'Feed system fault',
    'Mechanical / timing fault',
    'Thread system fault',
    'Needle / hook fault',
    'Setup / operator error',
    'Electrical / sensor fault',
    'Safety — Eye guard',
    'Safety — Finger guard',
    'Other — see comments',
  ],

  // ── MACHINE TYPES ─────────────────────────────────────────────
  // Used in: register.html (type dropdown + search)
  // Each entry: { code, desc }
  //   code — short code stored in the database
  //   desc — full human-readable description
  machineTypes: [
    { code: 'BLNDST',           desc: 'BLIND STITCH MACHINE' },
    { code: 'BRTCK',            desc: 'BARTACKING MACHINE' },
    { code: 'BTN W/P',          desc: 'BUTTON WRAP' },
    { code: 'BTNHOLE',          desc: 'BUTTONHOLE MACHINE' },
    { code: 'EYELET BTNHOLE',   desc: 'EYELET BUTTON HOLE' },
    { code: 'BTNSEW CHAINST',   desc: 'BUTTON SEW-ON CHAIN STITCH' },
    { code: 'BTNSEW LOCKST',    desc: 'BUTTON SEW-ON LOCK STITCH' },
    { code: 'COVERSEAM',        desc: 'COVERSEAM MACHINE' },
    { code: 'BNDR',             desc: 'COVERSEAM BINDER' },
    { code: 'CYLBED',           desc: 'CYLINDERBED COVERSEAM' },
    { code: 'CYLBED with Tr',   desc: 'CYLINDERBED SPREADER & TRIMMER' },
    { code: 'ELST',             desc: 'ELASTICATOR' },
    { code: 'FLATBD',           desc: 'FLATBED COVERSEAM' },
    { code: 'C/S spr/Tr',       desc: 'SPREADER & TRIMMER' },
    { code: 'DBL NDL',          desc: 'DOUBLE NEEDLE MACHINE' },
    { code: 'D/N CHAINST',      desc: 'DOUBLE NEEDLE CHAIN STITCH' },
    { code: 'D/N LOCKST',       desc: 'DOUBLE NEEDLE LOCK STITCH' },
    { code: 'EMB',              desc: 'EMBROIDERY MACHINE' },
    { code: 'FDARM',            desc: 'FEED OF THE ARM' },
    { code: 'JETPKT',           desc: 'JETPOCKET MACHINE' },
    { code: 'MULTINDL',         desc: 'MULTI NEEDLE MACHINE' },
    { code: 'NFLCK',            desc: 'NEEDLE FEED LOCKSTITCH' },
    { code: '3 THRD O/L',       desc: '3 THREAD OVERLOCK MACHINE' },
    { code: '4 THRD O/L',       desc: '4 THREAD OVERLOCK' },
    { code: '5 THRD /SFTY O/L', desc: '5 THREAD SAFETY OVERLOCK MACHINE' },
    { code: '5 THRD O/L T/B F', desc: '5THRD O/L WITH TOP AND BOTTOM FEED' },
    { code: '6THRD/MK/SFT O/L', desc: '6 THREAD MOCK SAFETY OVERLOCK MACHINE' },
    { code: 'S/N CHAINST',      desc: 'SINGLE NEEDLE CHAIN STITCH' },
    { code: 'S/N LOCKST EDGET', desc: 'SINGLE NEEDLE LOCK STITCH + EDGE TRIMMER' },
    { code: 'PLN S/N',          desc: 'PLAIN SINGLE NEEDLE LOCKSTITCH' },
    { code: 'ROUCH',            desc: 'ROUCHING MACHINE' },
    { code: 'STD',              desc: 'STUD MACHINE' },
    { code: 'ZIGZAG ST',        desc: 'ZIG ZAG STITCH MACHINE' },
  ],

  // ── BARCODE VALIDATION ────────────────────────────────────────
  // Rules applied when scanning or manually entering asset numbers.
  // Adjust if your barcode format changes.
  barcode: {
    // Pure numeric barcodes — minimum digit count
    numericMinLength    : 5,
    // Alphanumeric barcodes — min and max character count
    alphaNumericMinLength : 6,
    alphaNumericMaxLength : 7,
  },

};

// ── HELPERS ───────────────────────────────────────────────────────────────────
// Convenience functions built from config — used by all tools.

/**
 * Validate a scanned or typed barcode against CONFIG rules.
 * @param {string} val - cleaned (uppercase, no spaces) barcode string
 * @returns {boolean}
 */
CONFIG.isValidBarcode = function(val) {
  if (!val) return false;
  if (/^\d+$/.test(val)) return val.length >= CONFIG.barcode.numericMinLength;
  return val.length >= CONFIG.barcode.alphaNumericMinLength &&
         val.length <= CONFIG.barcode.alphaNumericMaxLength;
};

/**
 * Normalise a raw barcode/input string.
 * Strips whitespace, converts to uppercase.
 * @param {string} val
 * @returns {string}
 */
CONFIG.cleanBarcode = function(val) {
  return (val || '').replace(/\s+/g, '').toUpperCase();
};

/**
 * Build a flat array of all location options (lines + pools).
 * @returns {string[]}
 */
CONFIG.allLocations = function() {
  return [...CONFIG.lines, ...CONFIG.pools];
};

/**
 * Populate a <select> element from an array of string values.
 * Preserves the first placeholder <option> if present.
 * @param {string} selectId  - element id
 * @param {string[]} items   - array of option labels
 */
CONFIG.populateSelect = function(selectId, items) {
  const el = document.getElementById(selectId);
  if (!el) return;
  const placeholder = el.querySelector('option[value=""]');
  el.innerHTML = '';
  if (placeholder) el.appendChild(placeholder);
  items.forEach(item => {
    const opt = document.createElement('option');
    opt.value = item;
    opt.textContent = item;
    el.appendChild(opt);
  });
};

/**
 * Populate multiple <select> elements with the same item list.
 * @param {string[]} selectIds
 * @param {string[]} items
 */
CONFIG.populateSelects = function(selectIds, items) {
  selectIds.forEach(id => CONFIG.populateSelect(id, items));
};

/**
 * Get shift start/end as total minutes from midnight for a given Date.
 * Returns null on weekends or non-work days.
 * @param {Date} date
 * @returns {{ start: number, end: number } | null}
 */
CONFIG.getShiftMinutes = function(date) {
  const day = date.getDay();
  if (!CONFIG.shift.workDays.includes(day)) return null;
  const start = CONFIG.shift.startHour * 60 + CONFIG.shift.startMinute;
  const end   = day === 5
    ? CONFIG.shift.fridayEndHour * 60 + CONFIG.shift.fridayEndMinute
    : CONFIG.shift.endHour * 60 + CONFIG.shift.endMinute;
  return { start, end };
};
