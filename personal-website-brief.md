# Personal Website Brief: Travimadox Webb

> **For the agent building this site:** everything you need is below. Build a fast, modern, single-owner personal website (portfolio + academic homepage) from this content. Don't invent facts, numbers, dates or links. Where something is marked **[TO CONFIRM]** or **[ASSET NEEDED]**, leave a clearly visible placeholder and list it in your final hand-off notes.

---

## 1. Goals and audience

**Primary goal:** land an industry role (embedded, ML/computer vision or robotics engineer) and show research credibility for a future PhD.

**Audiences, in priority order:**
1. **Recruiters and hiring managers** at robotics, embedded, ML and CV companies (South Africa, remote, and hybrid in Germany, Netherlands, Ireland, Spain and the UK). They need to see in under 30 seconds who he is, what he builds, and how to contact him.
2. **Academics and PhD supervisors.** They need research focus, thesis, publications and supervisor.
3. **Students and colleagues at UCT.** They need teaching roles and course work.

**Tone:** confident, technical, concise. First person ("I build…"). No buzzword soup. Let the robot, the hardware and the numbers do the talking.

---

## 2. Identity

| Field | Value |
|---|---|
| Name | **Travimadox Webb** |
| Headline | Robotics & Embedded Systems Engineer · MSc (Eng) Robotics & Computer Vision, University of Cape Town |
| Alternative tagline options | "I build robots that understand the fields they drive in." / "Semantic perception and autonomous navigation for African agriculture." |
| Location | Cape Town, South Africa (Kenyan citizen) |
| Email | jakadala.kevin@gmail.com |
| LinkedIn | https://linkedin.com/in/travimadoxwebb |
| GitHub | https://github.com/Travimadox |
| Old site (to be replaced) | https://travimadoxwebb.wixsite.com/travimadox |
| Phone | Do **not** publish. Use a contact form or email link instead. |
| CV | Downloadable PDF. **[ASSET NEEDED: latest CV PDF]** |
| Status badge | "Open to opportunities: embedded, ML/CV and robotics roles" (make it easy to toggle off) |

---

## 3. About (use as the About page / hero sub-text)

**Short (hero, 1–2 lines):**
MSc (Eng) candidate in Robotics & Computer Vision at the University of Cape Town and Mastercard Foundation Scholar. I build semantic perception and autonomous navigation systems for African agricultural environments, and deploy them in real time on field robots.

**Long (About page):**
I'm an electrical and computer engineer who works where hardware, embedded software and machine learning meet. I hold a First Class Honours BSc (Eng) in Electrical & Computer Engineering from the University of Cape Town. I'm now completing an MSc (Eng) in Robotics & Computer Vision under Dr. Paul Amayo as a Mastercard Foundation Scholar.

My thesis, **SANA (Semantic Agricultural Navigation Agent)**, is an autonomous row-crop navigation system. It combines open-vocabulary semantic mapping with a learned navigation policy and runs live on a Clearpath Husky A300 robot.

Alongside research I lecture and TA embedded systems at UCT. I've redesigned practical programmes, built assessment tooling and supervised undergraduate and Honours projects. Before that I did hardware testing and electronics at Shrike Marine and worked in client-facing banking at Equity Bank Kenya.

I care about robots that work outside the lab, on real farms, with real sensors and real constraints.

**Robotics platforms worked with:** Clearpath Husky A300, Clearpath Husky A200, Catarob surface vessel, Unitree Go1 quadruped, Unitree G1 humanoid.

---

## 4. Skills (display as grouped chips or a compact grid, not progress bars)

- **Languages:** Python (4–6 yrs), C / Embedded C (2–4 yrs), C++ (2–4 yrs), MATLAB, SQL, Assembly, Verilog HDL, Java
- **Robotics:** ROS 2 (Jazzy), SLAM and LiDAR-inertial odometry (RKO-LIO, FAST-LIO2, KISS-ICP), occupancy/BEV mapping, behavioural cloning and DAgger, sensor integration (stereo/ZED cameras, 3D LiDAR, IMU, RTK GPS)
- **ML / Computer Vision:** PyTorch, open-vocabulary detection (YOLOE, YOLO-World, OWLv2, Grounding DINO), semantic segmentation, imitation learning, evaluation (ATE/RPE, mAP)
- **Embedded & Hardware:** STM32 (STM32F051), NVIDIA Jetson Orin NX, FPGA / Verilog (RISC processor), serial protocols (I²C, SPI, UART), ADCs/DACs, PCB and schematic design, acceptance testing
- **Tools:** Linux, Git, LaTeX, OpenSCAD, Zotero, Gradescope, Google Colab / Jupyter
- **Soft skills:** teaching and mentoring, leading tutor teams, technical writing

