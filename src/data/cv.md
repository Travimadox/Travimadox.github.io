## About

Robotics researcher and educator building semantic perception and navigation systems for unstructured agricultural environments. MSc (Eng) candidate in Electrical Engineering (Robotics & Computer Vision) at the University of Cape Town, in the African Robotics Unit (ARU), supervised by Dr. Paul Amayo.

My MSc project, SANA (Semantic Agricultural Navigation Agent), lets a Clearpath Husky A300 follow crop rows without a prior teach run. It combines real-time open-vocabulary semantic mapping with a behavioural-cloning navigation policy, running live on the robot.

Alongside research, I lecture and run labs for UCT's Embedded Systems II course (EEE3096S) and co-supervise undergraduate design and thesis projects. I am Kenyan-born, a Mastercard Foundation Scholar, and I care about robotics that works in African farms and fields.

Next: a PhD on lifelong, self-improving semantic autonomy — robots that keep adapting their maps and navigation policies across seasons and fields.

**Contact**

- Email: <travimadox.webb@gmail.com>
- LinkedIn: [linkedin.com/in/travimadoxwebb](https://www.linkedin.com/in/travimadoxwebb/)
- GitHub: [github.com/travimadox](https://github.com/travimadox)
- Based in Cape Town, South Africa

## Education

**MSc (Eng) Electrical Engineering — Robotics & Computer Vision** · University of Cape Town · Apr 2025 – present

- Thesis: *SANA — Semantic Agricultural Navigation Agent*, African Robotics Unit (ARU)
- Supervisor: Dr. Paul Amayo
- Expected completion: February 2027

**BSc (Eng) Electrical & Computer Engineering — First Class Honours** · University of Cape Town · Mar 2021 – Nov 2024

- GPA: 79.92%
- Dean's Merit List: 2021, 2022, 2023
- Mastercard Foundation Scholar
- Relevant coursework: Embedded Systems, Software Design, Data Structures, Machine Learning, Power Electronics

**Kenya Certificate of Secondary Education (KCSE)** · Lenana School, Nairobi · 2015 – 2018

## Research experience

**SANA: Semantic Agricultural Navigation Agent** · MSc thesis, African Robotics Unit (ARU), UCT · Apr 2025 – present · Supervisor: Dr. Paul Amayo

Teach-free row-crop navigation: a persistent bird's-eye-view (BEV) semantic map written by perception and read by a behavioural-cloning policy. Code: [github.com/Travimadox/SANA](https://github.com/Travimadox/SANA).

- Built a real-time open-vocabulary semantic mapping pipeline (YOLOE) that runs live on a Clearpath Husky A300 under ROS 2 Jazzy, on a ZED Box Jetson Orin NX
- Benchmarked four open-vocabulary detectors (YOLOE, YOLO-World, OWLv2, Grounding DINO); found appearance prompts beat semantic prompts for navigation utility
- Trained a behavioural-cloning row-following policy with DAgger retraining, governed by a finite-state machine for row following, row-end detection and headland turns
- Implemented a BEV safety filter for obstacle avoidance and a 7-dimensional map-feature observation for the policy
- Compared LiDAR-inertial odometry (RKO-LIO, FAST-LIO2, KISS-ICP) using ATE/RPE, and validated ZED positional tracking against RTK ground truth on farm data
- Evaluated against Visual Teach & Repeat (VT&R) with four pre-registered hypotheses
- Earlier phase: adapted Neural SLAM to outdoor agriculture and collected field data with a Unitree Go1 quadruped

Field results for the mapping system (SANA-map, SATNAC 2026): YOLOE at 30.3 fps onboard; full pipeline at 20.9 Hz on a commercial berry farm (Greendale, Klapmuts) and 13.7 Hz indoors; 0.062 m mean absolute error in inter-row spacing against surveyed ground truth; no crop- or farm-specific detector training.

**Unsupervised Denoising of LODOX Statscan X-ray Images** · BSc final-year thesis, UCT · Jul – Nov 2024 · Supervisor: Dr. Yaaseen Martin

- Investigated unsupervised machine-learning methods to denoise full-body trauma X-ray images, aiming to support better trauma care

**Body–Brain Co-Evolution in Modular Origami Robots** · Research project (CSC2005Z), UCT Computer Science · Jul – Nov 2023 · Supervisor: Prof. Geoff Nitschke

- Led a simulation study of how modular robots adapt across terrains, quantifying the effect of surface friction on adaptability
- Awarded 84% (distinction)

## Publications, competitions & talks

**Papers**

- **T. Webb, P. Amayo, T. Nemaangani.** From Words to Rows: Prompt-Conditioned Real-Time Semantic Mapping for Agricultural Robots. *Southern Africa Telecommunication Networks and Applications Conference (SATNAC)*, 2026. Full paper. [Project page](https://travimadox.github.io/sana-map-page/) · [PDF](https://travimadox.github.io/sana-map-page/static/pdf/paper.pdf) · [Code](https://github.com/Travimadox/SANA-map)
- **Under review:** SANA navigation-system paper, IEEE ICRA 2027 (double-anonymous review; title withheld until decision)

**Competitions**

- 5th place (solo), IndabaX South Africa Cocoa Contamination Detection Hackathon, Zindi — mAP@50 ≈ 0.743, trained on a 4 GB laptop GPU

**Talks & outreach**

- Info session for prospective Mastercard Foundation Scholars at UCT — how to apply, from a scholar's perspective (2026)
- Paper presentation, SATNAC 2026 — "From Words to Rows: Prompt-Conditioned Real-Time Semantic Mapping for Agricultural Robots"

## Teaching & lecturing

**Assistant Lecturer & Teaching Assistant — EEE3096S Embedded Systems II** · UCT Dept. of Electrical Engineering · Jul 2026 – present · Convenor: Assoc. Prof. S. Winberg

- Lecture two NQF Level 7 modules: Embedded Communications, and Sampling, ADCs & DACs (4 lectures each)
- Redesigned the course's practical programme: 25 practicals, 7 integrative projects, and a shared integrity toolkit (per-student randomised parameters, AI-use logs, predict-before-measure lab cycles)
- Built an STM32F051 ADC/DAC/DMA practical that runs on both board revisions in student hands
- Wrote the 2026 main and supplementary exam memos; built a reference solution for the EEE3095S "Serial Game Server" project (STM32 server + PC GUI)

**Teaching Assistant — EEE4120F High Performance Embedded Systems** · UCT · 2026

- Built the course's assessment suite: oral-exam tools, Gradescope rubrics, marking sheets and demo schedules
- Produced practical packs for a RISC processor design in Verilog HDL

**Teaching Assistant — EEE3095S/EEE3096S Embedded Systems** · UCT · Jul – Nov 2025

- Led the tutor team; ran all practicals and tutorials; handled course administration, scheduling and assessment logistics

**Departmental Tutor — EEE3088F, EEE3090F, EEE3096S, EEE3097S** · UCT · Feb – Nov 2024

- Graded ~20 assignments a week at peak, feeding common misconceptions back into tutorial content
- Mentored lab groups of 5–7 students weekly

## Student supervision

- **Co-supervisor, 3rd-year design project (2026):** handheld 3D reconstruction scanner for agricultural environments (LiDAR + stereo cameras + IMU)

## Industry experience

**Engineering Intern — Development & Production** · Shrike Marine, Cape Town · Nov 2022 – Feb 2023

- Ran acceptance test procedures on 150 HUMS data loggers for military vehicles (resistance, input and data-transmission tests)
- Calibrated, assembled and tested four power distribution units for military-grade UAVs; rewrote the PDU test GUI program
- Designed an automated mains-to-inverter changeover system for power outages, from component selection to schematics

**Relationship Officer** · Equity Bank, Kenya · Jan – Aug 2019

- Handled large corporate cash transactions, foreign-exchange rate negotiation, and Western Union / MoneyGram transfers

## Selected projects

| Project | What it is | Stack | Year |
| --- | --- | --- | --- |
| SANA | Teach-free crop-row navigation on a Husky A300 using a live BEV semantic map and a behavioural-cloning policy | Python, ROS 2 Jazzy, PyTorch, YOLOE, Jetson Orin, ZED, LiDAR | 2025–26 |
| Handheld agricultural semantic scanner | Handheld 3D scanner for outdoor unstructured environments: three global-shutter cameras, LiDAR and IMU, with a ROS 2 capture package and OpenSCAD enclosure | ROS 2, Python, ZED X One GS, Ouster/Hesai LiDAR, OpenSCAD | 2026 |
| Multi-sensor perception rig | Three-camera 360° layout (0°/±120°, −12° pitch) plus LiDAR for robot perception | ZED X One GS, Robosense LiDAR | 2026 |
| LiDAR-inertial odometry benchmark | Batch comparison and failure analysis of RKO-LIO, FAST-LIO2 and KISS-ICP on field data | evo, Python, ROS 2 bags | 2026 |
| Cocoa contamination detection | 5th-place solo entry in the IndabaX SA Zindi hackathon, trained on a 4 GB GPU | Python, object detection | 2026 |
| LODOX X-ray denoising | Unsupervised denoising of full-body trauma X-rays | Python, ML | 2024 |
| Origami robot body–brain evolution | Evolutionary simulation of modular robots across terrains (84%) | Python, physics simulation | 2023 |
| PDU test GUI | Rewrote the test software for UAV power distribution units at Shrike Marine | GUI programming | 2022–23 |
| Solar power banks & radios | Built 20 solar power banks and Bluetooth radios for students in low-income areas (Engineers Without Borders) | Electronics, PV | 2022–24 |
| Teaching automation | Python tools that automate TA admin: marking, scheduling, oral-exam tooling | Python | 2025–26 |

## Honours & awards

| Year | Award |
| --- | --- |
| 2026 | 5th place, IndabaX South Africa Cocoa Contamination Hackathon (Zindi) |
| 2025– | National Research Foundation (NRF) postgraduate research support |
| 2024 | BSc (Eng) awarded with First Class Honours |
| 2021–2023 | Dean's Merit List, Faculty of Engineering & the Built Environment, UCT (three consecutive years) |
| 2021– | Mastercard Foundation Scholar, UCT (undergraduate and postgraduate) |

## Leadership & service

**Volunteer Tutor & Project Lead — Playing With Solar** · Engineers Without Borders, Cape Town · Feb 2022 – Nov 2024

- Ran outreach reaching 50+ learners from low-income areas on renewable energy and basic electronics
- Led the build of 20 solar power banks and Bluetooth radios for learners

**Treasurer — Mastercard Foundation Scholars Student Council** · UCT · Apr 2022 – Sep 2023

- Managed finances for the council's outreach programmes
- Liaised between scholars and Foundation staff on financial queries and disputes
- Negotiated a 2023 stipend increase in line with inflation

## Technical skills

| Area | Daily use | Working knowledge | Exposure |
| --- | --- | --- | --- |
| Languages | Python, C (embedded) | C++, MATLAB, Verilog | Java, Julia, Rust, Mojo, Octave |
| Robotics | ROS 2 (Jazzy), sensor fusion, BEV mapping, LiDAR-inertial odometry | Imitation learning (BC, DAgger), SLAM | Offline RL, Isaac Gym, MuJoCo |
| Perception & ML | PyTorch, OpenCV, open-vocabulary detection (YOLOE, YOLO-World, OWLv2, Grounding DINO) | scikit-learn, NumPy | Vision transformers for 3D reconstruction (DUSt3R/VGGT family) |
| Robot hardware | Clearpath Husky A300, ZED stereo/ZED X One cameras, Jetson Orin | Ouster, Hesai, Hokuyo and Robosense LiDARs | Unitree Go1, Unitree G1 |
| Embedded & electronics | STM32 (F0), ADCs/DACs/DMA | KiCad, Altium Designer, FPGA (Xilinx Vivado) | Simulink |
| Tools | Git/GitHub, Linux (Ubuntu), LaTeX/Overleaf | Docker, Anaconda, OpenSCAD | Gradescope |

## Memberships, interests & references

**Memberships:** IEEE (Student Member)

**Interests:** football and football analytics (including recruitment analysis for Kenyan leagues), reading fiction, cooking and baking

**References:** available on request.
