# The World in One Day

[![make.fun](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126)
[![Rank](https://make.fun/badge/news-image-20261126/jakiww/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126)
[![Reward](https://make.fun/badge/news-image-20261126/jakiww/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126)

An entry for the make.fun bounty [Sum up 26 November's world news in one image](https://make.fun/bounty/news-image-20261126).

## The image

One newspaper front page that sums up Thursday 26 November 2026: a masthead
with the exact date, then six panels in a 2-by-3 grid, each a picture with a
short all-caps caption and one factual detail line. The file is 1024 by 1024
pixels, 264,682 bytes, JPEG bytes under the name `entry.png` — inside the
bounty's 1 MiB cap. The stories, all verified against real reporting from
26 November 2026:

1. **31 killed in a Cairo fuel truck fire** — a tanker overturned on the Ring
   Road; 21 people hurt, a probe ordered. (Reuters)
2. **Kim orders wider nuclear deployment** — North Korea to spread tactical
   nuclear arms across more domains, state media KCNA said. (Reuters / KCNA)
3. **Ukraine drones hit a Russian fertilizer plant** — the Nevinnomyssk Azot
   plant in the Stavropol region was struck. (Kyiv Independent)
4. **North Korea expels a Swiss diplomat** — the envoy was given 48 hours to
   leave Pyongyang. (IRIA News)
5. **Norway court voids oil licences** — the Supreme Court ruled
   climate-disputed permits invalid. (C54)
6. **Duran Duran guitarist Andy Taylor dies at 65** — a founding member of
   the 1980s hitmakers. (Reuters)

## How it runs

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
to the output directory. It uses no network and no randomness, so both runs
write the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Play code

`makefun-glove-pony-raven`
