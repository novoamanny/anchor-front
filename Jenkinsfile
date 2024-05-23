pipeline {
  agent { dockerfile true }
  
  environment {
    npm_config_cache = 'npm-cache'
    ZIPFILENAME = """${sh(
      returnStdout: true,
      script: 'echo "$(echo $BRANCH_NAME|tr \'/\' \'_\')-static.zip"'
    ).trim()}"""
  }
  stages {
    stage('Build') {
      when {
        not {
          branch "production"
        }
      }
      steps {
        // sh 'yarn cache clean'
        sh 'yarn install'
        // sh 'yarn add @babel/core@7.0.0'
        sh 'yarn run clean'
        sh 'STAGING=true yarn run build'
      }
    }

    stage('Build production') {
      when {
        branch "production"
      }
      steps {
        // sh 'yarn cache clean'
        sh 'yarn install'
        // sh 'yarn add @babel/core@7.0.0'
        sh 'yarn run clean'
        sh 'yarn run build'
      }
    }

    stage('Post') {
      environment {
        NEXUS_USERPASS = credentials('nexus-jenkins')
      }
      steps {
        archiveArtifacts(
          artifacts: 'public/**/*',
          excludes: 'Jenkinsfile'
        )
        zip(
          zipFile: "$ZIPFILENAME",
          dir: 'public',
          glob: "**"
        )
        sh "curl -k -v -u ${env.NEXUS_USERPASS} --upload-file $ZIPFILENAME https://nexus.digitalthrive.com/repository/raw/anchorfab/$ZIPFILENAME"
        slackSend(channel: '#anchor-dev', color: 'good', message: "Build of $BRANCH_NAME finished.", tokenCredentialId: 'slack-token', teamDomain: 'warren-douglas')
      }
    }

    stage('Deploy to dev') {
      when {
        // skip this stage unless branch is main.
        branch "main"
      }
      steps {
        ansibleTower(
          jobTemplate: 'Deploy anchorfab dev',
          towerServer: 'AWX',
          importTowerLogs: true,
          verbose: false
        )
      }
    }
    stage('Deploy to prod') {
      when {
        branch "production"
      }
      steps {
        ansibleTower(
          jobTemplate: 'Deploy anchorfab prod',
          towerServer: 'AWX',
          importTowerLogs: true,
          verbose: false
        )
      }
    }
  }
  post{
      failure{
          slackSend(channel: '#anchor-dev', color: 'danger', message: "Build failed - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)", tokenCredentialId: 'slack-token', teamDomain: 'warren-douglas')
      }
  }
}