#!/usr/bin/env bash

HOST='195.179.236.201'
USER='u359007260.tamarackmarina.com'
PASSWD='Mino!7alim'
SUBDIR='.'

if [ "$1" != "prod" ]; then
  echo "Usage: ./scripts/deploy.sh prod"
  exit 1
fi

ncftpput -u "$USER" -p "$PASSWD" -R "$HOST" "$SUBDIR" ./build/*
exit 0