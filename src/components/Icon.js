const icons = {
  battery: '<rect x="4" y="7" width="15" height="10" rx="2"/><path d="M19 10h2v4h-2M8 10v4m4-4v4"/>',
  bottle: '<path d="M9 3h6m-5 0v4l-3 3v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V10l-3-3V3m-6 8h8"/>',
  can: '<path d="M6 5h12l1 15H5L6 5Zm0 3h12M8 3h8"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"/>',
  leaf: '<path d="M20 4c-8 0-13 3-13 9a5 5 0 0 0 5 5c6 0 8-6 8-14ZM4 21c2-5 5-8 10-11"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  recycle: '<path d="m7 7 2-3h5l2 3m-9 0 2 3m-2-3H4l-2 4 2 3h4m10-10 2 3-2 3m0-6h-3m3 6 2 3-2 4h-4m4-7h-3m-7 3-2 4 2 3h5l2-3m-7 0 2-3"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  x: '<path d="m18 6-12 12M6 6l12 12"/>'
};

export function renderIcon(name, className = '') {
  const paths = icons[name] || icons.recycle;
  return `
    <svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      ${paths}
    </svg>
  `;
}
