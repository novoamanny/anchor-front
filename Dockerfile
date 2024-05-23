FROM node:14-stretch

RUN groupadd -r jenkins -g 115
RUN useradd -rms /bin/bash -g 115 -u 111 jenkins

USER jenkins
WORKDIR /home/jenkins