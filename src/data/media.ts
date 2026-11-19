import type { ImageMetadata } from 'astro';
import hornbill from '../assets/found/ground-hornbill.jpg';
import cocoa from '../assets/found/cocoa-pods.jpg';
import portraitPhoto from '../assets/portrait.jpg';
import robotsPhoto from '../assets/robots.jpg';
import uctPhoto from '../assets/uct-upper-campus.jpg';
import huskyRow from '../assets/sana/husky-orchard-row.jpg';
import tunnelInside from '../assets/sana/berry-tunnel-inside.jpg';
import tunnelOutside from '../assets/sana/berry-tunnel-outside.jpg';
import berryRows from '../assets/sana/berry-rows-net.jpg';
import huskyBlueberry from '../assets/sana/husky-blueberry-tunnel.jpg';
import lodoxGui from '../assets/projects/lodox-denoising-gui.jpg';
import origamiFit from '../assets/projects/origami-most-fit.png';
import audioCard from '../assets/projects/audio-compression-card.png';
import scannerFront from '../assets/scanner/scanner-front.jpg';
import sensorHat from '../assets/projects/sensor-hat-board.jpg';
import acoSetup from '../assets/projects/acotriangulator-setup.jpg';
import scannerSide from '../assets/scanner/scanner-side.jpg';
import scannerDesk from '../assets/scanner/scanner-desk.jpg';

// Import approved photos / map exports from src/assets, then replace undefined.
// Example: import husky from '../assets/husky.jpg';
// robot: { src: husky, alt: 'The Husky A300 in ...', label: 'Recorded field trial · [confirmed date]' }
type Media = { src: ImageMetadata; alt: string; label: string };
export const media: Record<'robot' | 'field' | 'map', Media | undefined> = {
  robot: undefined,
  field: undefined,
  map: undefined,
};

export const portrait = { src: portraitPhoto, alt: 'Travimadox Webb, smiling, in glasses and a white T-shirt with his arms folded, against a plain wall' };

export const uct = { src: uctPhoto, alt: 'Upper campus of the University of Cape Town: Jameson Hall and its stone buildings above a sports field, with Devil’s Peak behind under a clear blue sky', caption: 'Upper campus, University of Cape Town, below Devil’s Peak. Photo: University of Cape Town.', natural: true };

export const robots = { src: robotsPhoto, alt: 'A yellow Clearpath Husky A300 carrying GPS antennas and a LiDAR, a Unitree G1 humanoid wearing a tie, and a Unitree Go1 quadruped on a paved walkway beside the Chemical Engineering Building', caption: 'Three of the platforms I work with: a Clearpath Husky A300, a Unitree G1 humanoid and a Unitree Go1 quadruped.' };

// SANA field photographs (the project's own).
type Photo = { src: ImageMetadata; alt: string; caption: string; natural?: boolean; focus?: string };
export const field = {
  husky: { src: huskyRow, alt: 'The Clearpath Husky A300, carrying GPS antennas and a LiDAR, parked in a sandy row between two lines of young orchard trees', caption: 'SANA’s Clearpath Husky A300 in an orchard row.' },
  tunnelInside: { src: tunnelInside, alt: 'Inside a long shade-net tunnel: two rows of potted berry bushes either side of a straight ground-cover path', caption: 'Inside a berry tunnel: straight rows either side of a narrow lane.' },
  tunnelOutside: { src: tunnelOutside, alt: 'The open end of a shade-net tunnel over rows of potted berry bushes, seen from bare ground outside', caption: 'A berry tunnel on a commercial farm, the kind of field SANA maps.' },
  huskyBlueberry: { src: huskyBlueberry, alt: 'The Clearpath Husky A300, with GPS antennas and a LiDAR, driving down a lane between rows of potted blueberry bushes inside a plastic tunnel', caption: 'The Husky A300 in a blueberry tunnel.' },
  berryRows: { src: berryRows, alt: 'Rows of potted berry bushes under shade netting, with a furled black net hanging from a post', caption: 'Potted berry rows under shade netting.' },
} satisfies Record<string, Photo>;

