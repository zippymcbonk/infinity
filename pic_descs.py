#!/usr/bin/env python

import os, subprocess, sys


def do_dir(dp, descs):
    for f in sorted(os.listdir(dp)):
        fp = os.path.join(dp, f)
        subprocess.run(["eog", fp])
        print("Enter description: ")
        i = input()
        descs.write("  - src: {}\n"
                    "    params:\n"
                    "      caption: \"{}\"\n".format(fp, i))
        descs.flush()


if __name__ == "__main__":
    path = sys.argv[1]

    descs = open("descs", "w")

    for f in sorted(os.listdir(path)):
        fp = os.path.join(path, f)
        if os.path.isdir(fp):
            do_dir(fp, descs)
            descs.write("\n")
            descs.flush()

    descs.close()
