#!/bin/bash
HOST='195.179.236.201'
USER='u359007260.tamarackmarina.com'
PASSWD='Mino!7alim'
FILE='*'

if [ $1 == 'prod' ]
then
  SUBDIR='.'
fi

ncftpput -u $USER -p $PASSWD -R $HOST $SUBDIR ./build/*
exit 0