---
title: "3D-printed Onewheel Rim Saver (XR/Pint)"
date: 2022-09-17
image: /blog/rim-saver/img/article.jpg

resources:
  - src: img/1.1/01-rim-saver-model.jpg
    params:
      caption: "Rim Saver model."
  - src: img/1.1/02-profile-outline.jpg
    params:
      caption: "The profile is tuned to fit nice and snug over the rim, it won't wedge out when the tire is pressed against it."

  - src: img/1.2/01-print-preview.jpg
    params:
      caption: "Sliced preview, notice the lines meet nicely with no gap on the top layer, it should work out this way at least in Cura with 0.4mm nozzle."
  - src: img/1.2/02-support-preview-detail.jpg
    params:
      caption: "The support preview with all my support settings visible."
  - src: img/1.2/03-printed-rim-guard.jpg
    params:
      caption: "A printed piece. The loose strings in the middle are the first few lines of the support, which don't stick well. They don't cause any issues, they'll come off with the support."

  - src: img/2/01-screwdriver-in-support.jpg
    params:
      caption: "Jam a screwdriver into the seam between the support and the Rim Saver."
  - src: img/2/02-screwdriver-pry-support.jpg
    params:
      caption: "Pry the support out."
  - src: img/2/03-pry-support-out.jpg
    params:
      caption: "Once you get it started, the support should coume out clean."
  - src: img/2/04-pull-support-out.jpg
    params:
      caption: "Yank the support out. :)"
  - src: img/2/05-support-removed.jpg
    params:
      caption: "Rim Saver with the support pulled out."

  - src: img/3/01-put-rim-saver-on-the-rim.jpg
    params:
      caption: "Put the Rim Saver on the rim on one side."
  - src: img/3/02-rim-saver-partially-set.jpg
    params:
      caption: "Work your way around and press the Rim Saver onto the rim. Around halfway through is the toughest part, I find what works best is to press the Rim Saver down onto the rim with your palm. By forcing it down it should gradually pop into place."
  - src: img/3/03-rim-saver-pulled-over-the-rim.jpg
    params:
      caption: "Towards the end it may be easier to press the Rim Saver completely over to the other side of the rim, then pulling it back up will make it pop into place."
  - src: img/3/04-rim-saver-installed.jpg
    params:
      caption: "The Rim Saver installed."
  - src: img/3/05-getting-the-rim-saver-off.jpg
    params:
      caption: "Getting the Rim Saver off is really easy with a pair of pliers. I'm using a piece of cloth here to not mangle it but that was just to keep it neat for the pictures."

  - src: img/4/01-scuffed-up-rim-saver.jpg
    params:
      caption: "Rim Saver holding out reasonably after some hard shredding."
  - src: img/4/02-board-shot.jpg
    params:
      caption: "My beat up board :) This shot is with the XtraRad tire, which I threw on for testing."
---
_It won't save your life, but it might save your rims._

A 3D-printed version of a Onewheel hub rim guard, designed for a good snug fit and with walls thick enough to take some abuse. Printed in 98A TPU.

<!--more-->
{{<load-photoswipe>}}

## Printing the Model

Get the model [here](https://www.printables.com/model/275164-onewheel-xrpint-rim-saver).

{{<gallery dir="1.1"/>}}

I slice my models with Cura. For this model, I set __"Walls > Wall Line Count"__ to __10__, which makes the whole top layer consist of only concentric wall lines for a nice clean look. I also set __"Walls > Z Seam Alignment"__ to __"Random"__, so that the Z seam is scattered around the perimeter for each layer and doesn't form a line going across the Saver.

I set __"Top/Bottom > Bottom Layers"__ to __40__, which means that there is no infill throughout the model, the inner layers (with a wall thickness of 10 lines) consist of the interleaving __"Lines"__ pattern, improving rigidity a bit.

The most important thing when printing this model, though, is the support configuration. You need a good support which you can also remove from the groove of the Rim Saver once it's printed.

Test and tune your support settings on a test model first, for me the __"Support Z Distance"__ of __0.2mm__ works perfectly (for both top and bottom of the support).

Then, an important value is __"Support X/Y Distance"__, I use __0.6mm__, which works well and is still quite easy to remove.

For the support patterns I use __"Support Pattern"__ __"Zig Zag"__ with __"Support Density"__ of __25%__, and a support interface on top with __"Support Interface Pattern"__ __"Grid"__ and __"Support Interface Density"__ __100%__. You can use whatever you find works well, I feel this pattern gives a reasonable support and the roof patern supports the concentric circles well.

After you set up the supports, check them carefully in the print preview to make sure the print lines will work.

{{<gallery dir="1.2"/>}}

I currently use and highly recommend the Fillamentum Flexfill TPU 98A filament. I've used other brands and had various issues (prints lifting off the bed due to high thermal instability, quality issues with receiving wet filament), this filament prints very nicely and is a bit stiffer than the other 98A filaments I've tried, and for my application, the stiffer the better. I print it at 230°C.


## Getting the Support Out

When set up properly, the support should be quite easy to remove.

{{<gallery dir="2"/>}}

## Mounting the Rim Saver on the Hub

Mounting the Rim Saver on the hub requires some effort, but it's not that hard. All my prints so far have been much easier to put on than the TFL Life Savers (which were tough even with a heat gun). You can use a heat gun to soften up the Rim Saver to make it easier for you, but it should be possible without it as well. Just gradually pull it over the rim, trying to set it in place as you work your way around the perimeter. Once you start getting close to the last part, it's easier to just pull it completely over to the other side of the rim, and then pulling it back towards the outside will make it pop into place.

{{<gallery dir="3"/>}}

## How Does it Hold Out?

I've gone through a few iterations of these, mostly ruining them when practicing nose slides, where I seem to hit my heel-side rim a lot on the curb. Based on that, this model already has some sections thickened to withstand more abuse. Also the Fillamentum Flexfill TPU 98A I'm using now seems to be noticeably more durable than my previous filament.

{{<gallery dir="4"/>}}
