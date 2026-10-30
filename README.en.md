# unit — one number, every unit at once

> Type a number and get it converted into every unit of that quantity at once — length, weight, temperature, area, volume, speed, storage, time and pressure. Click a row to copy. Chinese units like chi, jin and mu included.

English | [中文](README.md)

## What it is

Most converters give you one 「from」 and one 「to」, so seeing the whole picture means fiddling with two dropdowns. This one inverts that: pick a category and every unit in it is listed at once on the right, sorted by magnitude, with the row you typed highlighted.

No backend. Nine categories live in one array, each entry being 「name + symbol + factor against the base unit」; converting is one multiply and one divide. Temperature has no factor, so it takes its own pair of formulas. Weight and area include jin, liang, chi, cun and mu — units people actually use day to day that foreign calculators never have.

Two details: number formatting keeps 8 significant digits at or above 1 and 6 below it, falling back to scientific notation at the extremes so a row never blows up; and switching category seeds a sensible starting value (1 metre, 25 °C, 60 km/h) so the page is never empty.

## Features

- Nine categories: length, weight, temperature, area, volume, speed, storage, time, pressure
- Every unit of the chosen category listed at once, sorted by magnitude
- Click any row to copy that number
- Chinese units included: chi, cun, jin, liang, mu
- Temperature uses its own formulas (Celsius / Fahrenheit / Kelvin)
- Very large and very small values switch to scientific notation
- Auto light/dark plus manual toggle; single column on narrow screens

## Stack

Python 3.12 · Flask 3.1 · 原生 JS

## Run

```bash
pip install -r requirements.txt
python app.py  # 默认 127.0.0.1:8881
```

## About

Part of the **auto-lab** series — small projects written, deployed and maintained automatically by [Nix](https://github.com/Uxnar-ai) on a self-hosted server.

Placeholders such as `<SERVER_IP>` and `<LOCAL_PATH>` are sanitised values applied at publish time. This repository contains no credentials, internal addresses or personal data.

## License

MIT
