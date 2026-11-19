---
title: 'Southern Ground-Hornbill monitoring'
slug: hornbill-monitoring
dates: 'EEE4113F, 2024'
summary: 'A solar-powered perch scale that weighs wild Southern Ground-Hornbills at the nest, without handling them.'
stack: ['ESP32', 'ESP32-CAM', 'BME280', 'HX711 load cell', 'C/C++']
tags: ['Embedded', 'Research']
order: 7
visual: board
---
## The problem

Researchers at UCT's FitzPatrick Institute run a Southern Ground-Hornbill conservation programme in Kruger National Park. One PhD study looks at how rising temperatures affect the endangered birds' chicks, and that needs the weight of individual adult birds. There was no way to get it: weighing by hand is labour-intensive, risky for the researchers, and disturbs the birds.

## What we built

A four-person EEE4113F design project: an artificial branch at the nest that rests on a load cell, so a bird weighs itself when it perches. The scale logs the temperature and humidity around the nest, a camera captures footage matched to each weight so readings can be tied to individual birds, and solar power keeps it running between the researchers' twice-monthly nest checks. The team split it into four subsystems: the mechanical scale, power, dynamic weight analysis, and electronics and controls.

## My part: electronics and controls

I designed the subsystem that ties it together. An ESP32 reads the load cell through an HX711 and the nest climate from a BME280, chosen over a DHT11 for its accuracy and range. It wakes an ESP32-CAM over a wired UART link, which costs less power than ESP-NOW wireless, and stamps every record from a real-time clock so weights line up with the footage. Data is written to an SD card as CSV that the researchers can open directly, and the ESP32 sleeps between visits to stretch the battery.

## Results

The subsystem met most of its specifications: scale calibration, weight measurement, data handling and image capture all worked. Time synchronisation and power draw in sleep mode fell short; software adjustments, hardware improvements and more project time could fix both. The prototype showed the core idea working.
