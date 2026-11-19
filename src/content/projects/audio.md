---
title: 'Audio compression & African music'
slug: african-music-compression
dates: 'EEE4114F, 2024'
summary: 'How extra MP3 compression degrades already-compressed Amapiano and Bongo Flava tracks.'
stack: ['MATLAB', 'Python']
tags: ['Research']
order: 5
visual: board
---
## The problem

Most music reaches listeners already compressed, and streaming platforms may compress it again. Research on what that does to sound has focused on Western genres. This project, for EEE4114F at UCT, asked how two popular African genres with contrasting sounds hold up: Amapiano from South Africa, built on synthesised basslines and percussion, and Bongo Flava from Tanzania, built on live instruments and vocal harmonies.

## What I did

I took pre-compressed tracks of both genres from YouTube and compressed them again with MP3 at 64, 128 and 256 kbps. I measured the damage with SNR, PSNR and SSIM, and with PEAQ, which models human hearing. I expected Amapiano's synthetic sound to be the more resilient.

## Results

Higher bitrates clearly preserved quality. At 256 kbps the extra compression was imperceptible by PEAQ, 128 kbps suits uses where minor flaws are tolerable, and below 64 kbps the distortion was audible. Against my hypothesis, Bongo Flava held up slightly better than Amapiano across bitrates, possibly because of how the tracks were originally encoded or their frequency content.

Tracks sourced from YouTube vary in how they were encoded, and the study used objective metrics only; listening tests are the natural next step.
