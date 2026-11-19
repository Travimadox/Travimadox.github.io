---
title: 'Acotriangulator'
slug: acotriangulator
dates: 'EEE3097S, 2023'
summary: 'Finding where a sound came from on an A1 grid, from the time it takes to reach four microphones.'
stack: ['MATLAB', 'Python', 'Raspberry Pi Zero', 'GCC-PHAT', 'NTP']
tags: ['Embedded', 'Research']
order: 3
visual: board
---
## The problem

Acoustic localisation works out where a sound came from by comparing when it reaches each of several microphones. This three-person EEE3097S project, the Acotriangulator, set out to locate a sound source on an A1-sized grid using low-cost hardware.

## The system

Four microphones sit at the corners of the grid, wired in stereo pairs to two Raspberry Pi Zeros. A Network Time Protocol server on a PC keeps the two Pis' clocks in step, and each Pi records with `arecord` when triggered over SSH. The recordings travel to the PC, where GCC-PHAT estimates the time difference of arrival between microphone pairs and triangulation turns those differences into a position, shown in a graphical interface.

## My part: simulation and acceptance tests

I set up the simulation and wrote the acceptance test procedures. The simulation, a set of MATLAB scripts, places the four microphones at the grid's corners, propagates a sound from a chosen point, adds white Gaussian noise to mimic real conditions, and compares time-delay methods such as GCC-PHAT and plain cross-correlation before any hardware is involved.

## Results

The hardware side worked: sound emission, installation, audio capture, data transmission and the interface all passed their acceptance tests. The two that mattered most did not: the time-difference and position calculations missed their targets, so the system was not yet accurate enough for practical use. The report sets out the fixes: tighter synchronisation, better triangulation and time-delay algorithms, stronger noise filtering and higher-quality microphones.
