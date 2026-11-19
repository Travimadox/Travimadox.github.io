---
title: 'Origami robot evolution'
slug: origami-robotics
dates: 'Jul – Nov 2023'
summary: 'Evolving the bodies and brains of modular origami robots to travel down slopes of different friction.'
stack: ['Python', 'MuJoCo', 'Isaac Gym', 'Linux']
tags: ['Robotics', 'Research']
order: 6
visual: robot
---
## The question

Origami robots fold and reshape themselves, and a robot that has to cross real terrain needs both a body and a controller suited to it. Building on Flanagan and Nitschke's work on adaptive folding, this project asked how the body and brain of a modular origami robot co-evolve when it has to travel down a slope, and how much the slope's friction changes the result.

## What I did

This was a research project for CSC2005Z in UCT Computer Science, supervised by Prof. Geoff Nitschke and co-supervised by Rhett Flanagan. Robots were built from brick-shaped modules and evolved in the MuJoCo physics simulator: each generation was simulated, scored, and the fittest became parents of the next, for 100 generations. Fitness was the distance a robot travelled down a 15° slope. I ran three experiments with slope friction coefficients of 0.1, 0.5 and 1.0.

## Results

The most successful robot moved in hops and jumps, with no sensors at all: its segmented body contracts and extends to throw itself down the slope, using gravity and momentum. Its form does the work.

Across all three surfaces the population adapted quickly in the first 20 or so generations, then levelled off and kept refining. Friction made the task harder: the average best fitness fell from 0.632 on the slipperiest slope to 0.577 at 0.5 and 0.494 at 1.0. At the highest friction the best fitness even declined late in the run, while the population's average held steady. The report received 84%, a distinction.
