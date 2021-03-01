node {
    def imageTag = "codecept"
    def dockerHome = tool 'myDocker'
    stage("Initializing") {
        cleanWs();
        checkout scm;
        sh 'git reset --hard'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }

    stage("Building Images") {
        sh "docker build -t ${imageTag} -f docker/DockerFile ."
    }

      stage("Running Tests") {
        try {
            chmod +x jenkins/run-tests.sh
            // sh "jenkins/run-tests.sh ${env.BUILD_NUMBER}"
        }
        finally {
            sh "ls report/"
            allure includeProperties: false, jdk: '', results: [[path: 'report']]
        }
    }
  
}