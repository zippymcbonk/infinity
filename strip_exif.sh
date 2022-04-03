#!/usr/bin/env bash

find $1 -name *.jpg -exec exiftool -overwrite_original -EXIF= {} \;