---

## 5. Projects (the core of the site)

Build these as project cards on a Projects page, each with its own detail page (or an expandable section). **SANA must be the featured hero project** with the richest page.

### 5.1 ⭐ SANA: Semantic Agricultural Navigation Agent (MSc Thesis) · Apr 2025 – present
**One-liner:** Teach-free autonomous row-crop navigation. The robot builds a semantic bird's-eye-view map of the field and a learned policy drives it down the rows.

**Problem:** Agricultural robots in heterogeneous African farms need to navigate crop rows reliably without hand-tuned pipelines or pre-recorded routes.

**What I built:**
- A three-part architecture: **Perception** writes a **Persistent BEV Semantic Map** (the central interface), which **Navigation** reads.
- Open-vocabulary semantic mapping. I benchmarked YOLOE, YOLO-World, OWLv2 and Grounding DINO and picked YOLOE as the primary detector. Key finding: appearance/"container" prompts (e.g. "vase") beat semantic prompts for navigation utility.
- A BEV map as an egocentric K×V×V tensor with max-pooling aggregation at 5 cm cells.
- A Behavioural Cloning navigation policy with DAgger retraining. It reads a compact 7-D feature vector from the map (row offset, heading error, row densities, obstacle clearance, yaw).
- A finite-state `RowNavPolicy` for row-following, row-end detection and headland turns, plus a `SafetyFilter` that overrides the policy near obstacles.
- On-robot integration on a Clearpath Husky A300 running ROS 2 Jazzy, with a Jetson Orin NX (ZED Box), stereo cameras, 3D LiDAR and IMU.
- A LiDAR-inertial odometry comparison (RKO-LIO vs FAST-LIO2 vs KISS-ICP) with ATE/RPE evaluation, and camera positional-tracking validation against RTK ground truth.

**Impact:** The full semantic mapping pipeline runs **in real time on the robot**, a core project requirement. It was evaluated on an indoor testbed, with outdoor field transfer in progress.

**Stack:** Python, ROS 2 Jazzy, PyTorch, YOLOE, Jetson Orin NX, LiDAR, Linux
**Links:** GitHub: https://github.com/Travimadox/SANA **[TO CONFIRM: is the repo public?]**
**Assets:** **[ASSET NEEDED]** Husky photo/video in the field, system architecture figure, BEV map render, demo video of row navigation.

> ⚠️ A paper on this work is being prepared or submitted for a double-anonymous venue. **Do not** add a "Publications" entry, paper title or venue for it until he confirms. Use a generic line like "Publications in preparation."

### 5.2 Handheld Multi-Sensor Agricultural Scanner
Designed a handheld scanner combining ZED X One GS cameras, a LiDAR and an IMU, with a ROS 2 Python package (`ag_scanner`) and an OpenSCAD enclosure, for collecting agricultural 3D data. It is also the basis of a third-year design project he co-supervises (3D reconstruction scanner for agricultural environments).
**Stack:** ROS 2, Python, OpenSCAD, stereo cameras, LiDAR

### 5.3 Development of a Denoising Model for LODOX Statscan Images
Researched the feasibility of unsupervised machine-learning techniques for denoising LODOX Statscan (full-body X-ray) images, to improve image quality in support of trauma care.
**Stack:** Python, Google Colab, Jupyter, ML

### 5.4 Audio Compression Effects on African Music: Amapiano & Bongo Flava
Investigated how extra MP3 compression degrades pre-compressed Amapiano and Bongo Flava tracks, using SNR, PSNR, SSIM and PEAQ, to inform audio quality and streaming-platform optimisation.
**Stack:** Python, MATLAB, signal processing

### 5.5 Origami Robotics: Body-Brain Evolution
Led research on how well modular origami robots adapt across diverse terrain, quantifying the effect of friction on performance (84% on the research report).
**Stack:** Python, MuJoCo, Isaac Gym, Linux

### 5.6 Smart Weight & Nest-Climate Monitoring System for Southern Ground-Hornbill Research
Built a smart weighing scale that monitors Southern Ground-Hornbills and logs weather conditions around their nests, for UCT ornithology researchers supporting conservation.
**Stack:** C/C++, Embedded C, Python, SQL

