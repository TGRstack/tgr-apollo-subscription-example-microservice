#!/bin/bash
cd /root/

echo $DOCKER_IMAGE_PATH

# Configure Artifactory instance with JFrog CLI
sh ./jfrog rt config MyArtifactory --url=$ARTIFACTORY_URL --user=$ARTIFACTORY_USER --password=$ARTIFACTORY_PASS
sh ./jfrog rt c show

# Docker client info
RUN docker info
# Login to Artifactory docker registry
RUN docker login -u $ARTIFACTORY_USER -p $ARTIFACTORY_PASS $ARTIFACTORY_DOCKER_REPOSITORY
# Define default command.


# Push docker image to Artifactory
sh ./jfrog rt dp $ARTIFACTORY_DOCKER_REPOSITORY/$DOCKER_IMAGE:$CI_JOB_ID $DOCKER_REPOSITORY_KEY  \
  --build-name=gitlabci-docker-artifactory \
  --build-number=$CI_JOB_ID
# Collect build environment variables and build tools information using JFrog CLI
sh ./jfrog rt bce gitlabci-docker-artifactory $CI_JOB_ID
# Publish build information to Artifactory
sh ./jfrog rt bp gitlabci-docker-artifactory $CI_JOB_ID
