---
title: 'Denoising LODOX Statscan images'
slug: lodox-denoising
dates: 'BSc thesis, Jul – Nov 2024'
summary: 'Unsupervised denoising of low-dose, full-body trauma X-rays with Noise2Void and Noise2Noise.'
stack: ['Python', 'Google Colab', 'Jupyter', 'Machine learning']
tags: ['ML/CV', 'Research']
order: 4
visual: map
---
## The problem

The LODOX Statscan is a low-dose, full-body X-ray system used in trauma care, where diagnosis has to be fast and accurate. Low dose means noisy images. Medical image denoising is well studied, but no published work had looked at Statscan images specifically, even as trauma centres around the world adopt the system.

## What I did

This was my BSc (Eng) final-year thesis at UCT, supervised by Dr. Yaaseen Martin. A clean Statscan image is practically impossible to obtain, so the models had to learn without clean targets. I customised two unsupervised denoisers, Noise2Void (N2V) and Noise2Noise (N2N), and trained them on scans of a custom-made phantom taken at different tube voltages to produce different noise levels. After training and hyperparameter tuning, I tested them on a CT calibration phantom scanned at a range of voltages. The project's desktop GUI brings the denoisers together behind one start screen.

## Results

Neither model denoised the images as well as hoped. N2V did better than N2N: it denoised more aggressively while preserving perceptual quality better, which matters most in clinical use. I traced the weak results to two causes: training epochs limited by the available hardware, and limitations of the models themselves, which led to poor generalisation.

The thesis shows that unsupervised methods such as N2V and N2N have potential for Statscan images, and sets out the limitations that further work must address before they could be clinically viable.
