---
title: 'Handheld agricultural scanner'
slug: agricultural-scanner
summary: 'A portable multi-sensor platform for collecting agricultural 3D data.'
stack: ['ROS 2', 'Python', 'OpenSCAD', 'Stereo cameras', 'LiDAR']
tags: ['Robotics', 'Embedded']
featured: 2
order: 2
visual: scanner
---
## The problem

Collecting agricultural 3D data calls for a sensor platform that can be carried through the environment. I designed a handheld scanner that brings cameras, LiDAR and an IMU into one portable system.

## What I built

The scanner combines three ZED X One GS global-shutter cameras, a LiDAR and an IMU, built for outdoor, unstructured environments. I developed the ROS 2 Python package `ag_scanner` and designed an enclosure in OpenSCAD, bringing sensor integration and mechanical packaging together.

## Teaching and development

The platform is also the basis of a third-year design project that I co-supervise: a 3D reconstruction scanner for agricultural environments. It connects a practical data-collection problem with systems design and implementation.

## Results and media

The brief documents the scanner design and software package; it does not supply reconstruction accuracy, collection-rate results or deployment benchmarks. Those details remain pending confirmation.

**Still to add:** sample reconstructions. Repository availability is pending confirmation.
