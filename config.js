// ── ADD THIS TO YOUR EXISTING config.js ────────────────────────────────
// Shared machine type list — used by:
//   - PMT Downtime Tracker (downtime.html) — confirming Unknown types before investigate
//   - PMT Asset Tracker (scan.html) — confirming Unknown types before Step 2
//   - PMT Asset Register — the "Type" search field when adding/editing assets
//
// Single source of truth: if you add/rename/remove a machine type, update it
// here only — all three apps read from this same array.

const MACHINE_TYPES = [
  { code: 'BLNDST',          desc: 'BLIND STITCH MACHINE' },
  { code: 'BLT LOOP',        desc: 'BELT LOOP'},
  { code: 'BRTCK',           desc: 'BARTACKING MACHINE' },
  { code: 'BTN W/P',         desc: 'BUTTON WRAP' },
  { code: 'BTNHOLE',         desc: 'BUTTONHOLE MACHINE' },
  { code: 'EYELET BTNHOLE',  desc: 'EYELET BUTTON HOLE' },
  { code: 'BTNSEW CHAINST',  desc: 'BUTTON SEW-ON CHAIN STITCH' },
  { code: 'BTNSEW LOCKST',   desc: 'BUTTON SEW-ON LOCK STITCH' },
  { code: 'COVERSEAM',       desc: 'COVERSEAM MACHINE' },
  { code: 'BNDR',            desc: 'COVERSEAM BINDER' },
  { code: 'CYLBED',          desc: 'CYLINDERBED COVERSEAM' },
  { code: 'CYLBED with Tr',  desc: 'CYLINDERBED SPREADER & TRIMMER' },
  { code: 'ELST',            desc: 'ELASTICATOR' },
  { code: 'FLATBD',          desc: 'FLATBED COVERSEAM' },
  { code: 'C/S spr/Tr',      desc: 'SPREADER & TRIMMER' },
  { code: 'DBL NDL',         desc: 'DOUBLE NEEDLE MACHINE' },
  { code: 'D/N CHAINST',     desc: 'DOUBLE NEEDLE CHAIN STITCH' },
  { code: 'D/N LOCKST',      desc: 'DOUBLE NEEDLE LOCK STITCH' },
  { code: 'EMB',             desc: 'EMBROIDERY MACHINE' },
  { code: 'FDARM',           desc: 'FEED OF THE ARM' },
  { code: 'JETPKT',          desc: 'JETPOCKET MACHINE' },
  { code: 'MULTINDL',        desc: 'MULTI NEEDLE MACHINE' },
  { code: 'NFLCK',           desc: 'NEEDLE FEED LOCKSTITCH' },
  { code: '3 THRD O/L',      desc: '3 THREAD OVERLOCK MACHINE' },
  { code: '4 THRD O/L',      desc: '4 THREAD OVERLOCK' },
  { code: '5 THRD /SFTY O/L',desc: '5 THREAD SAFETY OVERLOCK MACHINE' },
  { code: '5 THRD O/L T/B F',desc: '5THRD O/L WITH TOP AND BOTTOM FEED' },
  { code: '6THRD/MK/SFT O/L',desc: '6 THREAD MOCK SAFETY OVERLOCK MACHINE' },
  { code: 'S/N CHAINST',     desc: 'SINGLE NEEDLE CHAIN STITCH' },
  { code: 'S/N LOCKST EDGET',desc: 'SINGLE NEEDLE LOCK STITCH + EDGE TRIMMER' },
  { code: 'PLN S/N',         desc: 'PLAIN SINGLE NEEDLE LOCKSTITCH' },
  { code: 'ROUCH',           desc: 'ROUCHING MACHINE' },
  { code: 'STD',             desc: 'STUD MACHINE' },
  { code: 'ZIGZAG ST',       desc: 'ZIG ZAG STITCH MACHINE' },
];
