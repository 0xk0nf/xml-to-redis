#!/bin/bash

while getopts ":v:" opt; do
  case $opt in
    v)
      FILE_PATH="$OPTARG"
      docker-compose up -d
      docker-compose exec app node src/index.js "$FILE_PATH" -v
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      ;;
  esac
done
