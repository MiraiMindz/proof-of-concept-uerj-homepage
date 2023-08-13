#!/usr/bin/env bash

if [[ -e $(command -v git) ]]; then
    if [[ -e $(command -v nvim) ]]; then
        clear
        git add .
        git commit -m "made some changes"
        git push
        nvim
        clear
    fi
fi