### 5.7 Smart Mains-to-Inverter Changeover System (Shrike Marine)
Designed and implemented an automatic mains-to-inverter changeover system for power-outage management, covering component selection, schematics and implementation.
**Stack:** Embedded C, electronics, schematic design

### 5.8 Cocoa Contamination Detection: IndabaX South Africa Hackathon (Zindi)
Competed solo and finished **5th** with ~**0.743 mAP@50**, training on constrained local hardware (RTX 2050, 4 GB VRAM).
**Stack:** Python, PyTorch, object detection

### 5.9 STM32 Serial Game Server (teaching reference solution)
A reference solution for the EEE3095S 2026 course project: an STM32F051 serial game server with a PC GUI (baseline Tic-Tac-Toe) to show students the expected design.
**Stack:** Embedded C, STM32, UART, Python GUI

---

## 6. Experience (timeline, newest first)

| Dates | Role | Organisation | Highlights |
|---|---|---|---|
| Jul 2026 – present | Teaching Assistant & Assistant Lecturer, Embedded Systems II (EEE3096S) | University of Cape Town | Lecture the Embedded Communications and Sampling/ADCs & DACs modules. Redesigned the practical programme (25 practicals, 7 integrative projects, randomised per-student parameters, predict-before-measure labs). Designed datasheet-anchored assessments (ADS1115 vs LTC2378-16; MCP4725 vs AD5684R). Lead the tutor team. |
| Jan 2026 – present | Project Supervisor, Undergraduate & Honours Projects | University of Cape Town | Co-supervise a 3rd-year handheld 3D-reconstruction scanner project. Supervise an Honours thesis on a digital twin of the UCT AC Microgrid Test System (state estimation, power quality). |
| Jan 2026 – Jun 2026 | Teaching Assistant, High Performance Embedded Systems (EEE4120F) | University of Cape Town | Built the assessment suite (oral-exam tools, Gradescope rubrics, marking sheets, demo schedules). Authored practical packs on a RISC processor in Verilog HDL. |
| Jul 2025 – Nov 2025 | Teaching Assistant, Embedded Systems (EEE3095S/EEE3096S) | University of Cape Town | Managed the tutor team. Ran all practicals and tutorials on C/C++ for microcontrollers and handled course administration. |
| Feb 2024 – Nov 2024 | EEE Department Tutor (EEE3088F, EEE3090F, EEE3097S) | University of Cape Town | Graded ~20 assignments a week at peak and used common misconceptions to shape teaching. Mentored groups of 5–7 students in labs. |
| Nov 2022 – Feb 2023 | Engineering Intern, Development & Production | Shrike Marine | Ran acceptance testing on 150 HUMS data loggers for military vehicles. Calibrated, assembled and tested 4 UAV power distribution units and improved the PDU GUI. Designed a smart mains-to-inverter changeover system. |
| Jan 2019 – Aug 2019 | Relationship Officer | Equity Bank Kenya | Handled large corporate cash transactions, Western Union and MoneyGram transfers, and negotiated FX rates. |

---

## 7. Education

- **MSc (Eng) Electrical Engineering: Robotics & Computer Vision**, University of Cape Town, 2025 – 2027 (in progress). Thesis: SANA. Supervisor: Dr. Paul Amayo. Mastercard Foundation Scholar.
- **BSc (Eng) Electrical & Computer Engineering (Hons), First Class**, University of Cape Town, 2021 – 2024
- **Kenya Certificate of Secondary Education (KCSE)**, Lenana School, 2015 – 2018

---

## 8. Research interests (for the academic section)

- Semantic perception and open-vocabulary mapping for field robotics
- Learned navigation (imitation learning, behavioural cloning, DAgger)
- **Future PhD direction:** lifelong, self-improving semantic autonomy, meaning robots that keep adapting their semantic maps and navigation policies across seasons and fields
- African agricultural robotics
- Embedded and high-performance systems (FPGA, microcontrollers, edge AI on Jetson)

**Publications:** "In preparation." Leave as a placeholder section. **[TO CONFIRM before listing anything]**

---

## 9. Teaching (optional dedicated page)

A short page showing teaching as a strength:
- Courses: EEE3096S (Assistant Lecturer), EEE4120F, EEE3095S/EEE3096S, EEE3088F, EEE3090F, EEE3097S
- Curriculum design: 25 practicals + 7 integrative projects; anti-superficiality toolkit (randomised parameters, AI-use logging policy, predict-before-measure cycles)
- Supervision: digital twin of the UCT AC Microgrid (Honours); agricultural 3D scanner (3rd year)

