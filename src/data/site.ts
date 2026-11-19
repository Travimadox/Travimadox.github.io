export const site = {
  name: 'Travimadox Webb',
  email: 'travimadox.webb@gmail.com',
  linkedin: 'https://linkedin.com/in/travimadoxwebb',
  github: 'https://github.com/Travimadox',
  openToOpportunities: true,
  // The CV page, built from src/data/cv.md. Its PDF is made by scripts/cv-pdf.mjs.
  cv: '/cv/',
};

// SANA-map, SATNAC 2026.
export const paper = {
  title: 'From Words to Rows: Prompt-Conditioned Real-Time Semantic Mapping for Agricultural Robots',
  authors: 'T. Webb, P. Amayo, T. Nemaangani',
  venue: 'Southern Africa Telecommunication Networks and Applications Conference (SATNAC), 2026',
  page: 'https://travimadox.github.io/sana-map-page/',
  pdf: 'https://travimadox.github.io/sana-map-page/static/pdf/paper.pdf',
  code: 'https://github.com/Travimadox/SANA-map',
};

// The toolkit, one capability per line, with the specifics beside it.
export const capabilities = [
  ['ROS 2 and SLAM', 'ROS 2 Jazzy, LiDAR-inertial odometry (RKO-LIO, FAST-LIO2, KISS-ICP), occupancy and BEV mapping'],
  ['Open-vocabulary vision', 'PyTorch, YOLOE, YOLO-World, OWLv2, Grounding DINO, semantic segmentation, ATE/RPE and mAP evaluation'],
  ['Learned navigation', 'Imitation learning, behavioural cloning and DAgger'],
  ['Sensor integration', 'Stereo and ZED cameras, 3D LiDAR, IMU, RTK GPS'],
  ['Embedded C on STM32', 'STM32F051, I²C, SPI and UART, ADCs and DACs, acceptance testing'],
  ['Jetson, FPGA and PCB', 'Jetson Orin NX, a RISC processor in Verilog HDL, PCB and schematic design'],
  ['Python, C++, MATLAB', 'Also C, SQL, Assembly and Java. Linux, Git, LaTeX, OpenSCAD, Jupyter'],
] as const;

export const experience = [
  { date: 'Jul 2026 – present', role: 'Teaching Assistant & Assistant Lecturer', org: 'University of Cape Town', course: 'Embedded Systems II · EEE3096S', text: 'I lecture Embedded Communications and Sampling, ADCs & DACs, and lead the tutor team. I redesigned the practical programme around 25 practicals and 7 integrative projects, with randomised parameters and predict-before-measure labs. Assessments connect design decisions to real component datasheets.' },
  { date: 'Jan 2026 – present', role: 'Project Supervisor', org: 'University of Cape Town', course: 'Undergraduate & Honours projects', text: 'I co-supervise a third-year handheld agricultural 3D scanner project and supervise an Honours digital twin of the UCT AC Microgrid Test System, covering state estimation and power quality.' },
  { date: 'Jan–Jun 2026', role: 'Teaching Assistant', org: 'University of Cape Town', course: 'High Performance Embedded Systems · EEE4120F', text: 'I built the assessment suite, including oral-exam tools, Gradescope rubrics, marking sheets and demo schedules, and authored practical packs on a RISC processor in Verilog HDL.' },
  { date: 'Jul–Nov 2025', role: 'Teaching Assistant', org: 'University of Cape Town', course: 'Embedded Systems · EEE3095S / EEE3096S', text: 'I managed the tutor team, ran practicals and tutorials on C/C++ for microcontrollers, and handled course administration.' },
  { date: 'Feb–Nov 2024', role: 'EEE Department Tutor', org: 'University of Cape Town', course: 'EEE3088F · EEE3090F · EEE3097S', text: 'I graded approximately 20 assignments a week at peak and used common misconceptions to shape teaching. I mentored groups of 5–7 students in labs.' },
  { date: 'Nov 2022 – Feb 2023', role: 'Engineering Intern, Development & Production', org: 'Shrike Marine', course: 'Hardware testing & electronics', text: 'I ran acceptance testing on 150 HUMS data loggers for military vehicles, calibrated, assembled and tested 4 UAV power distribution units, improved the PDU GUI, and designed an automatic mains-to-inverter changeover system.' },
  { date: 'Jan–Aug 2019', role: 'Relationship Officer', org: 'Equity Bank Kenya', course: 'Client-facing banking', text: 'I handled corporate cash transactions, Western Union and MoneyGram transfers, and negotiated foreign-exchange rates.' },
];