// Project images (the projects' own). `natural` shows them uncropped.
export const projectImages = {
  lodox: { src: lodoxGui, alt: 'The Image Denoising GUI welcome screen: the LODOX logo over a full-body X-ray, a note on Noise2Void and Noise2Noise, and a Start button', caption: 'The start screen of the project’s image-denoising GUI.', natural: true },
  audio: { src: audioCard, alt: 'Project title card: headphones around a glowing map of Africa, Amapiano keyboards on the left and Bongo Flava guitar and microphone on the right, with sound waves passing through an MP3 block marked 64, 128 and 256 kbps', caption: 'The project’s title card: two genres, one codec, three bitrates.', natural: true },
  scanner: { src: scannerFront, alt: 'The handheld scanner standing on a filing cabinet by a window: a tall black printed body and grip, with the cameras on an orange mount at the top', caption: 'The handheld scanner: a printed body and grip, with the cameras on the orange mount.', focus: '50% 22%' },
  sensorHat: { src: sensorHat, alt: 'The assembled green sensor HAT, marked Prototype V0.0: power module and status LEDs on the left, the STM32 in the centre between two header rows, a USB-to-UART board, light sensor, LDR and EEPROM on the right', caption: 'The assembled prototype, V0.0: power on the left, the STM32 in the middle, sensing and the EEPROM on the right.', natural: true },
  acotriangulator: { src: acoSetup, alt: 'Top view of the EEE3097S TDoA project grid: a microphone taped at each corner, wired to breadboards and two Raspberry Pi Zeros on either side, with a blue Bluetooth speaker in the middle as the sound source', caption: 'The hardware set-up on the A1 grid: a microphone at each corner, two Raspberry Pi Zeros, and a speaker as the sound source.', natural: true },
  origami: { src: origamiFit, alt: 'Five simulation renders of evolved modular robots, each a chain of white segments joined to a red block: two crawling chains, an upright column, an arch and a closed loop', caption: 'The fittest evolved robots: very different bodies from the same modules.', natural: true },
} satisfies Record<string, Photo>;

// Further pictures shown beside a project's write-up, by slug.
export const projectGallery: Partial<Record<string, Photo[]>> = {
  'agricultural-scanner': [
    { src: scannerSide, alt: 'The scanner seen from the side on a filing cabinet, showing the grip, the orange camera mount and the cable running down the body', caption: 'From the side: the grip, the camera mount and the cable run.' },
    { src: scannerDesk, alt: 'The scanner standing on a desk next to a keyboard and mouse', caption: 'On a desk in the lab.' },
  ],
};

// Openly licensed pictures of the world around the work (not project media). Each is credited in the footer.
type Found = { src: ImageMetadata; alt: string; caption: string; credit: string; page: string };
export const found = {
  hornbill: { src: hornbill, alt: 'A Southern Ground-Hornbill with its red throat pouch walking across short grass', caption: 'A Southern Ground-Hornbill in Kruger National Park.', credit: '“Southern Ground-Hornbill (Bucorvus leadbeateri)” by Bernard Dupont, CC BY-SA 2.0', page: 'https://commons.wikimedia.org/wiki/File:Day_12_Southern_Ground-Hornbill_(Bucorvus_leadbeateri)_(53229603582).jpg' },
  cocoa: { src: cocoa, alt: 'Green cocoa pods hanging from a branch among large leaves', caption: 'Cocoa pods on the tree, São Tomé.', credit: '“Sao Tome Ponta Figo Hike Cocoa Pods 5” by Chuck Moravec, CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Sao_Tome_Ponta_Figo_Hike_Cocoa_Pods_5_(16062933689).jpg' },
} satisfies Record<string, Found>;

// Openly licensed footage, served from public/media (audio stripped).
export const footage = {
  wheat: { src: '/media/wheat-field.webm', poster: '/media/wheat-field-poster.jpg', caption: 'Wind across a young crop, with wheel tracks running through it.', credit: '“ASMR field of wheat – nature” by Coup 53, CC BY 3.0', page: 'https://commons.wikimedia.org/wiki/File:ASMR_field_of_wheat_-_nature.webm' },
};

// The picture shown beside a project's write-up, by slug.
export const projectPicture: Partial<Record<string, Photo>> = {
  sana: field.husky,
  'agricultural-scanner': projectImages.scanner,
  'hornbill-monitoring': found.hornbill,
  'cocoa-detection': found.cocoa,
  'lodox-denoising': projectImages.lodox,
  'origami-robotics': projectImages.origami,
  'african-music-compression': projectImages.audio,
  'stm32-sense-hat': projectImages.sensorHat,
  acotriangulator: projectImages.acotriangulator,
};