---

## 10. How I use AI (optional small section; shows AI fluency to recruiters)

I use AI agents daily across research, teaching and admin: scaffolding ROS 2 code, debugging perception pipelines, speeding up literature reviews and LaTeX thesis drafting, and automating course admin (marking sheets, rubrics, practical packs, Python mark-processing scripts). I always review outputs. Anything safety-critical is tested in simulation and bag replays before it runs on hardware, and I validate models on our own African farm data rather than trusting benchmark numbers.

---

## 11. Site structure

```
/            Home: hero (name, headline, tagline, CTA buttons: "View projects", "Download CV", "Contact"),
             featured SANA card, 3 other project cards, short skills strip, contact strip
/projects    Grid of all projects (filter chips: Robotics · ML/CV · Embedded · Research)
/projects/<slug>  Detail page per project (problem → what I built → results → stack → links → media)
/experience  Timeline (section 6) + education (section 7)
/research    Research interests, thesis summary, publications placeholder
/teaching    (optional) section 9
/about       Long bio (section 3), photo, platforms, interests
/contact     Email link + form (no phone), LinkedIn, GitHub, CV download
```
A one-page scroll version with anchor links is also fine if it stays scannable.

---

## 12. Design direction

- **Feel:** clean, engineering-grade, a little "lab notebook." Think precise grids, monospace accents for technical labels, generous whitespace.
- **Colour:** dark and light themes (respect `prefers-color-scheme`, plus a toggle). One accent colour. A field/earth green or a signal amber would suit the agricultural-robotics story.
- **Typography:** a clean sans for body text (e.g. Inter), with a monospace (e.g. JetBrains Mono) for tags, stack chips and dates.
- **Imagery:** real robot, field and hardware photos over stock images. Use short looping videos/GIFs of the robot where possible (lazy-loaded).
- **Hero idea (optional):** a subtle animated BEV-grid or crop-row line pattern in the background.
- **Must be responsive** (phone first) and accessible (WCAG AA contrast, alt text, keyboard navigation).

---

## 13. Technical requirements

- **Recommended stack:** Astro (or Next.js static export) + Tailwind CSS, with content in Markdown/MDX files so projects are easy to add. Deploy to GitHub Pages, Netlify or Vercel.
- Store all projects as content-collection entries (one `.md` per project with frontmatter: title, slug, dates, summary, stack[], tags[], links{github, demo, paper}, featured, cover image).
- **SEO:** proper `<title>` and meta descriptions, Open Graph/Twitter cards with a preview image, `sitemap.xml`, `robots.txt`, and JSON-LD `Person` schema (name, jobTitle, alumniOf UCT, sameAs LinkedIn/GitHub).
- **Performance:** Lighthouse ≥ 95 on all categories, optimised images (WebP/AVIF), no heavy JS frameworks on static pages.
- Contact form via Formspree/Netlify Forms, or just a `mailto:` fallback.
- Analytics: privacy-friendly (Plausible/Umami) or none.
- Custom domain ready. **[TO CONFIRM: domain, e.g. travimadox.com / travimadoxwebb.dev]**
- Include a README explaining how to add a new project and redeploy.

---

## 14. Do / Don't

**Do**
- Lead with SANA and real hardware.
- Keep every claim traceable to this brief.
- Make CV download and email one click from every page.

**Don't**
- Publish phone number, salary, visa/work-permit details or anything about current job searching beyond the "open to opportunities" badge.
- List the SANA paper's title or venue (double-anonymous review).
- Use skill percentage bars or generic stock "coding" imagery.
- Invent metrics, testimonials or publications.

---

## 15. Open items for Travimadox (the agent should list these back)

1. Professional headshot **[ASSET NEEDED]**
2. Robot/field photos and videos for SANA, the scanner and the hornbill scale **[ASSET NEEDED]**
3. Latest CV PDF **[ASSET NEEDED]**
4. Which GitHub repos are public and can be linked **[TO CONFIRM]**
5. Domain name and hosting preference **[TO CONFIRM]**
6. Preferred accent colour / any brand preferences **[TO CONFIRM]**
7. Whether to include the Teaching page and "How I use AI" section **[TO CONFIRM]**
8. Any awards, scholarships or talks beyond the Mastercard Foundation scholarship and the IndabaX hackathon **[TO CONFIRM]**
