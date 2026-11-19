---
title: 'STM32 EnviroSensing HAT'
slug: stm32-sense-hat
dates: 'EEE3088F, 2023'
summary: 'A battery-powered sensor board for an STM32: temperature and light sensing, logging, and a USB link to a host computer.'
stack: ['KiCad', 'STM32F051', 'I²C', 'UART', 'PCB design']
tags: ['Embedded']
order: 8
visual: board
---
## The board

A three-person EEE3088F design project: a HAT (hardware attached on top) that measures, logs and sends out environmental readings, for uses such as greenhouse climate control and home monitoring. We designed the schematics and a 100 × 100 mm PCB in KiCad, split into three modules.

## Power

An 18650 lithium-ion cell charges from USB through a TP4056 charger, behind a DW01 protection IC with dual MOSFETs against overcharge, over-discharge and short circuits. An MCP1700 low-dropout regulator turns the 5 V bus into the 3.3 V rail for the microcontroller and sensors; we checked its power dissipation against its thermal limits.

## Microcontroller and sensing

An STM32F051 (Arm Cortex-M0) runs the board, with an EEPROM for logging over I²C and an FTDI FT234XD UART bridge to the host computer. An ST-Link debugger made it onto the board after a late debate. For sensing, a TMP102 measures temperature (±0.5 °C, 12-bit), an LTR-303ALS measures light from 0.01 to 64k lux, and an LDR adds a simple ambient-light reading. We chose these over a BME280 to stay within budget, trading a little accuracy for cost.

## Status and next steps

We had the board manufactured and assembled as prototype V0.0. The interim design meets the client's basic requirements. The report lists the next improvements: an easier charging setup, an ESP32 for wireless data and battery alerts, and sleep modes to save power. With the EEPROM, logging once a second fills the memory in about two days.
