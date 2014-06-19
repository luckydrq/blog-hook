#!bin/bash

declare -r local_repo=$HOME/workspace/blog
declare -r remote_branch=luckydrq.com

cd $local_repo

# pull
git clean -f
git checkout $remote_branch && git pull origin $remote_branch

# compile blog
gor compile

#done
exit 0


