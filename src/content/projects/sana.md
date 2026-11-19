---
title: 'SANA — Semantic Agricultural Navigation Agent'
slug: sana
dates: 'Apr 2025 – present'
summary: 'Semantic perception and learned navigation for a robot that finds its way through crop rows.'
stack: ['ROS 2 Jazzy', 'Python', 'PyTorch', 'YOLOE', 'Jetson Orin NX', 'LiDAR', 'Linux']
tags: ['Robotics', 'ML/CV', 'Research']
featured: 1
order: 1
visual: robot
links:
  github: 'https://github.com/Travimadox/SANA'
  paper: 'https://travimadox.github.io/sana-map-page/static/pdf/paper.pdf'
  demo: 'https://travimadox.github.io/sana-map-page/'
---

## Navigation without a recorded route

Agricultural robots in heterogeneous African farms need to navigate crop rows without hand-tuned pipelines or pre-recorded routes. SANA is my MSc thesis project in the African Robotics Unit at the University of Cape Town: a teach-free row-crop navigation system that connects semantic perception to a learned navigation policy.

I build and integrate the perception, mapping and navigation components on a Clearpath Husky A300. The semantic mapping pipeline runs live on the robot, and it has been tested on a commercial berry farm. An earlier phase adapted Neural SLAM to outdoor agriculture, with field data collected on a Unitree Go1 quadruped.

## System architecture

The central interface is a **persistent semantic bird’s-eye-view (BEV) map**. Perception writes to the map; navigation reads from it. This separates the visual interpretation of the scene from the policy that controls the robot.

1. **Perception:** stereo observations and open-vocabulary detection provide semantic information. I benchmarked YOLOE, YOLO-World, OWLv2 and Grounding DINO, selecting YOLOE as the primary detector.
2. **Persistent BEV semantic map:** an egocentric K×V×V tensor aggregates observations with max pooling in 5 cm cells.
3. **Navigation:** a behavioural-cloning policy reads a compact 7-D feature vector describing row offset, heading error, row densities, obstacle clearance and yaw. DAgger retraining incorporates additional corrective demonstrations.
4. **Control and safety:** a finite-state `RowNavPolicy` handles row following, row-end detection and headland turns. A SafetyFilter overrides the policy near obstacles.

## From perception to deployment

The system runs on a Clearpath Husky A300 using ROS 2 Jazzy and a Jetson Orin NX in a ZED Box. Sensor integration combines stereo cameras, 3D LiDAR and an IMU. Deploying on the robot makes compute, sensor alignment and integration constraints part of the engineering work.

Open-vocabulary prompting is one part of that work. In my project evaluation, appearance or “container” prompts, such as “vase”, provided better navigation utility than semantic prompts. This is a project-specific observation, rather than a claim about general detection performance.

## Evaluation

- **In the field:** on a commercial berry farm (Greendale, Klapmuts) the full mapping pipeline ran at 20.9 Hz on the robot, and at 13.7 Hz indoors. YOLOE ran at 30.3 fps onboard.
- **Accuracy:** inter-row spacing measured from the map had a mean absolute error of 0.062 m against surveyed ground truth, with no crop- or farm-specific detector training.
- **Navigation:** I evaluate the navigation system against Visual Teach & Repeat (VT&R) with four pre-registered hypotheses.
- **Odometry:** I compared RKO-LIO, FAST-LIO2 and KISS-ICP using absolute trajectory error (ATE) and relative pose error (RPE).
- **Tracking:** I validated ZED positional tracking against RTK ground truth on farm data.

The mapping results are published at SATNAC 2026. The steerable map on the homepage is a simplified model computed in the browser, not recorded output from these evaluations.

## Research context

MSc (Eng), Electrical Engineering: Robotics & Computer Vision, University of Cape Town, supervised by Dr. Paul Amayo. Supported by the Mastercard Foundation scholarship.

**T. Webb, P. Amayo, T. Nemaangani.** From Words to Rows: Prompt-Conditioned Real-Time Semantic Mapping for Agricultural Robots. *SATNAC 2026*, full paper. [Project page](https://travimadox.github.io/sana-map-page/) · [PDF](https://travimadox.github.io/sana-map-page/static/pdf/paper.pdf) · [Code](https://github.com/Travimadox/SANA-map)

The SANA navigation paper is under review at IEEE ICRA 2027; its title is withheld during double-anonymous review.

## Media and code

The code is public at [github.com/Travimadox/SANA](https://github.com/Travimadox/SANA). A system architecture figure, a documented BEV export and a row-navigation demo video will be added here when they can be shared. [Ask me about the project](/contact/).
