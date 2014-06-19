#!bin/bash

declare -r remote_branch=luckydrq.com
declare -r local_repo=$HOME/workspace/blog/$remote_branch

cd $local_repo

# pull
git clean -f
git checkout $remote_branch && git pull origin $remote_branch

# compile blog
gor compile

#done
exit 0


